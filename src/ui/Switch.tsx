import { FC } from 'react';
import { useState } from 'react';

export const Switch: FC<{ action: () => void }> = ({ action }) => {
	const [isChecked, setIsChecked] = useState(false);

	const handleCheckboxChange = () => {
		setIsChecked(!isChecked);
		action();
	};

	return (
		<label className='flex h-[20px] w-[33px] cursor-pointer select-none items-center rounded-[20px] bg-dark-gray'>
			<div className='relative'>
				<input
					type='checkbox'
					checked={isChecked}
					onChange={handleCheckboxChange}
					className='sr-only'
				/>
				<div
					className={`box block h-[20px] w-[33px] rounded-full ${
						isChecked ? 'bg-accent' : 'bg-dark'
					}`}
				></div>
				<div
					className={`absolute left-[3px] top-[3px] flex h-[13px] w-[13px] items-center justify-center rounded-full bg-white transition ${
						isChecked ? 'translate-x-full' : ''
					}`}
				></div>
			</div>
		</label>
	);
};
