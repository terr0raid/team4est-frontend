'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from '@/assets/svg/ic_logo.svg'
import avatar from '@/assets/images/ic_jo_4.jpg'
import ImageButton from '@/stories/buttons/ImageButton'
import classNames from 'classnames'
import styles from './Header.module.css'
import { useStore } from '@/stores'
import LinkText from '@/stories/typography/LinkText'
import { TextTypes } from '@/stories/constants/textTypes'
import { useRouter } from 'next/navigation'
import Menu from '@/stories/menu/Menu'
import DefaultButton from '@/stories/buttons/DefaultButton'

function Header() {
	const user = useStore(state => state.user)
	const router = useRouter()

	const handleLogout = () => {
		router.push('/logout')
	}

	const [isMenuOpen, setIsMenuOpen] = React.useState(false)
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
	const open = Boolean(anchorEl)
	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget)
	}
	const handleClose = () => {
		setAnchorEl(null)
	}

	const menuRef = React.useRef<HTMLDivElement>(null)

	const handleMenuClick = () => {
		setIsMenuOpen(!isMenuOpen)
	}

	return (
		<nav className='bg-transparent'>
			<div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
				<Link href='/'>
					<Image
						className='cursor-pointer'
						src={logo}
						alt='team4est logo'
						width={150}
						height={80}
					/>
				</Link>
				<div className='flex items-center md:order-2'>
					{!user ? (
						<div className='flex items-center space-x-3'>
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
						<>
							<ImageButton
								src={user?.profile ?? avatar}
								alt='profile picture'
								width={1440}
								shape='circle'
								className={styles.profile_avatar_btn}
								onClick={handleClick}
							/>
							<Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
								<div className='px-4 py-3'>
									<span className='block text-sm text-gray-900 dark:text-white'>
										{user?.username ?? 'John Doe'}
									</span>
									<span className='block text-sm  text-gray-500 truncate dark:text-gray-400'>
										{user?.email ?? 'test1@gmail.com'}
									</span>
								</div>
								<ul className='py-2'>
									<li>
										<Link
											href='/profile'
											className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'
										>
											Profile
										</Link>
									</li>
									<li>
										<Link
											href='/teams'
											className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'
										>
											Teams
										</Link>
									</li>
									<li>
										<Link
											href='/logout'
											prefetch={false}
											className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'
										>
											Logout
										</Link>
									</li>
								</ul>
							</Menu>
						</>
					)}
					<button
						type='button'
						onClick={handleMenuClick}
						className='inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700'
					>
						<span className='sr-only'>Open main menu</span>
						<svg
							className='w-6 h-6'
							fill='currentColor'
							viewBox='0 0 20 20'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								fillRule='evenodd'
								d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
								clipRule='evenodd'
							/>
						</svg>
					</button>
				</div>

				<div
					ref={menuRef}
					className={`${styles.menu} ${classNames(
						!isMenuOpen ? `hidden` : ''
					)}`}
				>
					<ul className={classNames(styles.menu_list, styles.menu_list_md)}>
						<LinkText
							href='/'
							type={TextTypes.button}
							style={classNames(
								styles.menu_list_item,
								styles.menu_list_item_md
							)}
						>
							Home
						</LinkText>

						<LinkText
							href='/projects'
							type={TextTypes.button}
							style={classNames(
								styles.menu_list_item,
								styles.menu_list_item_md
							)}
						>
							Home
						</LinkText>
					</ul>
				</div>
			</div>
		</nav>
	)
}

export default Header
