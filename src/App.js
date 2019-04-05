import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import './App.css';
import CardHero from './components/CardHero/CardHero';
import FightButton from './components/FightButton/FightButton';
import { Button } from 'reactstrap';
import './components/RandomButton/RandomButton.css';
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hero1: {
				id: '1',
				name: 'hp1',
				powerstats: ['10', '10', '10', '10', '10', '10'],
				biography: ['hp1', 'g'],
				appearance: ['m', 'm', '10', '10'],
				image: 'https://www.superherodb.com/pictures2/portraits/10/100/10831.jpg'
			},
			hero2: {
				id: '2',
				name: 'hp2',
				powerstats: ['50', '50', '50', '50', '50', '50'],
				biography: ['hp2', 'f'],
				appearance: ['f', 'f', '50', '50'],
				image: 'https://www.superherodb.com/pictures2/portraits/10/100/1504.jpg'
			}
		};
	}

	getHero(rand) {
		let randomNumber = Math.floor(Math.random() * rand) + 1;
		fetch(`https://www.superheroapi.com/api.php/10219454314208202/${randomNumber}`)
			.then(res => res.json())
			.then(data => {
				this.setState({
					hero1: {
						id: data.id,
						name: data.name,
						powerstats: [
							data.powerstats.intelligence,
							data.powerstats.strength,
							data.powerstats.speed,
							data.powerstats.durability,
							data.powerstats.power,
							data.powerstats.combat
						],
						biography: [data.biography['full-name'], data.biography.publisher, data.biography.alignment],
						appearance: [
							data.appearance.gender,
							data.appearance.race,
							data.appearance.height[1],
							data.appearance.weight[1]
						],
						image: data.image.url
					}
				});
			});
		randomNumber = Math.floor(Math.random() * rand) + 1;
		fetch(`https://www.superheroapi.com/api.php/10219454314208202/${randomNumber}`)
			.then(res => res.json())
			.then(data => {
				this.setState({
					hero2: {
						id: data.id,
						name: data.name,
						powerstats: [
							data.powerstats.intelligence,
							data.powerstats.strength,
							data.powerstats.speed,
							data.powerstats.durability,
							data.powerstats.power,
							data.powerstats.combat
						],
						biography: [data.biography['full-name'], data.biography.publisher, data.biography.alignment],
						appearance: [
							data.appearance.gender,
							data.appearance.race,
							data.appearance.height[1],
							data.appearance.weight[1]
						],
						image: data.image.url
					}
				});
			});
	}

	componentWillMount() {
		this.getHero(731);
	}

	handleClick = () => {
		this.getHero(731);
	};

	render() {
		return (
			<div>
				<Row className='no-gutters'>
					<Col xs='12' md='4'>
						<CardHero props={this.state.hero1} />
					</Col>
					<Col xs='12' md='4'>
						<Button onClick={this.handleClick} className='random-button' color='secondary'>
							Randomize Hero
						</Button>
						<img
							className='vs-img'
							src='https://png2.kisspng.com/sh/c3bb16bcd5fdf9991c1d23fe39929022/L0KzQYm4UMI2N6V6gJH0aYP2gLBuTgZqbJZ0RdlqbXX2PcX2mb1qdqVqhJ9sb4LoPbq6TflvfJZxRdV4cnWweYa0UsUufqQyiNDwLUXldIO3hvQ3bJJrSKk5Lkm2QIWCUckzOWY5SKYEM0K6QImCVsgveJ9s/kisspng-video-games-toy-intel-core-i3-intel-core-i5-25-vs-png-5bd20fd6daf070.9304919215404932708968.png'
							alt='logo vs'
						/>
						<FightButton />
					</Col>
					<Col xs='12' md='4'>
						<CardHero props={this.state.hero2} />
					</Col>
				</Row>
			</div>
		);
	}
}

export default App;
