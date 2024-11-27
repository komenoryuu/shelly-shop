export type TProductImageProps = {
	margin?: string;
	imgStyle: string;
	imgSrc: string;
	hasBadge?: boolean;
	badgeStyle?: string;
	badgeTitle?: string;
};

export type TProductDetailsProps = {
	gap?: string;
	title: string;
	price: string;
};

export type TNavigationProps = {
	className?: string;
	link: string[];
	onClick: () => void;
	title: string[];
	isSelected?: boolean[];
};
