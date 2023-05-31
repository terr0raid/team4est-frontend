import React from 'react'

function useWrapperElement({ ...props }) {
	const elRef = props.elRef

	React.useEffect(() => {
		const handleClickOutside = (event: any) => {
			if (elRef.current && !elRef.current.contains(event.target)) {
				props.onClose()
			}
		}

		document.addEventListener('mousedown', handleClickOutside)
		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
		}
	}, [elRef, props])
}

export default useWrapperElement
