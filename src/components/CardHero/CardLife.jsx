import React from 'react';
import { Progress } from 'reactstrap';
import PropTypes from 'prop-types';

const CardLife = ({ powerstats, golden }) => {
	const cardLife = {
		position: 'absolute',
		marginTop: '24vw',
		marginLeft: '-8vw',
		width: '10vw',
	};
	const lifeBar = {
		minHeight: '7px',
		maxHeight: '1.5vw',
		height: '1.5vw',
		width: '26vw',
	};

	const displayLifeStyle = {
		position: 'absolute',
		color: 'black',
		marginLeft: '200%',
		fontSize: '1vw',
	};

	let color;
	let remaningLife = (powerstats.life / powerstats.durability) * 100;
	if (remaningLife >= 50) {
		color = 'success';
	} else if (remaningLife < 49 && remaningLife >= 25) {
		color = 'warning';
	} else {
		color = 'danger';
	}

	let animated = golden ? 'animated' : '';

	return (
		<div style={cardLife}>
			<Progress
				animated={animated}
				style={lifeBar}
				color={color}
				value={powerstats.life}
				max={powerstats.durability + 100}>
				<div style={displayLifeStyle}>
					{powerstats.life}/{powerstats.durability + 100}
				</div>
			</Progress>
		</div>
	);
};

export default CardLife;

CardLife.propTypes = {
	powerstats: PropTypes.object.isRequired,
	golden: PropTypes.bool,
};
