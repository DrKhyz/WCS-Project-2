import React from 'react';
import { NavLink } from 'react-router-dom';

const Main = () => {
	const content = {
		textAlign: 'center',
		marginTop: '21%'
	};
	return (
		<div style={content}>
			<h1>Welcome to the arena </h1>
			<p>You will see heroes fight each other</p>
			<p>Only one can stay alive</p>
			<NavLink className='btn btn-primary' activeClassName='btn-danger' to='/random'>
				Random Combat
			</NavLink>
			<NavLink className='btn btn-primary' activeClassName='btn-danger' to='/selected'>
				Selected Combat
			</NavLink>
		</div>
	);
};

export default Main;
