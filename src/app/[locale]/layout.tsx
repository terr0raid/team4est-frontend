import { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import { useLocale } from 'next-intl'
import { notFound } from 'next/navigation'
import { StoreInitializer } from '@/stores/StoreInitializer'
import { useAuth } from '@/hooks/useAuth'
import { Auth, User } from '@/types'
import '@/styles/globals.css'
import { useUser } from '@/hooks/useUser'

const open_sans = Open_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'team4est',
	description: 'share your ideas with the world',
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

	const auth = await useAuth.fromServer()
	let user: User | undefined = undefined
	if (auth) user = await useUser.fromServer(auth.id)

	return (
		<html lang={locale} data-mode='dark'>
			<StoreInitializer
				initialStore={{
					auth,
					user: {
						id: '1',
						username: 'team4est',
						email: 'keke@gmail.com',
						profile:
							'https://team4est.blob.core.windows.net/team4estcontainer/profiles/54a3cc27-314a-460a-b384-1044fa75d5a5.jpg',
						name: 'ahmet',
						lastname: 'keke',
						phone: '123456789',
						birthdate: '12/12/12',
						bio: 'bio',
						createdAt: '12/12/12',
						updatedAt: '12/12/12',
					},
				}}
			/>
			<body className={open_sans.className}>{children}</body>
		</html>
	)
}

// {
// 	id: '1',
// 	username: 'team4est',
// 	email: 'keke@gmail.com',
// 	profile:
// 		'https://team4est.blob.core.windows.net/team4estcontainer/profiles/54a3cc27-314a-460a-b384-1044fa75d5a5.jpg',
// 	name: 'ahmet',
// 	lastname: 'keke',
// 	phone: '123456789',
// 	birthdate: '12/12/12',
// 	bio: 'bio',
// 	createdAt: '12/12/12',
// 	updatedAt: '12/12/12',
// }
