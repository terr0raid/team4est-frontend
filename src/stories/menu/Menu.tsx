import React from 'react'
import useWrapperElement from '../hooks/useWrapperElement'
import Card from '../cards/Card'

interface MenuProps {
	children: React.ReactNode
	anchorEl: null | HTMLElement
	open: boolean
	onClose: () => void
	style?: string
	multiplier?: number
}

function Menu({ ...props }: MenuProps) {
	const [anchorPosition, setAnchorPosition] = React.useState({
		top: 0,
		left: 0,
	})
	const menuRef = React.useRef<HTMLDivElement>(null)

	useWrapperElement({ elRef: menuRef, onClose: props.onClose })

	React.useEffect(() => {
		if (props.anchorEl) {
			const rect = props.anchorEl.getBoundingClientRect()
			setAnchorPosition({
				top: rect.top + rect.height + 4,
				left: rect.left - rect.width * (props.multiplier || 1),
			})
		}
	}, [props.anchorEl, props.multiplier])

	return props.open ? (
		<div
			className={`fixed inset-0 z-50 flex items-center justify-center w-full h-full`}
		>
			<Card
				args={{
					ref: menuRef,
					onClick: props.onClose,
					style: {
						position: 'absolute',
						top: anchorPosition.top,
						left: anchorPosition.left,
					},
				}}
				style={`${props.open ? 'scale-100' : 'scale-0'} ${props.style}`}
			>
				{props.children}
			</Card>
		</div>
	) : null
}

export default Menu
