import React from 'react'
import styles from './DefaultButton.module.css'
import classNames from 'classnames'
import { VariantEnum } from '../constants/variantEnum'
import { SizeEnum } from '../constants/sizeEnum'

type DefaultButtonProps = {
	type?: 'submit' | 'button'
	children: React.ReactNode
	onClick?: (event: React.MouseEvent<HTMLElement>) => void
	variant?: VariantEnum
	size?: SizeEnum
	fullWidth?: boolean
	disabled?: boolean
	args?: any
	style?: string
}

const DefaultButtonProps: DefaultButtonProps = {
	type: 'button',
	children: 'Button',
	variant: VariantEnum.STANDART,
	size: SizeEnum.MEDIUM,
	fullWidth: false,
	disabled: false,
}

function DefaultButton({ ...props }: DefaultButtonProps) {
	props = { ...DefaultButtonProps, ...props }
	return (
		<button
			{...props.args}
			disabled={props.disabled}
			type={props.type}
			onClick={props.onClick}
			className={`${classNames({
				[styles.btn_standart]: props.variant === VariantEnum.STANDART,
				[styles.btn_outlined]: props.variant === VariantEnum.OUTLINED,
				[styles.btn_small]: props.size === SizeEnum.SMALL,
				[styles.btn_medium]: props.size === SizeEnum.MEDIUM,
				[styles.btn_large]: props.size === SizeEnum.LARGE,
				[styles.btn_disabled]: props.disabled,
			})} ${props.fullWidth ? 'w-full' : ''}
			${props.style}
				`}
		>
			{props.children}
		</button>
	)
}

export default React.memo(DefaultButton)
