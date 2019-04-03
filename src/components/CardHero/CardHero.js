import React, { Component } from 'react';
import './CardHero.css';

class CardHero extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div className='card-container'>
				<div className='card-background'>
					<img src='https://www.superherodb.com/pictures2/portraits/10/100/10441.jpg' />
					<div className='card-frame' />
				</div>
			</div>
		);
	}
}

export default CardHero;
