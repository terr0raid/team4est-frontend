import Card from '@/stories/cards/Card'
import React from 'react'
import { PhotoIcon } from '@heroicons/react/24/outline'
import styles from './styles.module.css'
import classNames from 'classnames'

function Loading() {
	return (
		<div className={styles.loading_main}>
			<PhotoIcon className='h-20 w-20 text-gray-400' />

			<div className='h-4 bg-gray-400 rounded dark:bg-gray-600 w-48 mb-2.5'></div>
			<Card
				args={{
					role: 'status',
				}}
				style={styles.loading_card}
			>
				<div className='flex items-center justify-between flex-col space-y-6'>
					<div className='w-full'>
						<div className={styles.loading_text}></div>
						<div className={styles.loading_input}></div>
					</div>
					<div className='w-full'>
						<div className={styles.loading_text}></div>
						<div className={styles.loading_input}></div>
					</div>
					<div className='w-full'>
						<div className={styles.loading_btn}></div>
					</div>
					<TextLoadingCard />
				</div>
			</Card>
			<Card
				args={{
					role: 'status',
				}}
				style={styles.loading_card}
			>
				<TextLoadingCard />
			</Card>
		</div>
	)
}

function TextLoadingCard() {
	return (
		<div className='w-full flex flex-col items-center'>
			<div className={styles.text_loading}></div>
			<div
				className={classNames(styles.text_loading, styles.text_loading_p)}
			></div>
		</div>
	)
}

export default Loading
