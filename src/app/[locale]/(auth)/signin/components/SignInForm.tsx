'use client'
import { NetworkManager } from '@/core/network/NetworkManager'
import DefaultButton from '@/stories/buttons/DefaultButton'
import { SizeEnum } from '@/stories/constants/sizeEnum'
import { TextTypes } from '@/stories/constants/textTypes'
import { VariantEnum } from '@/stories/constants/variantEnum'
import TextField from '@/stories/fields/TextField'
import DefaultText from '@/stories/typography/DefaultText'
import LinkText from '@/stories/typography/LinkText'
import React, { useRef, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useStore } from '@/stores'
import Spinner from '@/stories/progress/Spinner'
import toast, { Toaster } from 'react-hot-toast'
import Card from '@/stories/cards/Card'
import IconButton from '@/stories/buttons/IconButton'

type SignInCardProps = {
	email: string
	password: string
	sign_in: string
	forgot_password: string
}

function SignInForm({ ...props }: SignInCardProps) {
	const router = useRouter()
	const searchParams = useSearchParams()

	const formRef = useRef<HTMLFormElement>(null)
	const setAuth = useStore(state => state.setAuth)
	const fetchUser = useStore(state => state.fetchUser)

	const [isLoading, setIsLoading] = useState(false)

	const [passwordError, setPasswordError] = useState('')
	const [emailError, setEmailError] = useState('')

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		try {
			setIsLoading(true)
			toast('this is a error message')
			const formData = new FormData(e.currentTarget)

			const res = await NetworkManager.post('login', {
				email: formData.get('email') as string,
				password: formData.get('password') as string,
			})

			if (res.status === 200) {
				const { data } = await res.json()
				setAuth({ auth: data })
				fetchUser({ idOrEmailOrUsername: data?.user?.id as string })
				const nextUrl = searchParams.get('next')
				router.push(nextUrl ?? '/')
				router.refresh()
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
			toast.error('error')
		} finally {
			setIsLoading(false)
		}
	}

	return (
		<>
			<form className='space-y-6' ref={formRef} onSubmit={handleSubmit}>
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
							<LinkText
								args={{
									tabIndex: 4,
								}}
								href='/password-reset'
								type={TextTypes.caption}
								style='text-primaryButton dark:text-primaryButton hover:underline'
							>
								{props.forgot_password}
							</LinkText>
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
					{isLoading ? <Spinner /> : props.sign_in}
				</DefaultButton>
				<Toaster position='top-right'>
					{({ message }) => (
						<Card style='p-4 flex flex-row space-x-2 items-center'>
							<DefaultText type={TextTypes.h6} element='p'>
								💡
							</DefaultText>
							<DefaultText type={TextTypes.body1} element='p'>
								{message?.toString()}
							</DefaultText>
						</Card>
					)}
				</Toaster>
			</form>
		</>
	)
}

export default SignInForm
