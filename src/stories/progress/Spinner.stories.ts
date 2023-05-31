import type { Meta, StoryObj } from '@storybook/react'

import { Spinner } from './Spinner'
import { VariantEnum } from '../constants/variantEnum'
import { SizeEnum } from '../constants/sizeEnum'

const meta: Meta<typeof Spinner> = {
	title: 'Progress/Spinner',
	component: Spinner,
}

export default meta
type Story = StoryObj<typeof Spinner>

export const Primary: Story = {}
