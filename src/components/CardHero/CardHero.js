import React from 'react';
import './CardHero.css';
import CardFrame from './CardFrame/CardFrame';
import CardHead from './CardHead/CardHead';
import CardBackground from './CardBackground/CardBackground';
import CardLife from './CardLife/CardLife';

const CardHero = ({ props }) => {
	return (
		<div className='card-container'>
			<CardBackground image={props.image} />
			<CardHead name={props.name} />
			<CardLife />
			<CardFrame powerstats={props.powerstats} biography={props.biography} appearance={props.appearance} />
		</div>
	);
};

export default CardHero;
