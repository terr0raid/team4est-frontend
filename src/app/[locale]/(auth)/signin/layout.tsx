import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'team4est signin',
}

export default function AuthLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return <body>{children}</body>
}
