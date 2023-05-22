import type { Meta, StoryObj } from '@storybook/react'

import { TextField } from './TextField'
import { VariantEnum } from '../constants/variantEnum'
import { SizeEnum } from '../constants/sizeEnum'

const meta: Meta<typeof TextField> = {
	title: 'Inputs/TextField',
	component: TextField,
	argTypes: {
		size: {
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
type Story = StoryObj<typeof TextField>

export const Primary: Story = {}
