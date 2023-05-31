import CreateAccountCard from '@/components/signin/CreateAccountCard'
import SignInCard from '@/components/signin/SignInCard'
import SignInFallback from '@/components/fallbacks/SignInFallback'
import React, { Suspense } from 'react'
import { useTranslations } from 'next-intl'
import styles from './styles.module.css'

function SignIn() {
	const t = useTranslations('auth')
	return (
		<div className={styles.main}>
			<Suspense fallback={<SignInFallback />}>
				<SignInCard
					email={t('email')}
					password={t('password')}
					signin={t('sign_in')}
					privacy_text={t('privacy_text')}
					privacy_link={t('privacy_link')}
					forgot_password={t('forgot_password')}
					title={t('title')}
				/>
			</Suspense>
			<CreateAccountCard
				create_account={t('create_account')}
				create_account_link={t('create_account_link')}
			/>
		</div>
	)
}

export default SignIn
