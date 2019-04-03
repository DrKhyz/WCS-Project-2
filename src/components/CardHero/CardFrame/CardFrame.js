import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import './CardFrame.css';

class CardFrame extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div className='card-frame'>
				<Row className='mt-2'>
					<Col xs='2'>Int</Col>
					<Col xs='2'>Str</Col>
					<Col xs='2'>Spd</Col>
					<Col xs='2'>Dur</Col>
					<Col xs='2'>Pow</Col>
					<Col xs='2'>Cbt</Col>
					<Col xs='2'>100</Col>
					<Col xs='2'>100</Col>
					<Col xs='2'>100</Col>
					<Col xs='2'>100</Col>
					<Col xs='2'>100</Col>
					<Col xs='2'>100</Col>
				</Row>
				<Row className='mt-4'>
					<Col xs='12'>Full-name: Bruce Wayne</Col>
					<Col xs='12'>Alignement : Good</Col>
					<Col xs='12'>Height : 188cm - Weigth: 95Kg</Col>
					<Col xs='12'>Univers : DC Comics</Col>
				</Row>
			</div>
		);
	}
}

export default CardFrame;
