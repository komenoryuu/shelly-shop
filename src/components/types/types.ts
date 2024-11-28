// Navigation
type TNavigationObject = {
	title: string;
	linkTo: string;
	isSelected: boolean;
};

export type TNavigationProps = {
	className?: string;
	navLinks: TNavigationObject[];
};

// Product Card
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

// Switch Panel
export type TSwitchPanelProps = {
	action: () => void;
	children: React.ReactNode;
};
