import React, { Suspense } from 'react'
import Loading from '../loading'
import jo from '@/assets/images/ic_jo_4.jpg'
import ImageButton from '@/stories/buttons/ImageButton'
import DefaultText from '@/stories/typography/DefaultText'
import { TextTypes } from '@/stories/constants/textTypes'
import Card from '@/stories/cards/Card'
import Indicator from '@/stories/indicator/Indicator'
import SignUpForm from './components/signup/SignUpForm'
import LinkText from '@/stories/typography/LinkText'
import { Step } from '@/types'
import { getTranslations } from 'next-intl/server'

async function SignUp() {
	const t = await getTranslations('auth')

	const steps: Step[] = [
		{
			step: 1,
			label: t('step_1'),
			completed: false,
			active: true,
		},
		{
			step: 2,
			label: t('step_2'),
			completed: false,
			active: false,
		},
	]
	return (
		<Suspense fallback={<Loading />}>
			<div className='w-full min-h-screen h-full flex flex-col items-center justify-center py-10 space-y-5'>
				<ImageButton src={jo} alt='team4est logo' width={100} shape='rounded' />
				<DefaultText type={TextTypes.h6} element='h6' style='text-center mb-5'>
					{t('title')}
				</DefaultText>
				<Card style='w-full max-w-sm p-4 sm:p-6 md:p-8 space-y-6'>
					<Indicator style='flex justify-center mb-5' steps={steps} />
					<SignUpForm
						email={t('email')}
						password={t('password')}
						sign_up={t('sign_up')}
						privacy_text={t('privacy_text')}
						privacy_link={t('privacy_link')}
						title={t('title')}
						already_have_an_account={t('already_have_an_account')}
						next={t('next')}
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
			</div>
		</Suspense>
	)
}

export default SignUp
