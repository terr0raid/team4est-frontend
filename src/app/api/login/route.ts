import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { useAuth } from '@/hooks/useAuth'

export async function POST(req: Request) {
	const cookieList = cookies()
	const { email, password } = await req.json()
	try {
		const res = await fetch(`http://localhost:8080/api/v1/auth/login`, {
			method: 'POST',
			body: JSON.stringify({ email, password }),
			headers: {
				'Content-Type': 'application/json',
			},
		})

		if (res.status === 200) {
			const data = await res.json()
			cookieList.set('token', data.accessToken)
			cookieList.set('refreshToken', data.refreshToken)

			const auth = { ...data, user: await useAuth.fromServer() }

			const response = NextResponse.json(
				{ success: true, data: auth },
				{ status: 200, headers: { 'content-type': 'application/json' } }
			)

			return response
		} else {
			const { message, status } = await res.json()
			return NextResponse.json(
				{
					success: false,
					message: message,
				},
				{ status: status || 403 }
			)
		}
	} catch (error) {
		return NextResponse.json(
			{
				success: false,
				message: 'Something went wrong',
			},
			{ status: 500 }
		)
	}
}
