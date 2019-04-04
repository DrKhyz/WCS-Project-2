import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import './CardFrame.css';

class CardFrame extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className='card-frame'>
				<table className='table-stats'>
					<tr>
						<td>INT</td>
						<td>STR</td>
						<td>SPD</td>
						<td>END</td>
						<td>POW</td>
						<td>CBT</td>
					</tr>
					<tr>
						<td>{this.props.powerstats.intelligence}</td>
						<td>{this.props.powerstats.strength}</td>
						<td>{this.props.powerstats.speed}</td>
						<td>{this.props.powerstats.durability}</td>
						<td>{this.props.powerstats.power}</td>
						<td>{this.props.powerstats.combat}</td>
					</tr>
				</table>
				<div className='mt-2'>
					<div>Full-name: {this.props.biography['full-name']}</div>
					<div>Alignement : {this.props.biography.alignment}</div>
					<div>
						Height : {this.props.appearance.height[1]} - Weigth: {this.props.appearance.weight[1]}
					</div>
					<div>Univers : {this.props.biography.publisher}</div>
				</div>
			</div>
		);
	}
}

export default CardFrame;
