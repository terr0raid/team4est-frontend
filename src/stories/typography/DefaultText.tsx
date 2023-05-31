import classNames from 'classnames'
import React from 'react'
import { TextTypes } from '../constants/textTypes'
import styles from './DefaultText.module.css'

type DefaultText = {
	children: React.ReactNode
	type: TextTypes
	style?: string
	element?: string
	args?: any
}

const DefaultTextProps: DefaultText = {
	children: 'Default Text',
	type: TextTypes.h1,
	element: 'span',
	style: '',
	args: {},
}
function DefaultText({ ...props }: DefaultText) {
	props = { ...DefaultTextProps, ...props }
	const RootEl = RootElement(props.element ?? 'span')
	return (
		<RootEl
			{...props.args}
			className={`${classNames({
				[styles.text_h1]: props.type === TextTypes.h1,
				[styles.text_h2]: props.type === TextTypes.h2,
				[styles.text_h3]: props.type === TextTypes.h3,
				[styles.text_h4]: props.type === TextTypes.h4,
				[styles.text_h5]: props.type === TextTypes.h5,
				[styles.text_h6]: props.type === TextTypes.h6,
				[styles.text_subtitle1]: props.type === TextTypes.subtitle1,
				[styles.text_subtitle2]: props.type === TextTypes.subtitle2,
				[styles.text_body1]: props.type === TextTypes.body1,
				[styles.text_body2]: props.type === TextTypes.body2,
				[styles.text_button]: props.type === TextTypes.button,
				[styles.text_caption]: props.type === TextTypes.caption,
				[styles.text_overline]: props.type === TextTypes.overline,
			})} ${props.style}
    `}
		>
			{props.children}
		</RootEl>
	)
}

const RootElement = (element: string) => {
	// eslint-disable-next-line react/display-name
	return React.forwardRef((props, ref) => {
		return React.createElement(element, { ...props, ref })
	})
}

export default React.memo(DefaultText)
