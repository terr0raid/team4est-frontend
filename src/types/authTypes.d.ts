interface LoginRequest {
	email: string
	password: string
}

interface RegisterRequest {
	email: string
	password: string
	roles?: string[]
}

interface AuthResponse {
	accessToken: string
	refreshToken: string
	tokenType: string
	expiresIn: number
	expiresAt: number
}

interface AuthErrorResponse {
  error: string
  error_description: string
}

