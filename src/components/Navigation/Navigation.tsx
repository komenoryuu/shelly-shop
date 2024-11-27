import { FC } from 'react';
import { LinkUi } from '../../ui';
import { TNavigationProps } from '../types/types';

export const Navigation: FC<TNavigationProps> = ({
	className,
	link,
	onClick,
	title,
	isSelected = [false, false, false],
}) => (
	<nav className={`${className} flex justify-center text-h5`}>
		<LinkUi
			className={className}
			linkTo={link[0]}
			onClick={onClick}
			children={title[0]}
			isSelected={isSelected[0]}
		></LinkUi>
		<LinkUi
			className={className}
			linkTo={link[1]}
			onClick={onClick}
			children={title[1]}
			isSelected={isSelected[1]}
		></LinkUi>
		<LinkUi
			className={className}
			linkTo={link[2]}
			onClick={onClick}
			children={title[2]}
			isSelected={isSelected[2]}
		></LinkUi>
	</nav>
);
