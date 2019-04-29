import React from 'react';
import { NavLink } from 'react-router-dom';

const Main = () => {
	const content = {
		textAlign: 'center',
		color: 'black',
		marginTop: '21%',
		broder: 'black 1px solid',
		background: 'rgb(255,255,255,0.8)',
		width: '40%',
		margin: '20% auto',
		padding: '1%',
		borderRadius: '10px',
	};
	return (
		<div style={content}>
			<h1>Welcome to the arena </h1>
			<p>You will see heroes fight each other</p>
			<p>Only one can stay alive</p>
			<NavLink className='btn btn-primary m-1' activeClassName='btn-danger' to='/random'>
				Random Combat
			</NavLink>
			<NavLink className='btn btn-primary m-1' activeClassName='btn-danger' to='/selected'>
				Selected Combat
			</NavLink>
		</div>
	);
};

export default Main;
