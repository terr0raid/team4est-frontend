import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'

export async function GET(req: Request) {
	const { searchParams } = new URL(req.url)
	const searchParam = searchParams.get('searchParam')
	const cookiesList = cookies()
	const { value: token } = cookiesList.get('token') || { value: null }
	const res = await fetch(
		`http://localhost:8080/api/v1/users?searchParam=${searchParam}`,
		{
			headers: {
				Authorization: `Bearer ${token}`,
			},
		}
	)
	const user = await res.json()

	return NextResponse.json(user, { status: res.status })
}
