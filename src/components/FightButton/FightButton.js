import React, { Component } from 'react';
import { Button } from 'reactstrap';
import './FightButton.css';

class FightButton extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	handleClick = () => {
		console.log('Function to Fight');
	};

	render() {
		return (
			<div>
				<Button onClick={this.handleClick} className='fight-button' color='secondary'>
					Fight
				</Button>
			</div>
		);
	}
}

export default FightButton;
