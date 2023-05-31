'use client'

import DefaultButton from '@/stories/buttons/DefaultButton'
import DefaultText from '@/stories/typography/DefaultText'
import { useEffect } from 'react'

export default function Error({
	error,
	reset,
}: {
	error: Error
	reset: () => void
}) {
	useEffect(() => {
		console.error(error)
	}, [error])

	return (
		<div className='w-full h-screen flex flex-col space-y-6 items-center justify-center'>
			<DefaultText type='h2' element='h2'>
				An error occurred
			</DefaultText>
			<DefaultButton variant='standart' onClick={() => reset()}>
				Try again
			</DefaultButton>
		</div>
	)
}
