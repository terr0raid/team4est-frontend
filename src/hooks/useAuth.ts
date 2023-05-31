import { verifyJwtToken } from '@/lib/jwt/auth'
import { cookies } from 'next/headers'
const fromServer = async () => {
	const cookieList = cookies()
	const { value: token } = cookieList.get('token') ?? { value: null }
	const payload = await verifyJwtToken(token as string)

	return payload
}

export const useAuth = () => {}

useAuth.fromServer = fromServer
