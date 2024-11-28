import { SearchLens } from '../../ui';
import { FC } from 'react';

export const SearchPanel: FC<{ onChange: () => void }> = ({ onChange }) => (
	<div className='relative h-[35px] w-[261px] border-b-2 border-solid border-gray'>
		<input
			className='w-full pr-6 text-body-m text-dark-gray outline-none'
			placeholder='Search...'
			onChange={onChange}
		/>
		<SearchLens className='absolute right-0 top-0' />
	</div>
);
