import type { Meta, StoryObj } from '@storybook/react'

import ImageButton from './ImageButton'
import { SizeEnum } from '../constants/sizeEnum'
import { VariantEnum } from '../constants/variantEnum'

const meta: Meta<typeof ImageButton> = {
	title: 'Buttons/ImageButton',
	component: ImageButton,
	argTypes: {
		shape: {
			control: {
				type: 'select',
				options: ['circle', 'rounded', 'square'],
			},
		},
	},
}

export default meta
type Story = StoryObj<typeof ImageButton>

export const Primary: Story = {}
