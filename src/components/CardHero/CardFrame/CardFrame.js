import React from 'react';
import './CardFrame.css';

const CardFrame = props => {
	return (
		<div className='card-frame'>
			<table className='table-stats'>
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
				<div>Full-name: {props.biography.alignment}</div>
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
