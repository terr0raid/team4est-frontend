'use client'
import { NetworkManager } from '@/core/network/NetworkManager'
import { useStore } from '@/stores'
import DefaultButton from '@/stories/buttons/DefaultButton'
import IconButton from '@/stories/buttons/IconButton'
import ImageButton from '@/stories/buttons/ImageButton'
import { SizeEnum } from '@/stories/constants/sizeEnum'
import { TextTypes } from '@/stories/constants/textTypes'
import { VariantEnum } from '@/stories/constants/variantEnum'
import TextField from '@/stories/fields/TextField'
import Spinner from '@/stories/progress/Spinner'
import DefaultText from '@/stories/typography/DefaultText'
import { Dialog } from '@/types'
import { UserCircleIcon } from '@heroicons/react/24/outline'
import { useRouter, useSearchParams } from 'next/navigation'
import React, { useState } from 'react'

type SignUpDetailsFormProps = {
	username: string
	phone: string
	bio: string
	start: string
	profile: string
	last_step: string
	sign_up: string
}

function SignUpDetailsForm({ ...props }: SignUpDetailsFormProps) {
	const router = useRouter()
	const searchParams = useSearchParams()

	const auth = useStore(state => state.auth)
	const setStoreUser = useStore(state => state.setUser)
	const [error, setError] = useState({
		message: '',
		title: '',
		type: 'info',
	} as Dialog)

	const [isLoading, setIsLoading] = useState(false)

	const [profile, setProfile] = useState('')

	const [passwordError, setPasswordError] = useState('')
	const [emailError, setEmailError] = useState('')

	const handleProfileUpload = async (
		e: React.ChangeEvent<HTMLInputElement>
	) => {
		try {
			const file = e.target.files?.[0]
			if (!file) return

			const formData = new FormData()

			formData.append('file', file)

			const res = await NetworkManager.upload('profile', formData)
			if (res.status === 200) {
				const { data } = await res.json()
				setProfile(data)
			}
		} catch (error) {
			console.log(error)
		}
	}

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		try {
			setIsLoading(true)
			const formData = new FormData(e.currentTarget)
			const res = await NetworkManager.put('user', {
				id: auth?.user?.id,
				email: auth?.user?.email,
				username: formData.get('username') as string,
				phone: formData.get('phone') as string,
				bio: formData.get('bio') as string,
				name: formData.get('name') as string,
				lastName: formData.get('lastname') as string,
				birthdate: formData.get('birthdate'),
				profile,
			})

			if (res.status === 200) {
				setStoreUser({ user: await res.json() })
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
			console.log(error)
		} finally {
			setIsLoading(false)
		}
	}
	return (
		<>
			<div className='flex items-center flex-col justify-center mb-6 -space-y-3'>
				{profile ? (
					<ImageButton
						src={profile}
						alt='team4est logo'
						width={128}
						shape='circle'
						onClick={() => {
							const fileInput = document.getElementById('file-input')
							fileInput?.click()
						}}
					/>
				) : (
					<>
						<IconButton
							icon={<UserCircleIcon />}
							variant={VariantEnum.OUTLINED}
							onClick={() => {
								const fileInput = document.getElementById('file-input')
								fileInput?.click()
							}}
						/>
						<DefaultText type={TextTypes.caption} element='span' style='mt-2'>
							{props.profile}
						</DefaultText>
					</>
				)}

				<input
					type='file'
					id='file-input'
					name='file-input'
					className='hidden'
					onChange={handleProfileUpload}
				/>
			</div>
			<form className='space-y-6' onSubmit={handleSubmit}>
				<div className='grid gap-6 mb-6 md:grid-cols-2'>
					<TextField
						args={{
							tabIndex: 1,
						}}
						label={props.username}
						type='text'
						name='username'
						id='username'
						error={emailError}
						onFocus={() => setEmailError('')}
						variant={VariantEnum.OUTLINED}
						placeholder='terr0raid'
						size={SizeEnum.MEDIUM}
						fullWidth
						required
					/>
					<TextField
						args={{
							tabIndex: 1,
						}}
						label={props.username}
						type='text'
						name='name'
						id='name'
						error={emailError}
						onFocus={() => setEmailError('')}
						variant={VariantEnum.OUTLINED}
						placeholder='John'
						size={SizeEnum.MEDIUM}
						fullWidth
						required
					/>
					<TextField
						args={{
							tabIndex: 1,
						}}
						label={props.username}
						type='text'
						name='lastname'
						id='lastname'
						error={emailError}
						onFocus={() => setEmailError('')}
						variant={VariantEnum.OUTLINED}
						placeholder='Doe'
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
								{props.phone}
							</DefaultText>
						}
						type='text'
						name='phone'
						placeholder='+7 (999) 999-99-99'
						id='phone'
						error={passwordError}
						onFocus={() => setPasswordError('')}
						variant={VariantEnum.OUTLINED}
						size={SizeEnum.MEDIUM}
						fullWidth
						required
					/>
				</div>
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
							{props.phone}
						</DefaultText>
					}
					type='text'
					name='bio'
					placeholder='Your bio'
					id='bio'
					error={passwordError}
					onFocus={() => setPasswordError('')}
					variant={VariantEnum.OUTLINED}
					size={SizeEnum.MEDIUM}
					fullWidth
					multiline
					required
				/>
				<TextField
					type='date'
					name='birthdate'
					id='birthdate'
					label='Birthdate'
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
					{isLoading ? <Spinner color='' /> : props.sign_up}
				</DefaultButton>
			</form>
		</>
	)
}

export default SignUpDetailsForm
