import SignInForm from './components/SignInForm'
import React, { Suspense } from 'react'
import { getTranslations } from 'next-intl/server'
import styles from '../styles.module.css'
import Loading from '../loading'
import ImageButton from '@/stories/buttons/ImageButton'
import DefaultText from '@/stories/typography/DefaultText'
import { TextTypes } from '@/stories/constants/textTypes'
import jo from '@/assets/images/ic_jo_4.jpg'
import Card from '@/stories/cards/Card'
import LinkText from '@/stories/typography/LinkText'

async function SignIn() {
	const t = await getTranslations('auth')
	return (
		<Suspense fallback={<Loading />}>
			<div className={styles.main}>
				<ImageButton src={jo} alt='team4est logo' width={100} shape='rounded' />
				<DefaultText type={TextTypes.h6} element='h6' style='text-center mb-5'>
					{t('title')}
				</DefaultText>
				<Card style='w-full max-w-sm p-4 sm:p-6 md:p-8 space-y-6'>
					<SignInForm
						email={t('email')}
						password={t('password')}
						sign_in={t('sign_in')}
						forgot_password={t('forgot_password')}
					/>
					<DefaultText
						element='p'
						type={TextTypes.overline}
						style='text-center'
					>
						{t('privacy_text')}
						<LinkText
							href='#'
							type={TextTypes.overline}
							element='span'
							style='text-primaryButton dark:text-primaryButton hover:underline'
						>
							{t('privacy_link')}
						</LinkText>
					</DefaultText>
				</Card>
				<Card style='w-full max-w-sm p-4 flex justify-center items-center space-x-1'>
					<DefaultText type={TextTypes.body1} element='p' style='text-center'>
						{t('create_account')}
						<LinkText
							href='/signup'
							type={TextTypes.body1}
							element='span'
							style='text-center text-primaryButton dark:text-primaryButton hover:underline'
						>
							{t('create_account_link')}
						</LinkText>
					</DefaultText>
				</Card>
			</div>
		</Suspense>
	)
}

export default SignIn
