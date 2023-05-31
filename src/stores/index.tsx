import { create } from 'zustand'

import { createUserSlice, UserSlice } from './user-store'
import { createAuthSlice, AuthSlice } from './auth-store'

interface Store extends UserSlice, AuthSlice {
	hydrateStore(initialStore: any): void
}

export const useStore = create<Store>((...args) => ({
	...createUserSlice(...args),
	...createAuthSlice(...args),
	hydrateStore: (data: any) => {
		const [set] = args
		set({ ...data })
	},
}))
