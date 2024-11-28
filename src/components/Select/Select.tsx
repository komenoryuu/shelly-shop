import { FC } from 'react';
import { TSelectProps } from '../types/types';

export const Select: FC<TSelectProps> = ({ sortBy, onChange, options }) => (
	<div className='relative w-full'>
		<select
			className='h-[53px] w-full appearance-none rounded border-2 border-solid border-gray bg-white pl-3 pr-10 text-body-m'
			value={sortBy}
			onChange={onChange}
		>
			<option value=''>{sortBy}</option>
			{options.map((value, index) => (
				<option key={index} value={value}>
					{value}
				</option>
			))}
		</select>
		<span className='absolute right-3 top-1/3 inline-block h-[14px] w-[14px] rotate-45 border-b-[3px] border-r-[3px] border-solid border-black'></span>
	</div>
);
