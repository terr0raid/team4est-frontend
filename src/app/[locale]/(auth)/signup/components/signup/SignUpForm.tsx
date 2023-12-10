'use client'
import React, { useState } from 'react'
import { NetworkManager } from '@/core/network/NetworkManager'
import DefaultButton from '@/stories/buttons/DefaultButton'
import { SizeEnum } from '@/stories/constants/sizeEnum'
import { TextTypes } from '@/stories/constants/textTypes'
import { VariantEnum } from '@/stories/constants/variantEnum'
import TextField from '@/stories/fields/TextField'
import DefaultText from '@/stories/typography/DefaultText'
import { useStore } from '@/stores'
import Spinner from '@/stories/progress/Spinner'
import { useRouter } from 'next/navigation'

type SignUpFormProps = {
	email: string
	password: string
	sign_up: string
	privacy_text: string
	privacy_link: string
	title: string
	already_have_an_account: string
	next: string
}

function SignUpForm({ ...props }: SignUpFormProps) {
	const setAuth = useStore(state => state.setAuth)
	const router = useRouter()

	const [isLoading, setIsLoading] = useState(false)

	const [passwordError, setPasswordError] = useState('')
	const [emailError, setEmailError] = useState('')

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		try {
			setIsLoading(true)
			const formData = new FormData(e.currentTarget)
			const res = await NetworkManager.post('register', {
				email: formData.get('email') as string,
				password: formData.get('password') as string,
			})

			if (res.status === 201) {
				const { data } = await res.json()
				setAuth({ auth: data })
				router.push('signup/details')
			} else {
				const { message } = await res.json()
				if (message.toLowerCase().includes('password')) {
					setPasswordError(message)
				}
				if (message.toLowerCase().includes('email')) {
					setEmailError(message)
				}
			}
		} catch (error) {
			console.log(error)
		} finally {
			setIsLoading(false)
		}
	}
	return (
		<form className='space-y-6' onSubmit={handleSubmit}>
			<TextField
				args={{
					tabIndex: 1,
				}}
				label={props.email}
				type='email'
				name='email'
				id='email'
				error={emailError}
				onFocus={() => setEmailError('')}
				variant={VariantEnum.OUTLINED}
				placeholder='terr0raid@team4est.com'
				size={SizeEnum.MEDIUM}
				fullWidth
				required
			/>

			<TextField
				args={{
					tabIndex: 2,
				}}
				label={
					<DefaultText
						type={TextTypes.body2}
						element='p'
						style='flex justify-between w-full'
					>
						{props.password}
					</DefaultText>
				}
				type='password'
				name='password'
				placeholder='••••••••'
				id='password'
				error={passwordError}
				onFocus={() => setPasswordError('')}
				variant={VariantEnum.OUTLINED}
				size={SizeEnum.MEDIUM}
				fullWidth
				required
			/>

			<DefaultButton
				args={{
					tabIndex: 3,
				}}
				type='submit'
				variant={VariantEnum.STANDART}
				size={SizeEnum.MEDIUM}
				style='flex justify-center'
				fullWidth
				disabled={isLoading}
			>
				{isLoading ? <Spinner /> : props.next}
			</DefaultButton>
		</form>
	)
}

export default SignUpForm
