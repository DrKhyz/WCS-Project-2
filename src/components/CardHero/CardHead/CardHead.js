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
		console.log(this.state.star);
		let starsType = [];
		const filledStar = 'https://img.icons8.com/color/48/000000/filled-star.png';
		const emptyStar = 'https://img.icons8.com/color/48/000000/star.png';
		for (let i = 1; i <= 5; i++) {
			this.state.star < i ? starsType.push(emptyStar) : starsType.push(filledStar);
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
