import React, { Component } from 'react';
import './CardHead.css';
import { Row, Col, Spinner } from 'reactstrap';

class CardHead extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className='card-head' xs='12'>
				<Row className='mt-2'>
					<Col className='card-name d-flex align-items-center' xs='4'>
						{this.props.name}
					</Col>
					<Col className='card-level d-flex flex-row-reverse align-items-center' xs={{ size: 4, offset: 4 }}>
						<Spinner className='m-auto' size='sm' type='grow' color='warning' />
						<Spinner className='m-auto' size='sm' type='grow' color='warning' />
						<Spinner className='m-auto' size='sm' type='grow' color='warning' />
						<Spinner className='m-auto' size='sm' type='grow' color='warning' />
						<Spinner className='m-auto' size='sm' type='grow' color='warning' />
					</Col>
				</Row>
			</div>
		);
	}
}

export default CardHead;
