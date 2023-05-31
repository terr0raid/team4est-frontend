'use client'
import React from 'react'
import useDialog from '../hooks/useWrapperElement'
import IconButton from '../buttons/IconButton'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { VariantEnum } from '../constants/variantEnum'

type ModalProps = {
	children: React.ReactNode
	dialogDispacther: React.Dispatch<React.SetStateAction<boolean>>
	dialogState: boolean
}

function Dialog({ ...props }: ModalProps) {
	const dialogRef = React.useRef(null)

	useDialog({ dialogRef, dialogDispacther: props.dialogDispacther })

	return (
		<div
			className={`${
				props.dialogState ? 'block' : 'hidden'
			} fixed inset-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50`}
			role='dialog'
		>
			<div
				className={`rounded-lg shadow-lg bg-red-500 w-1/2 h-1/2`}
				ref={dialogRef}
			>
				<IconButton
					style='fixed top-5 right-5'
					onClick={() => props.dialogDispacther(false)}
					variant={VariantEnum.OUTLINED}
					icon={<XMarkIcon />}
				/>
				{props.children}
			</div>
		</div>
	)
}

export default Dialog
