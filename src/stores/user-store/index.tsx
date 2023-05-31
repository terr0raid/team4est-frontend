import { StateCreator } from 'zustand'
import { User } from '../../../types'

export interface UserSlice {
	user: User | null
	setUser: ({ idOrEmailOrUsername }: { idOrEmailOrUsername?: string }) => void
	logout: () => void
}

export const createUserSlice: StateCreator<UserSlice, [], [], UserSlice> = (
	set: any
) => ({
	user: null,
	setUser: async ({ idOrEmailOrUsername }) => {
		const user = await fetch(`/api/user?searchParam=${idOrEmailOrUsername}`)
		set({ user: await user.json() })
	},
	logout: () => set({ user: null }),
})
