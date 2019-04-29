import React from 'react';
import { Progress } from 'reactstrap';
import PropTypes from 'prop-types';

const CardLife = ({ powerstats }) => {
	const cardLife = {
		position: 'absolute',
		marginTop: '5vw',
		marginLeft: '-9vw',
		width: '10vw',
	};
	const lifeBar = {
		minHeight: '3px',
		maxHeight: '0.4vw',
		width: '10vw',
	};

	let color;
	let remaningLife = (powerstats.life / powerstats.durability) * 100;
	if (remaningLife >= 70) {
		color = 'success';
	} else if (remaningLife < 69 && remaningLife >= 50) {
		color = 'info';
	} else if (remaningLife < 49 && remaningLife >= 25) {
		color = 'warning';
	} else {
		color = 'danger';
	}

	return (
		<div style={cardLife}>
			<Progress animated style={lifeBar} color={color} value={powerstats.life} max={powerstats.durability + 100} />
		</div>
	);
};

export default CardLife;

CardLife.propTypes = {
	powerstats: PropTypes.object.isRequired,
};
