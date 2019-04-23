import React from 'react'
import { Progress } from 'reactstrap'

const CardLife = props => {
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
				value={props.powerstats.life}
				max={props.powerstats.durability}
			/>
		</div>
	)
}

export default CardLife
