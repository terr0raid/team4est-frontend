import React from 'react'
import styles from './IconButton.module.css'
import classNames from 'classnames'
import { VariantEnum } from '../constants/variantEnum'
import { SizeEnum } from '../constants/sizeEnum'

import { BanknotesIcon } from '@heroicons/react/24/solid'

type IconButtonProps = {
	type?: 'submit' | 'button'
	icon: React.ReactNode
	children?: React.ReactNode
	onClick?: (event: React.MouseEvent<HTMLElement>) => void
	variant?: VariantEnum
	disabled?: boolean
	radius?: SizeEnum
	args?: any
	style?: string
}

const IconButtonProps: IconButtonProps = {
	type: 'button',
	icon: <BanknotesIcon />,

	onClick: () => {},
	variant: VariantEnum.STANDART,
	args: {},
	radius: SizeEnum.LARGE,
	disabled: false,
}

function IconButton({ ...props }: IconButtonProps) {
	props = { ...IconButtonProps, ...props }
	return (
		<button
			{...props.args}
			disabled={props.disabled}
			type={props.type}
			onClick={props.onClick ?? props.onClick}
			className={classNames(props.style, {
				[styles.btn_standart]: props.variant === VariantEnum.STANDART,
				[styles.btn_outlined]: props.variant === VariantEnum.OUTLINED,
				[styles.btn_radius_small]: props.radius === SizeEnum.SMALL,
				[styles.btn_radius_medium]: props.radius === SizeEnum.MEDIUM,
				[styles.btn_radius_large]: props.radius === SizeEnum.LARGE,
			})}
		>
			{props.icon}
			{props.children}
		</button>
	)
}

export default React.memo(IconButton)
