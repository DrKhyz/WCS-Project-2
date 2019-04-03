import React, { Component } from 'react';
import './CardHero.css';
import CardFrame from './CardFrame/CardFrame';
class CardHero extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div className='card-container'>
				<div className='card-background'>
					<img src='https://www.superherodb.com/pictures2/portraits/10/100/639.jpg' />
				</div>
				<CardFrame />
			</div>
		);
	}
}

export default CardHero;
