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
						<td>{props.powerstats[0]}</td>
						<td>{props.powerstats[1]}</td>
						<td>{props.powerstats[2]}</td>
						<td>{props.powerstats[3]}</td>
						<td>{props.powerstats[4]}</td>
						<td>{props.powerstats[5]}</td>
					</tr>
				</tbody>
			</table>
			<div>
				<div>Full-name: {props.biography[0]}</div>
				<div>Alignement : {props.biography[2]}</div>
				<div>
					Height : {props.appearance[0]} - Weigth: {props.appearance[1]}
				</div>
				<div>Univers : {props.biography[1]}</div>
			</div>
		</div>
	);
};

export default CardFrame;
