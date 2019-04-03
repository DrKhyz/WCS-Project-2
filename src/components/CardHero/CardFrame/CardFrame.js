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
				<Row className='mt-2'>
					<Col xs='2'>INT</Col>
					<Col xs='2'>STR</Col>
					<Col xs='2'>SPD</Col>
					<Col xs='2'>END</Col>
					<Col xs='2'>POW</Col>
					<Col xs='2'>CBT</Col>
					<Col xs='2'>{this.props.powerstats.intelligence}</Col>
					<Col xs='2'>{this.props.powerstats.strength}</Col>
					<Col xs='2'>{this.props.powerstats.speed}</Col>
					<Col xs='2'>{this.props.powerstats.durability}</Col>
					<Col xs='2'>{this.props.powerstats.power}</Col>
					<Col xs='2'>{this.props.powerstats.combat}</Col>
				</Row>
				<Row className='mt-4'>
					<Col xs='12'>Full-name: {this.props.biography['full-name']}</Col>
					<Col xs='12'>Alignement : {this.props.biography.alignment}</Col>
					<Col xs='12'>
						Height : {this.props.appearance.height[1]} - Weigth: {this.props.appearance.weight[1]}
					</Col>
					<Col xs='12'>Univers : {this.props.biography.publisher}</Col>
				</Row>
			</div>
		);
	}
}

export default CardFrame;
