import React from 'react';
import './CardHero.css';
import CardFrame from './CardFrame/CardFrame';
import CardHead from './CardHead/CardHead';
import CardBackground from './CardBackground/CardBackground';
import CardLife from './CardLife/CardLife';
//creation de la card et envoie des données via les props
const CardHero = ({ props }) => {
	return (
		<div className='card-container'>
			<CardBackground image={props.image} />
			<CardHead name={props.name} star={props.star} />
			<CardLife powerstats={props.powerstats} />
			<CardFrame powerstats={props.powerstats} biography={props.biography} appearance={props.appearance} />
		</div>
	);
};

export default CardHero;
