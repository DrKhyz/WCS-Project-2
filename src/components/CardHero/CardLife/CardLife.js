import React, { Component } from 'react';
import { Progress } from 'reactstrap';
import './CardLife.css';

class CardLife extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div className='card-life'>
				<Progress className='life-bar' color='success' value='100' />
			</div>
		);
	}
}

export default CardLife;
