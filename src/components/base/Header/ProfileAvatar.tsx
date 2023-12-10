'use client'
import ImageButton from '@/stories/buttons/ImageButton'
import Menu from '@/stories/menu/Menu'
import Link from 'next/link'
import React from 'react'
import styles from './ProfileAvatar.module.css'
import avatar from '@/assets/images/ic_jo_4.jpg'
import { useStore } from '@/stores'

function ProfileAvatar({
	profile,
	username,
	email,
}: {
	profile: string
	username: string
	email: string
}) {
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
	const open = Boolean(anchorEl)
	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget)
	}
	const handleClose = () => {
		setAnchorEl(null)
	}

	return (
		<>
			<ImageButton
				src={profile ?? avatar}
				alt='profile picture'
				width={50}
				shape='circle'
				className={styles.profile_avatar_btn}
				onClick={handleClick}
			/>
			<Menu
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				multiplier={2}
			>
				<div className='px-4 py-3'>
					<span className='block text-sm text-gray-900 dark:text-white'>
						{username ?? 'John Doe'}
					</span>
					<span className='block text-sm  text-gray-500 truncate dark:text-gray-400'>
						{email ?? 'johnd@gmail.com'}
					</span>
				</div>
				<ul className='py-2'>
					<li>
						<Link
							href={`/profile/${username}`}
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
	)
}

export default ProfileAvatar
