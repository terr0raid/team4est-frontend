import { NextResponse } from 'next/server'

export async function POST(req: Request) {
	const { email, password } = await req.json()
	const res = await fetch(`http://localhost:8080/api/v1/auth/login`, {
		method: 'POST',
		body: JSON.stringify({ email, password }),
		headers: {
			'Content-Type': 'application/json',
		},
	}).then(res => res.json())

	return NextResponse.json(res, { status: res.status })
}
