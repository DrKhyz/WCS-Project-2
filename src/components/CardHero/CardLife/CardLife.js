import React from 'react';
import { Progress } from 'reactstrap';
import './CardLife.css';

const CardLife = props => {
	return (
		<div className='card-life'>
			<Progress className='life-bar' color='success' value={props.powerstats.life} max={props.powerstats.durability} />
		</div>
	);
};

export default CardLife;
