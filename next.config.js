/** @type {import('next').NextConfig} */
const withNextIntl = require('next-intl/plugin')('./src/i18n.ts')

const path = require('path')
const loaderUtils = require('loader-utils')

const hashOnlyIdent = (context, _, exportName) =>
	loaderUtils
		.getHashDigest(
			Buffer.from(
				`filePath:${path
					.relative(context.rootContext, context.resourcePath)
					.replace(/\\+/g, '/')}#className:${exportName}`
			),
			'md4',
			'base64',
			10
		)
		.replace(/[^a-zA-Z0-9-_]/g, '_')
		.replace(/^(-?\d|--)/, '_$1')

module.exports = withNextIntl({
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'team4est.blob.core.windows.net',
			},
		],
	},

	webpack: config => {
		const rules = config.module.rules
			.find(rule => typeof rule.oneOf === 'object')
			.oneOf.filter(rule => Array.isArray(rule.use))

		rules.forEach(rule => {
			rule.use.forEach(moduleLoader => {
				if (
					moduleLoader.loader?.includes('css-loader') &&
					!moduleLoader.loader?.includes('postcss-loader')
				)
					moduleLoader.options.modules.getLocalIdent = hashOnlyIdent
			})
		})

		return config
	},
})
