import { FunctionComponent } from 'react'

interface NotFoundProps {}

const NotFound: FunctionComponent<NotFoundProps> = () => {
	return (
		<div>
			<h2>404</h2>
			<p>Page not found</p>
		</div>
	)
}

export default NotFound
