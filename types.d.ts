import { JWTPayload } from 'jose'

interface User {
	id: string
	username: string
	email: string
	profile: string
	phone: string
	birthdate: string
	bio: string
	createdAt: string
	updatedAt: string
}

interface Payload extends JWTPayload {
	id: string
	email: string
	roles: string[]
}

interface Auth {
	accessToken?: string
	refreshToken?: string
	tokenType?: string
	expiresIn?: number
	expiresAt?: number
	payload: Payload | null
}
