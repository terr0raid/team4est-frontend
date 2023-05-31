import React from 'react'
import styles from './Card.module.css'
type CardProps = {
	children: React.ReactNode
	style?: string
	args?: React.DetailedHTMLProps<
		React.HTMLAttributes<HTMLDivElement>,
		HTMLDivElement
	>
}

export const Card = ({ ...props }: CardProps) => {
	return (
		<div {...props.args} className={`${styles.card} ${props.style}`}>
			{props.children}
		</div>
	)
}

export default React.memo(Card)
