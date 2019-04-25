import React from 'react'
import { Progress } from 'reactstrap'
import PropTypes from 'prop-types'

const CardLife = ({ powerstats }) => {
	const cardLife = {
		position: 'absolute',
		marginTop: '5vw',
		marginLeft: '2vw',
		width: '100%',
	}
	const lifeBar = {
		minHeight: '2px',
		maxHeight: '0.2vh',
		width: '10vw',
	}

	return (
		<div style={cardLife}>
			<Progress
				style={lifeBar}
				color='success'
				value={powerstats.life}
				max={powerstats.durability}
			/>
		</div>
	)
}

export default CardLife

CardLife.propTypes = {
	powerstats: PropTypes.object.isRequired,
}
