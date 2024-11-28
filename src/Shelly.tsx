import { Routes, Route } from 'react-router';
import { SearchPanel } from './components';

function Shelly() {
	return (
		<div className='mx-auto max-w-screen-xl'>
			{/* <Header/> */}
			<main>
				<Routes>
					<Route
						path='/'
						element={
							<div>
								<SearchPanel onChange={() => {}} />
							</div>
						}
					/>
					<Route path='/shop' element={<div>Shop page</div>} />
					<Route path='/shop/:id' element={<div>Poduct page</div>} />
					<Route path='/cart' element={<div>Cart page</div>} />
					<Route path='/admindb' element={<div>Admin page</div>} />
					<Route path='/account' element={<div>Account page</div>} />
					<Route path='/register' element={<div>Register page</div>} />
					<Route path='/login' element={<div>Login page</div>} />
					<Route path='*' element={<div>404 page</div>} />
				</Routes>
			</main>
			{/* <Footer/> */}
		</div>
	);
}

export default Shelly;
