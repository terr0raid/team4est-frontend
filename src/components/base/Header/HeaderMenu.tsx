'use client'
import React from 'react'
import { Bars3Icon } from '@heroicons/react/24/outline'
import classNames from 'classnames'
import LinkText from '@/stories/typography/LinkText'
import styles from './HeaderMenu.module.css'
import { TextTypes } from '@/stories/constants/textTypes'
import Menu from '@/stories/menu/Menu'
import IconButton from '@/stories/buttons/IconButton'
import { SizeEnum } from '@/stories/constants/sizeEnum'
import { VariantEnum } from '@/stories/constants/variantEnum'
import { useStore } from '@/stores'
const navigations = [
	{
		name: 'Home',
		href: '/',
	},
	{
		name: 'Projects',
		href: '/projects',
	},
]
function HeaderMenu() {
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
			<IconButton
				type='button'
				icon={<Bars3Icon />}
				onClick={handleClick}
				variant={VariantEnum.OUTLINED}
				radius={SizeEnum.SMALL}
				style='md:hidden flex items-center justify-center !text-primary'
			>
				<span className='sr-only'>Open main menu</span>
			</IconButton>
			<div className={styles.menu_md}>
				<ul className={classNames(styles.menu_list)}>
					{navigations.map(navigation => (
						<LinkText
							key={navigation.name}
							href={navigation.href}
							type={TextTypes.button}
							style={classNames(styles.menu_list_item)}
						>
							{navigation.name}
						</LinkText>
					))}
				</ul>
			</div>
			<Menu
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				style={styles.menu}
				multiplier={3.5}
			>
				<div className='flex flex-row items-center justify-center space-x-3'>
					<LinkText
						href='/signin'
						type={TextTypes.button}
						style='text-secondary hover:-translate-y-1 transition-all duration-300 ease-in-out dark:text-primary'
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
				<hr className='my-4 border-gray-500/50 md:hidden' />
				<ul className={classNames(styles.menu_list)}>
					{navigations.map(navigation => (
						<LinkText
							key={navigation.name}
							href={navigation.href}
							type={TextTypes.button}
							style={classNames(styles.menu_list_item)}
						>
							{navigation.name}
						</LinkText>
					))}
				</ul>
			</Menu>
		</>
	)
}

export default HeaderMenu
