import React, { Component } from 'react';
import { Progress, Row, Col } from 'reactstrap';
import './CardLife.css';

class CardLife extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<Row className='card-life'>
				<Col xs='4'>
					<Progress className='life-bar' color='success' value='100' />
				</Col>
			</Row>
		);
	}
}

export default CardLife;
