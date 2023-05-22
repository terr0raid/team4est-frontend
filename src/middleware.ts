import createMiddleware from 'next-intl/middleware'

export default createMiddleware({
	locales: ['en-US', 'tr-TR'],

	defaultLocale: 'en-US',
	localeDetection: true,
})

export const config = {
	matcher: [
		'/((?!api|_next/static|_next/image|_next/chunks|assets|favicon.ico|sw.js).*)',
	],
}
