import React, { Suspense } from 'react'
import Loading from '../../loading'
import jo from '@/assets/images/ic_jo_4.jpg'
import ImageButton from '@/stories/buttons/ImageButton'
import { Step } from '@/types'
import DefaultText from '@/stories/typography/DefaultText'
import { TextTypes } from '@/stories/constants/textTypes'
import Indicator from '@/stories/indicator/Indicator'
import Card from '@/stories/cards/Card'
import SignUpDetailsForm from '../components/detail/SignUpDetailsForm'
import { getTranslations } from 'next-intl/server'
async function SignUpDetails() {
	const t = await getTranslations('auth')

	const steps: Step[] = [
		{
			step: 1,
			label: t('step_1'),
			completed: true,
			active: false,
		},
		{
			step: 2,
			label: t('step_2'),
			completed: false,
			active: true,
		},
	]

	return (
		<Suspense fallback={<Loading />}>
			<div className='w-full min-h-screen h-full flex flex-col items-center justify-center py-10 space-y-5'>
				<ImageButton src={jo} alt='team4est logo' width={100} shape='rounded' />
				<DefaultText type={TextTypes.h6} element='h6' style='text-center mb-5'>
					{t('title')}
				</DefaultText>

				<Card style='w-full max-w-lg p-4 sm:p-6 md:px-8 md:py-4 space-y-6'>
					<Indicator style='flex justify-center mb-5' steps={steps} />
					<SignUpDetailsForm
						username={t('username')}
						phone={t('phone')}
						bio={t('bio')}
						start={t('start')}
						profile={t('profile')}
						last_step={t('last_step')}
						sign_up={t('sign_up')}
					/>
				</Card>
			</div>
		</Suspense>
	)
}

export default SignUpDetails
