import { FC } from 'react';
import { TUiPropsOmit } from './types/types';

export const Badge: FC<TUiPropsOmit> = ({ className, children }) => {
	return (
		<div
			className={`${className} flex h-6 items-center justify-center rounded text-body-s`}
		>
			{children}
		</div>
	);
};
