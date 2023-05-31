'use client'
import { NetworkManager } from '@/core/network/NetworkManager'
import DefaultButton from '@/stories/buttons/DefaultButton'
import { Card } from '@/stories/cards/Card'
import { SizeEnum } from '@/stories/constants/sizeEnum'
import { TextTypes } from '@/stories/constants/textTypes'
import { VariantEnum } from '@/stories/constants/variantEnum'
import TextField from '@/stories/fields/TextField'
import DefaultText from '@/stories/typography/DefaultText'
import LinkText from '@/stories/typography/LinkText'
import React, { useRef, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import ImageButton from '@/stories/buttons/ImageButton'
import jo from '@/assets/images/ic_jo_4.jpg'
import { useStore } from '@/stores'
import Spinner from '@/stories/progress/Spinner'

type SignInCardProps = {
	email: string
	password: string
	signin: string
	privacy_text: string
	privacy_link: string
	forgot_password: string
	title: string
}

function SignInCard({ ...props }: SignInCardProps) {
	const router = useRouter()
	const searchParams = useSearchParams()

	const formRef = useRef<HTMLFormElement>(null)
	const setAuth = useStore(state => state.setAuth)
	const setUser = useStore(state => state.setUser)

	const [isLoading, setIsLoading] = useState(false)

	const [passwordError, setPasswordError] = useState('')
	const [emailError, setEmailError] = useState('')

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		setIsLoading(true)

		const formData = new FormData(e.currentTarget)

		const res = await NetworkManager.post('login', {
			email: formData.get('email') as string,
			password: formData.get('password') as string,
		}).then(res => res)

		if (res.status === 200) {
			const { data } = await res.json()
			setAuth({ auth: data })
			setUser({ idOrEmailOrUsername: data?.user?.id as string })
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
		setIsLoading(false)
	}

	return (
		<>
			<ImageButton src={jo} alt='team4est logo' width={100} shape='rounded' />
			<DefaultText type={TextTypes.h6} element='h6' style='text-center mb-5'>
				{props.title}
			</DefaultText>
			<Card style='w-full max-w-sm p-4 sm:p-6 md:p-8'>
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
						{isLoading ? <Spinner color='' /> : props.signin}
					</DefaultButton>

					<DefaultText
						element='p'
						type={TextTypes.overline}
						style='text-center'
					>
						{props.privacy_text}
						<LinkText
							href='#'
							type={TextTypes.overline}
							element='span'
							style='text-primaryButton dark:text-primaryButton hover:underline'
						>
							{props.privacy_link}
						</LinkText>
					</DefaultText>
				</form>
			</Card>
		</>
	)
}

export default SignInCard
