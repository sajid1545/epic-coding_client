import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Components/Header/Header';

const Main = () => {
	return (
		<div>
			<div>
				<Header />
			</div>
			<div>
				<Outlet />
			</div>
		</div>
	);
};

export default Main;
