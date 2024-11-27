import { FC } from 'react';
import { Badge } from '../../ui';
import { TProductImageProps } from '../types/types';

export const ProductImage: FC<TProductImageProps> = ({
	margin,
	imgStyle,
	imgSrc,
	hasBadge = false,
	badgeStyle,
	badgeTitle,
}) => (
	<div className={`${margin} relative`}>
		<img className={`${imgStyle} rounded-lg`} src={imgSrc} alt='productCardPhoto' />
		{hasBadge && (
			<Badge className={`${badgeStyle} absolute`}>{badgeTitle}</Badge>
		)}
	</div>
);
