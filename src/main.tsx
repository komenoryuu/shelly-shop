import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Shelly from './Shelly.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Shelly />
	</StrictMode>,
);
