import { JWTPayload } from 'jose'
import React from 'react'

interface User {
	id: string
	username: string
	name: string
	lastname: string
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
	user?: Payload | null
}

interface Step {
	step: number
	active: boolean
	completed: boolean
	label: string
}

interface Dialog {
	message: string
	title: string
	type: 'success' | 'error' | 'warning' | 'info'
}
