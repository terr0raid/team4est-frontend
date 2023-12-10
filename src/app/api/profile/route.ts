import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'

export async function POST(req: Request) {
	const formData = await req.formData()
	const cookie = cookies()
	const { value: token } = cookie.get('token') || { value: null }

	const res = await fetch(`http://localhost:8080/api/v1/blob/profile`, {
		method: 'POST',
		body: formData,
		headers: {
			Authorization: `Bearer ${token}`,
		},
		duplex: 'half',
	})

	return NextResponse.json(await res.json(), { status: res.status })
}
