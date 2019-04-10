import React, { Component } from 'react';
import './CardHead.css';

class CardHead extends Component {
	constructor(props) {
		super(props);
		this.state = {
			star: this.props.star,
			name: this.props.name,
			starsBand: []
		};
	}

	componentDidMount() {
		let level;
		this.state.star -= 100;
		let starsType = [];
		if (this.state.star > 500) {
			level = 5;
		} else if (this.state.star < 499 && this.state.star > 401) {
			level = 4;
		} else if (this.state.star < 399 && this.state.star > 301) {
			level = 3;
		} else if (this.state.star < 299 && this.state.star > 201) {
			level = 2;
		} else if (this.state.star < 199) {
			level = 1;
		}
		for (let i = 1; i <= 5; i++) {
			level < i
				? starsType.push('https://img.icons8.com/color/48/000000/star.png')
				: starsType.push('https://img.icons8.com/color/48/000000/filled-star.png');
		}
		this.setState({ starsBand: starsType });
	}
	render() {
		return (
			<div className='card-head'>
				<div className='card-name d-flex align-items-center'>{this.state.name}</div>
				<div className='card-level d-flex'>
					<img src={this.state.starsBand[0]} alt='star' className='star' />
					<img src={this.state.starsBand[1]} alt='star' className='star' />
					<img src={this.state.starsBand[2]} alt='star' className='star' />
					<img src={this.state.starsBand[3]} alt='star' className='star' />
					<img src={this.state.starsBand[4]} alt='star' className='star' />
				</div>
			</div>
		);
	}
}

export default CardHead;
