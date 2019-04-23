import React from 'react';
import { Progress } from 'reactstrap';

const CardLife = props => {
	const cardLife = {
		position: 'absolute',
		width: '98%',
		marginTop: '16%',
		paddingTop: '4px'
	};
	const lifeBar = {
		minHeight: '3px',
		maxHeight: '0.1vh',
		width: '36%'
	};

	return (
		<div style={cardLife}>
			<Progress style={lifeBar} color='success' value={props.powerstats.life} max={props.powerstats.durability} />
		</div>
	);
};

export default CardLife;
