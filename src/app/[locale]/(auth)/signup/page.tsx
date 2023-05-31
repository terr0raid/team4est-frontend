import SignUpCard from '@/components/signup/SignUpCard'
import { useAuth } from '@/hooks/useAuth'
import React from 'react'
async function SignUp() {
	const token = useAuth.fromServer()
	return (
		<div>
			<SignUpCard />
		</div>
	)
}

export default SignUp
