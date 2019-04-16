import React, { Component } from 'react';

class CardHead extends Component {
	state = {
		star: this.props.star,
		name: this.props.name,
		starsBand: []
	};

	componentDidMount() {
		let starsType = [];
		const filledStar = 'https://img.icons8.com/color/48/000000/filled-star.png';
		const emptyStar = 'https://img.icons8.com/color/48/000000/star.png';
		for (let i = 1; i <= 5; i++) {
			this.state.star < i ? starsType.push(emptyStar) : starsType.push(filledStar);
		}
		this.setState({ starsBand: starsType });
	}

	render() {
		const cardHead = {
			width: '94%',
			fontSize: '1vw',
			position: 'absolute'
		};

		const cardName = {
			display: 'flex',
			alignItems: 'align-items-center',
			fontSize: '1.5vw',
			paddingLeft: '3%',
			fontFamily: 'HeroesFont',
			width: '40%',
			marginLeft: '-3%',
			color: 'white',
			backgroundColor: 'black',
			border: '2px solid black',
			marginTop: '10%',
			opacity: '0.9',
			borderTopRightRadius: '10px',
			borderBottomRightRadius: '10px'
		};

		const cardLevel = {
			display: 'flex',
			color: 'white',
			width: '40%',
			marginLeft: '62%',
			backgroundColor: 'black',
			border: '2px solid black',
			opacity: '0.9',
			borderTopLeftRadius: '10px',
			borderBottomLeftRadius: '10px',
			marginTop: '-9%'
		};

		const star = {
			maxHeight: '20%',
			height: '20%',
			maxWidth: '20%',
			width: '20%'
		};

		return (
			<div style={cardHead}>
				<div style={cardName}>{this.state.name}</div>
				<div style={cardLevel}>
					<img src={this.state.starsBand[0]} alt='star' style={star} />
					<img src={this.state.starsBand[1]} alt='star' style={star} />
					<img src={this.state.starsBand[2]} alt='star' style={star} />
					<img src={this.state.starsBand[3]} alt='star' style={star} />
					<img src={this.state.starsBand[4]} alt='star' style={star} />
				</div>
			</div>
		);
	}
}

export default CardHead;