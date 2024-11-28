import { FC } from 'react';
import { Link } from 'react-router';
import { TLinkUiProps } from './types/types';

export const LinkUi: FC<TLinkUiProps> = ({
	linkTo,
	className,
	isSelected = false,
	children,
}) => (
	<Link
		to={linkTo}
		className={`${isSelected ? 'is-selected pb-7' : ''} ${className} group relative`}
	>
		{children}
		<span className='absolute bottom-0 left-0 hidden h-0.5 w-full bg-black align-top group-[.is-selected]:inline'></span>
	</Link>
);
