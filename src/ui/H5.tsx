interface H5Props {
	className?: string;
	onClick?: () => void;
	children: React.ReactNode;
}

export const H5 = ({ className = 'text-h5', onClick, children }: H5Props) => (
	<h5
		className={`${className} cursor-pointer text-dark-gray transition-all hover:text-black`}
		onClick={onClick}
	>
		{children}
	</h5>
);
