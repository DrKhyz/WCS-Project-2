import React from 'react';
import PropTypes from 'prop-types';

const CardHead = ({ name, star }) => {
	let starsType = [];
	const filledStar = 'https://img.icons8.com/color/48/000000/filled-star.png';
	const emptyStar = 'https://img.icons8.com/color/48/000000/star.png';
	for (let i = 1; i <= 5; i++) {
		star < i ? starsType.push(emptyStar) : starsType.push(filledStar);
	}

	const cardHead = {
		width: '28vw',
		fontSize: '0.8vw',
		position: 'absolute',
	};

	const cardName = {
		position: 'absolute',
		display: 'flex',
		alignItems: 'align-items-center',
		fontSize: '1.5vw',
		paddingLeft: '3%',
		fontFamily: 'HeroesFont',
		width: '40%',
		marginLeft: '-2%',
		color: 'white',
		backgroundColor: 'black',
		border: '2px solid black',
		marginTop: '10%',
		opacity: '0.9',
		borderTopRightRadius: '10px',
		borderBottomRightRadius: '10px',
	};

	const cardLevel = {
		display: 'flex',
		position: 'absolute',
		color: 'white',
		width: '40%',
		marginLeft: '62%',
		backgroundColor: 'black',
		border: '2px solid black',
		opacity: '0.9',
		borderTopLeftRadius: '10px',
		borderBottomLeftRadius: '10px',
		marginTop: '10%',
	};

	const starContainer = {
		maxHeight: '20%',
		height: '20%',
		maxWidth: '20%',
		width: '20%',
	};
	return (
		<div style={cardHead}>
			<div style={cardName}>{name}</div>
			<div style={cardLevel}>
				{starsType.map((x, i) => (
					<img key={i} src={x} alt='star' style={starContainer} />
				))}
			</div>
		</div>
	);
};

export default CardHead;

CardHead.propTypes = {
	name: PropTypes.string.isRequired,
	star: PropTypes.number.isRequired,
};
