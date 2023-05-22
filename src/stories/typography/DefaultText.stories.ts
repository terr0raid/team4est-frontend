import type { Meta, StoryObj } from '@storybook/react'

import DefaultText from './DefaultText'
import { TextTypes } from '../constants/textTypes'

const meta: Meta<typeof DefaultText> = {
	title: 'Typography/DefaultText',
	component: DefaultText,
	argTypes: {
		type: {
			options: Object.keys(TextTypes),
			mapping: TextTypes,
			control: {
				type: 'select',
			},
		},
	},
}

export default meta
type Story = StoryObj<typeof DefaultText>

export const Primary: Story = {}
