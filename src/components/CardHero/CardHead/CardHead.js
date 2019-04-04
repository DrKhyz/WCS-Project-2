import React, { Component } from 'react';
import './CardHead.css';
import { Spinner } from 'reactstrap';

class CardHead extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className='card-head'>
				<div className='card-name d-flex align-items-center'>{this.props.name}</div>
				<div className='card-level d-flex'>
					<img src='https://img.icons8.com/color/48/000000/filled-star.png' alt='star' className='star' />
					<img src='https://img.icons8.com/color/48/000000/star-half.png' alt='star' className='star' />
					<img src='https://img.icons8.com/color/48/000000/star.png' alt='star' className='star' />
					<img src='https://img.icons8.com/color/48/000000/star.png' alt='star' className='star' />
					<img src='https://img.icons8.com/color/48/000000/star.png' alt='star' className='star' />
				</div>
			</div>
		);
	}
}

export default CardHead;
