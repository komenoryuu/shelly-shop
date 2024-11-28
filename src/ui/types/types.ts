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

export type TLinkUiProps = {
	linkTo: string;
	className?: string;
	isSelected: boolean;
	children: React.ReactNode;
};

export type TSelectedPropsOmit = Omit<TSelectedProps, 'children'>;

export type TUiPropsOmit = Omit<TUiProps, 'onClick'>;
