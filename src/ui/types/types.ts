export type TSelectedProps = {
	isSelected?: boolean;
	onClick: () => void;
	children: React.ReactNode;
};

export type TUiProps = {
	className: string;
	onClick: () => void;
	children: React.ReactNode;
};

export type TLinkTo = {
	className?: string;
	linkTo: string;
};

export type TSelectedPropsOmit = Omit<TSelectedProps, 'children'>;

export type TUiPropsOmit = Omit<TUiProps, 'onClick'>;
