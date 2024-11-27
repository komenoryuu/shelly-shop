import { FC } from 'react';
import { TUiProps } from './types/types';

export const H5: FC<Partial<TUiProps>> = ({
	className = 'text-h5',
	onClick,
	children,
}) => (
	<h5
		className={`${className} cursor-pointer text-dark-gray transition-all hover:text-black`}
		onClick={onClick}
	>
		{children}
	</h5>
);
