import React from 'react'
import Image, { StaticImageData } from 'next/image'
import classNames from 'classnames'
import styles from './ImageButton.module.css'
import src from '../assets/ic_jo_4.jpg'

type ImageButtonProps = {
	alt: string
	width?: number
	height?: number
	className?: string
	onClick?: (e: React.MouseEvent<HTMLImageElement>) => void | undefined
	src: StaticImageData | string
	shape?: 'rounded' | 'square' | 'circle'
	fill?: boolean
}

const ImageButtonProps: ImageButtonProps = {
	alt: 'image button',
	src: src,
	shape: 'rounded',
	fill: true,
}

function ImageButton({ ...props }: ImageButtonProps) {
	props = { ...ImageButtonProps, ...props }
	return (
		<Image
			quality={100}
			src={props.src}
			alt={props.alt}
			width={props.width}
			height={props.height || props.width}
			fill={!props.width ? props.fill : false}
			className={`${classNames(styles.img_btn, {
				[styles.btn_rounded]: props.shape === 'rounded',
				[styles.btn_square]: props.shape === 'square',
				[styles.btn_circle]: props.shape === 'circle',
			})} ${props.className}`}
			onClick={props.onClick ?? props.onClick}
		/>
	)
}

export default ImageButton
