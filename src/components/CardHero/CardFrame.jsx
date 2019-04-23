import React from 'react';

const CardFrame = props => {
	const cardFrame = {
		width: '94%',
		fontSize: '1.3vw',
		backgroundColor: '#bbb',
		opacity: '0.9',
		border: '2px solid black',
		position: 'absolute',
		borderRadius: '2vw',
		marginTop: '80%',
		maxHeight: '32%',
		height: '32%',
		maxWidth: '100%',
		textAlign: 'center'
	};

	return (
		<div style={cardFrame}>
			<table style={{ width: '90%', margin: 'auto' }}>
				<thead>
					<tr>
						<th>INT</th>
						<th>STR</th>
						<th>SPD</th>
						<th>END</th>
						<th>POW</th>
						<th>CBT</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>{props.powerstats.intelligence}</td>
						<td>{props.powerstats.strength}</td>
						<td>{props.powerstats.speed}</td>
						<td>{props.powerstats.durability}</td>
						<td>{props.powerstats.power}</td>
						<td>{props.powerstats.combat}</td>
					</tr>
				</tbody>
			</table>
			<div>
				<div>Full-name: {props.biography.fullname}</div>
				<div>Alignement : {props.biography.alignment}</div>
				<div>
					Height : {props.appearance.height} - Weigth: {props.appearance.weight}
				</div>
				<div>Univers : {props.biography.publisher}</div>
			</div>
		</div>
	);
};

export default CardFrame;
