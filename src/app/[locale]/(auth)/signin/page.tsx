import SignInCard from '@/components/cards/SignInCard'
import { revalidatePath } from 'next/cache'
import React from 'react'

function SignIn() {
	return (
		<div className='flex min-h-screen flex-col items-center justify-center'>
			<SignInCard />
		</div>
	)
}

export default SignIn
