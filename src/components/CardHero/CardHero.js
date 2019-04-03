import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './CardHero.css';
import CardFrame from './CardFrame/CardFrame';

class CardHero extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<container className='card-container'>
				<div className='card-background'>
					<img src='https://www.superherodb.com/pictures2/portraits/10/100/639.jpg' />
				</div>
				<CardFrame />
			</container>
		);
	}
}

export default CardHero;
