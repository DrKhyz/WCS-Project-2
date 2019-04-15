import React from 'react';
import { NavLink } from 'react-router-dom';

const Main = () => {
	return (
		<div>
			<h1>Welcome to the arena </h1>
			<p>You will see heroes fight each other</p>
			<p>Only one can stay alive</p>
			<NavLink className='btn btn-primary' activeClassName='btn-danger' to='/random'>
				Random Combat
			</NavLink>
		</div>
	);
};

export default Main;
