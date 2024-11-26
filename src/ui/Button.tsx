interface ButtonProps {
	className: string;
	onClick: () => void;
	children: React.ReactNode;
}

export const Button = ({ className, onClick, children }: ButtonProps) => (
	<button className={`${className} h-[53px] rounded text-body-l`} onClick={onClick}>
		{children}
	</button>
);
