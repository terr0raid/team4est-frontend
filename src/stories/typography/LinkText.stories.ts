import type { Meta, StoryObj } from '@storybook/react'

import LinkText from './LinkText'
import { TextTypes } from '../constants/textTypes'

const meta: Meta<typeof LinkText> = {
	title: 'Typography/LinkText',
	component: LinkText,
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
type Story = StoryObj<typeof LinkText>

export const Primary: Story = {}
