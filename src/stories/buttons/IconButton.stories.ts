import type { Meta, StoryObj } from '@storybook/react'

import IconButton from './IconButton'
import { SizeEnum } from '../constants/sizeEnum'
import { VariantEnum } from '../constants/variantEnum'

const meta: Meta<typeof IconButton> = {
	title: 'Buttons/IconButton',
	component: IconButton,
	argTypes: {
		radius: {
			options: Object.values(SizeEnum).filter(x => typeof x === 'string'),
			mapping: SizeEnum,
			control: {
				type: 'select',
			},
		},
		variant: {
			options: Object.values(VariantEnum).filter(x => typeof x === 'string'),
			mapping: VariantEnum,
			control: {
				type: 'select',
			},
		},
	},
}

export default meta
type Story = StoryObj<typeof IconButton>

export const Primary: Story = {}
