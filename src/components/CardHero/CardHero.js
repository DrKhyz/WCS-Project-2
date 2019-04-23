import React from 'react'
import CardFrame from './CardFrame.jsx'
import CardHead from './CardHead.jsx'
import CardBackground from './CardBackground/CardBackground'
import CardLife from './CardLife.jsx'

const CardHero = ({ props }) => {
	const cardContainer = {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		margin: '10px 0 0 0',
		width: '30vw',
		border: '1px solid black',
		borderRadius: '2vw',
		background: '#171314',
		boxSizing: 'border-box',
		padding: '0',
		maxHeigth: '15vw',
	}

	return (
		<div style={cardContainer}>
			<CardBackground image={props.image} />
			<CardHead name={props.name} star={props.star} />
			<CardFrame
				powerstats={props.powerstats}
				biography={props.biography}
				appearance={props.appearance}
			/>
			<CardLife powerstats={props.powerstats} />
		</div>
	)
}

export default CardHero
