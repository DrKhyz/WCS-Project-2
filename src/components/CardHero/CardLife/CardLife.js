import React, { Component } from 'react';
import { Progress } from 'reactstrap';
import './CardLife.css';

const CardLife = props => {
	let normalizedLife = props.powerstats[3];
	return (
		<div className='card-life'>
			<Progress className='life-bar' color='success' value={props.powerstats[6]} max={props.powerstats[3]} />
		</div>
	);
};

export default CardLife;
