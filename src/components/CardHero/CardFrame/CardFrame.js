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
					<Col xs='2'>INT</Col>
					<Col xs='2'>STR</Col>
					<Col xs='2'>SPD</Col>
					<Col xs='2'>END</Col>
					<Col xs='2'>POW</Col>
					<Col xs='2'>CBT</Col>
					<Col xs='2'>100</Col>
					<Col xs='2'>26</Col>
					<Col xs='2'>27</Col>
					<Col xs='2'>50</Col>
					<Col xs='2'>47</Col>
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
