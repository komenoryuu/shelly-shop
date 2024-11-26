interface LinkProps {
	isSelected?: boolean;
	onClick: () => void;
	children: React.ReactNode;
}

export const Link = ({ isSelected = false, onClick, children }: LinkProps) => (
	<a
		className={`${
			isSelected ? 'is-selected pb-7' : ''
		} group relative cursor-pointer`}
		onClick={onClick}
	>
		{children}
		<span className='absolute bottom-0 left-0 hidden h-0.5 w-full bg-black align-top group-[.is-selected]:inline'></span>
	</a>
);
