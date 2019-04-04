import React, { Component } from 'react';
import { Button } from 'reactstrap';
import './RandomButton.css';

class RandomButton extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	handleClick = () => {
		console.log('Function to reset fighters');
	};

	render() {
		return (
			<div>
				<Button onClick={this.handleClick} className='random-button' color='secondary'>
					Reset
				</Button>
			</div>
		);
	}
}

export default RandomButton;
