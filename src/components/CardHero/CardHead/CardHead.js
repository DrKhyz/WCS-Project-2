import React from 'react';
import './CardHead.css';

const CardHead = ({ name }) => {
	return (
		<div className='card-head'>
			<div className='card-name d-flex align-items-center'>{name}</div>
			<div className='card-level d-flex'>
				<img src='https://img.icons8.com/color/48/000000/filled-star.png' alt='star' className='star' />
				<img src='https://img.icons8.com/color/48/000000/filled-star.png' alt='star' className='star' />
				<img src='https://img.icons8.com/color/48/000000/filled-star.png' alt='star' className='star' />
				<img src='https://img.icons8.com/color/48/000000/star.png' alt='star' className='star' />
				<img src='https://img.icons8.com/color/48/000000/star.png' alt='star' className='star' />
			</div>
		</div>
	);
};

export default CardHead;
