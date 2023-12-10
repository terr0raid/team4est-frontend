import createMiddleware from 'next-intl/middleware'
import { NextRequest, NextResponse } from 'next/server'
import { verifyJwtToken } from '@/lib/jwt/auth'
import { isAuthPages } from '@/lib/utils/isAuthPages'

const i18n = createMiddleware({
	locales: ['en', 'tr'],

	defaultLocale: 'en',
	localeDetection: true,
})

export async function middleware(request: NextRequest) {
	const { nextUrl, cookies } = request
	if (isAuthPages(nextUrl.pathname)) {
		if (nextUrl.pathname.includes('/logout')) {
			const res = NextResponse.redirect(new URL('/', request.url))

			res.cookies.delete('token')

			return res
		}
		const { value: token } = cookies.get('token') ?? { value: null }
		const hasVerifiedToken = token && (await verifyJwtToken(token))

		if (
			hasVerifiedToken === null ||
			hasVerifiedToken === undefined ||
			!hasVerifiedToken
		) {
			i18n(request)
		} else {
			return NextResponse.redirect(new URL('/', request.url))
		}
	}

	return i18n(request)
}

export const config = {
	matcher: [
		'/((?!api|_next/static|_next/image|_next/chunks|assets|favicon.ico|sw.js).*)',
	],
}
