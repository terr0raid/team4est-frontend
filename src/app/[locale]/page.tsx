import Header from '@/components/base/Header'
import bg from '@/assets/images/hero-bg.png'

export default async function Home() {
	return (
		<div
			className='w-screen h-screen bg-cover bg-no-repeat text-primary bg-secondary'
			style={{
				backgroundImage: `url(${bg.src})`,
			}}
		>
			{/* @ts-expect-error Server Component */}
			<Header />
		</div>
	)
}
