'use client'
import { useRef } from 'react'
import { useStore } from './index'

export function StoreInitializer({
	initialStore,
	children,
}: {
	initialStore?: any
	children?: any
}) {
	const initializedBefore = useRef(false)

	if (!initializedBefore.current) {
		useStore.getState().hydrateStore(initialStore)
		initializedBefore.current = true
	}

	return children
}
