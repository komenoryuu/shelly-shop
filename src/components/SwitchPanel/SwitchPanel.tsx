import { FC } from 'react';
import { Switch } from '../../ui';
import { TSwitchPanelProps } from '../types/types';

export const SwitchPanel: FC<TSwitchPanelProps> = ({ action, children }) => {
	return (
		<div className='flex justify-between'>
			<h5 className='text-h5'>{children}</h5>
			<Switch action={action} />
		</div>
	);
};
