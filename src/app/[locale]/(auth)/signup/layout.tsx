import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'team4est signup',
}

export default function AuthLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return <body>{children}</body>
}
