import type { Meta, StoryObj } from '@storybook/react'

import { Card } from './Card'

const meta: Meta<typeof Card> = {
	title: 'Cards/DefaultCard',
	component: Card,
}

export default meta
type Story = StoryObj<typeof Card>

export const Primary: Story = {}
