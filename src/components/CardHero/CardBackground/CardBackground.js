import React from 'react';
import './CardBackground.css';

const CardBackground = props => {
	return (
		<div className='card-background'>
			<img src={props.image} alt='Pic not found' />
		</div>
	);
};

export default CardBackground;
