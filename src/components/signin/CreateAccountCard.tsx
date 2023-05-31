import Card from '@/stories/cards/Card'
import { TextTypes } from '@/stories/constants/textTypes'
import DefaultText from '@/stories/typography/DefaultText'
import LinkText from '@/stories/typography/LinkText'
import React from 'react'

type CreateAccountCardProps = {
	create_account: string
	create_account_link: string
}

function CreateAccountCard({ ...props }: CreateAccountCardProps) {
	return (
		<Card style='w-full max-w-sm p-4 flex justify-center items-center space-x-1'>
			<DefaultText type={TextTypes.body1} element='p' style='text-center'>
				{props.create_account}{' '}
				<LinkText
					href='/signup'
					type={TextTypes.body1}
					element='span'
					style='text-center text-primaryButton dark:text-primaryButton hover:underline'
				>
					{props.create_account_link}
				</LinkText>
			</DefaultText>
		</Card>
	)
}

export default CreateAccountCard
