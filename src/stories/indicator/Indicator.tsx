import React from 'react'
import styles from './Indicator.module.css'
import classNames from 'classnames'
import DefaultText from '../typography/DefaultText'
import { TextTypes } from '../constants/textTypes'
import { Step } from '../../types'

type IndicatorProps = {
	steps: Step[]
	style?: string
}

function Indicator({ ...props }: IndicatorProps) {
	return (
		<ol className={classNames(styles.indicator_list, props.style)}>
			{props.steps.map((step, index) => {
				if (step.active) {
					return <ActiveStep label={step.label} key={index} />
				} else if (step.completed) {
					return <CompletedStep label={step.label} key={index} />
				} else {
					return <DefaultStep label={step.label} key={index} />
				}
			})}
		</ol>
	)
}

function ActiveStep({ label }: { label: string }) {
	return (
		<StepWrapper label={label}>
			<div className={classNames(styles.indicator, styles.indicator_active)}>
				<span className='flex w-3 h-3 bg-blue-600 rounded-full' />
			</div>
		</StepWrapper>
	)
}

function CompletedStep({ label }: { label: string }) {
	return (
		<StepWrapper label={label}>
			<div className={classNames(styles.indicator, styles.indicator_completed)}>
				<span className='flex w-3 h-3 bg-green-600 rounded-full' />
			</div>
		</StepWrapper>
	)
}

function DefaultStep({ label }: { label: string }) {
	return (
		<StepWrapper label={label}>
			<div className={classNames(styles.indicator, styles.indicator_default)}>
				<span className='flex w-3 h-3 bg-gray-900 rounded-full dark:bg-gray-300' />
			</div>
		</StepWrapper>
	)
}

function StepWrapper({
	children,
	label,
}: {
	children: React.ReactNode
	label: string
}) {
	return (
		<li>
			{children}
			<div className='mt-3'>
				<DefaultText type={TextTypes.body2} element='p' style=''>
					{label}
				</DefaultText>
			</div>
		</li>
	)
}

export default Indicator
