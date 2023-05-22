import React from 'react'
import DefaultText from './DefaultText'
import styles from './LinkText.module.css'
import { TextTypes } from '../constants/textTypes'
import Link from 'next/link'
type DefaultText = {
	children: React.ReactNode
	type: string
	style?: string
	href: string
	element?: string
	args?: any
}
const DefaultTextProps: DefaultText = {
	children: 'Default Text',
	type: TextTypes.h1,
	element: 'span',
	href: '/',
	style: '',
	args: {},
}

function LinkText({ ...props }: DefaultText) {
	props = { ...DefaultTextProps, ...props }
	return (
		<Link {...props.args} href={props.href}>
			<DefaultText
				type={props.type}
				style={`${styles.link_text} ${props.style}`}
				element={props.element}
			>
				{props.children}
			</DefaultText>
		</Link>
	)
}

export default LinkText
