import { FC } from 'react';
import { LinkUi } from '../../ui';
import { TNavigationProps } from '../types/types';

export const Navigation: FC<TNavigationProps> = ({ className, navLinks }) => {
	return (
		<nav className={`${className} flex justify-center text-h5`}>
			{navLinks.map(({ title, linkTo, isSelected }, index) => (
				<LinkUi
					key={index}
					className={className}
					linkTo={linkTo}
					isSelected={isSelected}
				>
					{title}
				</LinkUi>
			))}
		</nav>
	);
};
