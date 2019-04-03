import React, { Component } from 'react';
import './CardFrame.css';

class CardFrame extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div className='card-frame'>
				<p>lorem impsum</p>
			</div>
		);
	}
}

export default CardFrame;
