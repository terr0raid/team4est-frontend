import { cookies } from 'next/headers'
const fromServer = async (idOrEmailOrUsername: string) => {
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

export const useUser = () => {}

useUser.fromServer = fromServer
