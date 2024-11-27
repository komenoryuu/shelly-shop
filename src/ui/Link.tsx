import { FC } from 'react';
import { TSelectedProps } from './types/types';

export const Link: FC<TSelectedProps> = ({ isSelected = false, onClick, children }) => (
	<a
		className={`${
			isSelected ? 'is-selected pb-7' : ''
		} group relative cursor-pointer`}
		onClick={onClick}
	>
		{children}
		<span className='absolute bottom-0 left-0 hidden h-0.5 w-full bg-black align-top group-[.is-selected]:inline'></span>
	</a>
);
