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
import { useTranslations } from 'next-intl'
import { cookies } from 'next/headers'
import { useState } from 'react'

async function signIn(email: string, password: string, rememberMe: boolean) {
	try {
		localStorage.setItem('rememberMe', 'false')
		NetworkManager.post('login', {
			email: email,
			password: password,
		}).then(res => {
			console.log(res)
			localStorage.setItem('token', JSON.stringify(res))
		})
	} catch (error) {
		console.log(error)
	}
}

function SignInCard() {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [rememberMe, setRememberMe] = useState(false)
	const [error, setError] = useState('')

	const t = useTranslations('auth')

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		await signIn(email, password, rememberMe)
	}

	return (
		<Card>
			<form className='space-y-6' onSubmit={handleSubmit}>
				<DefaultText type={TextTypes.h5} element='h5' style='text-center'>
					{t('welcome')}
				</DefaultText>
				<TextField
					label='Email'
					type='email'
					name='email'
					id='email'
					error={error}
					variant={VariantEnum.OUTLINED}
					placeholder='terr0raid@team4est.com'
					size={SizeEnum.MEDIUM}
					value={email}
					onChange={e => {
						setEmail(e.target.value)
					}}
					fullWidth
					required
				/>

				<TextField
					label='Password'
					type='password'
					name='password'
					placeholder='••••••••'
					id='password'
					error={error}
					variant={VariantEnum.OUTLINED}
					size={SizeEnum.MEDIUM}
					value={password}
					onChange={e => {
						setPassword(e.target.value)
					}}
					fullWidth
					required
				/>
				<div className='flex justify-between items-center'>
					<div className='flex items-start'>
						<div className='flex items-center h-5'>
							<input
								id='remember'
								type='checkbox'
								value=''
								onChange={e => {
									setRememberMe(e.target.checked)
								}}
								className='w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800'
							/>
						</div>
						<label
							htmlFor='remember'
							className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'
						>
							Remember me
						</label>
					</div>
					<LinkText href='#' type={TextTypes.body2}>
						Lost Password?
					</LinkText>
				</div>
				<DefaultButton
					type='submit'
					variant={VariantEnum.STANDART}
					size={SizeEnum.MEDIUM}
					fullWidth
				>
					Sign in
				</DefaultButton>
				<div className='flex flex-row items-center space-x-1'>
					<DefaultText element='p' type={TextTypes.body2}>
						Not registered?
					</DefaultText>
					<LinkText href='#' type={TextTypes.body2} element='p'>
						Create account
					</LinkText>
				</div>
			</form>
		</Card>
	)
}

export default SignInCard
