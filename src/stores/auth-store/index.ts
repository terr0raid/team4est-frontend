import { verifyJwtToken } from '@/lib/jwt/auth'
import { StateCreator } from 'zustand'
import { Auth } from '../../types'

export interface AuthSlice {
	auth: Auth | null
	setAuth: ({ auth }: { auth: Auth }) => void
	logout: () => void
}

export const createAuthSlice: StateCreator<AuthSlice, [], [], AuthSlice> = (
	set: any
) => ({
	auth: null,
	setAuth: ({ auth }) => {
		set({ auth })
	},

	logout: () => set({ user: null }),
})
