import React from 'react'
import { SizeEnum } from '../constants/sizeEnum'
import { VariantEnum } from '../constants/variantEnum'
import styles from './TextField.module.css'
import classNames from 'classnames'

type TextFieldProps = {
	label?: string | React.ReactNode
	placeholder?: string
	type?: string
	required?: boolean
	disabled?: boolean
	value?: string
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
	onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void
	onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void
	id?: string
	name?: string
	error?: string
	helperText?: string
	style?: string
	variant: VariantEnum
	size: SizeEnum
	fullWidth?: boolean
	multiline?: boolean
	rows?: number
	rowsMax?: number
	autoComplete?: string
	autoFocus?: boolean
	args?: any
}

const TextFieldProps: TextFieldProps = {
	label: 'Label',
	placeholder: 'Placeholder',
	type: 'text',
	required: false,
	disabled: false,
	value: '',
	onChange: () => {},
	onBlur: () => {},
	onFocus: () => {},
	style: '',
	id: '',
	name: '',
	error: '',
	helperText: '',
	variant: VariantEnum.OUTLINED,
	size: SizeEnum.MEDIUM,
	fullWidth: false,
	multiline: false,
	rows: 1,
	rowsMax: 2,
	autoComplete: 'off',
	autoFocus: false,
}

export const TextField = ({ ...props }: TextFieldProps) => {
	props = { ...TextFieldProps, ...props }

	return (
		<div>
			{props.label && (
				<label htmlFor={props.id} className={styles.label}>
					{props.label}
				</label>
			)}
			<input
				{...props.args}
				type={props.type}
				name={props.name}
				id={props.id}
				placeholder={props.placeholder}
				{...(props.value && { value: props.value })}
				onChange={props.onChange}
				onBlur={props.onBlur}
				onFocus={props.onFocus}
				autoComplete={props.autoComplete}
				autoFocus={props.autoFocus}
				disabled={props.disabled}
				required={props.required}
				aria-required={props.required}
				aria-invalid={props.error ? 'true' : 'false'}
				aria-describedby={props.helperText ? 'helper-text' : undefined}
				aria-label={props.label}
				aria-multiline={props.multiline}
				multiple={props.multiline}
				className={`${classNames(props.style, {
					[styles.textfield]: true,
					[styles.textfield_small]: props.size === SizeEnum.SMALL,
					[styles.textfield_large]: props.size === SizeEnum.LARGE,
					[styles.textfield_medium]: props.size === SizeEnum.MEDIUM,
					[styles.textfield_outlined]: props.variant === VariantEnum.OUTLINED,
					[styles.textfield_standart]: props.variant === VariantEnum.STANDART,
					[styles.textfield_error]: props.error,
					[styles.textfield_disabled]: props.disabled,
					[styles.textfield_fullWidth]: props.fullWidth,
				})}`}
			/>
			{props.error && (
				<p className='mt-2 text-sm text-red-600 dark:text-red-500'>
					{props.error}
				</p>
			)}
		</div>
	)
}

export default React.memo(TextField)
