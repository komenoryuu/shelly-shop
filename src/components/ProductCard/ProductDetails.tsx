import { FC } from 'react';
import { TProductDetailsProps } from '../types/types';

export const ProductDetails: FC<TProductDetailsProps> = ({
	gap = '16px',
	title,
	price,
}) => (
	<div className={`${gap} flex flex-col justify-items-start`}>
		<h3 className='mb-4 text-h3'>{title}</h3>
		<h4 className='text-h4 text-accent'>{price}</h4>
	</div>
);
