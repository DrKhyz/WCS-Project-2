import React, { Component } from 'react';
import './CardHero.css';
import CardFrame from './CardFrame/CardFrame';
import CardHead from './CardHead/CardHead';
import CardBackground from './CardBackground/CardBackground';

class CardHero extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div className='card-container'>
				<CardBackground />
				<CardFrame />
				<CardHead />
			</div>
		);
	}
}

export default CardHero;
