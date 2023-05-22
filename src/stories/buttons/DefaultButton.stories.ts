import type { Meta, StoryObj } from '@storybook/react'

import DefaultButton from './DefaultButton'
import { SizeEnum } from '../constants/sizeEnum'
import { VariantEnum } from '../constants/variantEnum'

const meta: Meta<typeof DefaultButton> = {
	title: 'Buttons/DefaultButton',
	component: DefaultButton,
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
type Story = StoryObj<typeof DefaultButton>

export const Primary: Story = {}
