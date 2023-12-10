import { Metadata } from 'next'
import { useLocale } from 'next-intl'
import { notFound } from 'next/navigation'

export const metadata: Metadata = {
	title: 'welcome to team4est',
}

export default async function AuthLayout({
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

	return <>{children}</>
}
