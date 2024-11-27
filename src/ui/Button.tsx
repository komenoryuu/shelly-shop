import { FC } from 'react';
import { TUiProps } from './types/types';

export const Button: FC<TUiProps> = ({ className, onClick, children }) => (
	<button className={`${className} h-[53px] rounded text-body-l`} onClick={onClick}>
		{children}
	</button>
);
