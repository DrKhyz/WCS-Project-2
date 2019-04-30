import React from 'react';
import PropTypes from 'prop-types';

const CardStatus = ({ asCritical, asMissed }) => {
	const CardStatus = {
		position: 'absolute',
		marginTop: '15vw',
		marginLeft: '',
		textAlign: 'center',
		width: '10vw',
	};

	return (
		<div style={CardStatus}>
			{asCritical && <div style={{ color: 'red', textDecoration: 'bold' }}>Critical Hit</div>}
			{asMissed && <div style={{ color: 'red', textDecoration: 'bold' }}>Miss</div>}
		</div>
	);
};

CardStatus.propTypes = {
	asCritical: PropTypes.bool.isRequired,
	asMissed: PropTypes.bool.isRequired,
};

export default CardStatus;
