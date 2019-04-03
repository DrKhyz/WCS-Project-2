import React, { Component } from 'react';
import './CardHero.css';
import CardFrame from './CardFrame/CardFrame';
import CardHead from './CardHead/CardHead';
import CardBackground from './CardBackground/CardBackground';
import CardLife from './CardLife/CardLife';

class CardHero extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className='card-container'>
				<CardBackground image={this.props.image} />
				<CardHead name={this.props.name} />
				<CardLife />
				<CardFrame
					powerstats={this.props.powerstats}
					biography={this.props.biography}
					appearance={this.props.appearance}
				/>
			</div>
		);
	}
}

export default CardHero;
