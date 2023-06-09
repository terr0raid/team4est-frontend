import { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import { useLocale } from 'next-intl'
import { notFound } from 'next/navigation'
import '../../styles/globals.css'
import { StoreInitializer } from '@/stores/StoreInitializer'
import { useAuth } from '@/hooks/useAuth'
import { Auth } from '../../../types'
import { cookies } from 'next/headers'

const open_sans = Open_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
}

async function getData(idOrEmailOrUsername: string) {
	const cookie = cookies()
	const { value: token } = cookie.get('token') || { value: null }
	const res = await fetch(
		`http://localhost:8080/api/v1/users?searchParam=${idOrEmailOrUsername}`,
		{
			next: {
				revalidate: 10,
			},
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`,
			},
		}
	)

	return res.json()
}

export default async function LocaleLayout({
	children,
	params,
}: {
	params: any
	children: React.ReactNode
}) {
	const locale = useLocale()
	if (params.locale !== locale) {
		notFound()
	}

	const auth: Auth = { payload: await useAuth.fromServer() }
	let user = null
	if (auth.payload) user = await getData(auth.payload.id)

	return (
		<html lang={locale} data-mode='dark'>
			<StoreInitializer initialStore={{ auth, user }} />
			<body className={open_sans.className}>{children}</body>
		</html>
	)
}
