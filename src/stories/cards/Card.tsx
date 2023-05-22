import React from 'react'
import styles from './Card.module.css'
import classNames from 'classnames'
type CardProps = {
	children: React.ReactNode
	style?: string
	args?: any
}

export const Card = ({ ...props }: CardProps) => {
	return (
		<div {...props.args} className={`${classNames(styles.card, props.style)}`}>
			{props.children}
		</div>
	)
}

export default React.memo(Card)
