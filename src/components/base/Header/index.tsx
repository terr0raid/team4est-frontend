import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from '@/assets/svg/ic_logo.svg'
import LinkText from '@/stories/typography/LinkText'
import { TextTypes } from '@/stories/constants/textTypes'
import ProfileAvatar from './ProfileAvatar'
import HeaderMenu from './HeaderMenu'
import styles from './index.module.css'
import { useAuth } from '@/hooks/useAuth'
import { useUser } from '@/hooks/useUser'
import { User } from '@/types'

async function getUser() {
	const auth = await useAuth.fromServer()
	let user: User | undefined = undefined
	if (auth) user = await useUser.fromServer(auth.id)
	return user
}

async function Header() {
	const user: User | undefined = await getUser()
	return (
		<header className={styles.main_header}>
			<Link href='/'>
				<Image
					className='cursor-pointer'
					src={logo}
					alt='team4est logo'
					width={150}
					height={80}
				/>
			</Link>
			<div className='block w-2/6 md:hidden' />

			<div className='flex md:order-2'>
				{!user ? (
					<div className='md:flex md:items-center md:space-x-3 hidden'>
						<LinkText
							href='/signin'
							type={TextTypes.button}
							style='hover:-translate-y-1 transition-all duration-300 ease-in-out'
						>
							Sign In
						</LinkText>

						<LinkText
							href='/signup'
							type={TextTypes.button}
							style='bg-primaryButton px-6 py-1 rounded-lg hover:bg-opacity-80 transition-all duration-300 ease-in-out'
						>
							Sign Up
						</LinkText>
					</div>
				) : (
					<ProfileAvatar
						profile={user.profile}
						username={user.username}
						email={user.email}
					/>
				)}
			</div>
			<HeaderMenu />
		</header>
	)
}

export default Header
