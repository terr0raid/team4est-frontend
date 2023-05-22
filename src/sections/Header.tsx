function Header() {
	return (
		<header className='flex flex-col items-center justify-center min-h-screen py-2'>
			<h1 className='text-6xl font-bold'>
				Welcome to <a href='https://nextjs.org'>Next.js!</a>
			</h1>
			<p className='mt-3 text-2xl'>
				Get started by editing{' '}
				<code className='p-3 font-mono text-lg bg-gray-100 rounded-md'>
					pages/index.js
				</code>
			</p>
		</header>
	)
}

export default Header
