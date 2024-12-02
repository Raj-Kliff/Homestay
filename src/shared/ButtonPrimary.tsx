import Button, { ButtonProps } from './Button'
import React from 'react'

export interface ButtonPrimaryProps extends ButtonProps {}

const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({
	className = '',
	...args
}) => {
	return (
		<Button
			className={`text-sm lg:px-4 lg:py-1.5 border-1 ttnc-ButtonPrimary bg-primary-600 text-neutral-50 hover:bg-primary-700 disabled:bg-opacity-70 ${className}`}
			{...args}
		/>
	)
}

export default ButtonPrimary
