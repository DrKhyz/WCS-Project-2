import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import './App.css';
import CardHero from './components/CardHero/CardHero';
import FightButton from './components/FightButton/FightButton';
import RandomButton from './components/RandomButton/RandomButton';
import { Button } from 'reactstrap';
import './components/RandomButton/RandomButton.css';
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			id: '',
			name: '',
			powerstats: {
				intelligence: '',
				strength: '',
				speed: '',
				durability: '',
				power: '',
				combat: ''
			},
			biography: {
				fullname: '',
				alignment: ''
			},
			appearance: '',
			appearance: {
				gender: '',
				race: '',
				height: '',
				weight: ''
			},
			image: ''
		};
	}

	getHero(rand) {
		let randomNumber = Math.floor(Math.random() * rand) + 1;
		fetch(`https://www.superheroapi.com/api.php/10219454314208202/${randomNumber}`)
			.then(res => res.json())
			.then(data => {
				this.setState({
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
				});
			});
	}

	componentDidMount() {
		this.getHero(450);
	}

	handleClick = () => {
		this.getHero(450);
	};

	render() {
		const hero = {
			response: 'success',
			id: '1',
			name: 'A-Bomb',
			powerstats: { intelligence: '38', strength: '100', speed: '17', durability: '80', power: '24', combat: '64' },
			biography: {
				'full-name': 'Richard Milhouse Jones',
				'alter-egos': 'No alter egos found.',
				aliases: ['Rick Jones'],
				'place-of-birth': 'Scarsdale, Arizona',
				'first-appearance': 'Hulk Vol 2 #2 (April, 2008) (as A-Bomb)',
				publisher: 'Marvel Comics',
				alignment: 'good'
			},
			appearance: {
				gender: 'Male',
				race: 'Human',
				height: ["6'8", '203 cm'],
				weight: ['980 lb', '441 kg'],
				'eye-color': 'Yellow',
				'hair-color': 'No Hair'
			},
			work: { occupation: 'Musician, adventurer, author; formerly talk show host', base: '-' },
			connections: {
				'group-affiliation':
					'Hulk Family; Excelsior (sponsor), Avengers (honorary member); formerly partner of the Hulk, Captain America and Captain Marvel; Teen Brigade; ally of Rom',
				relatives:
					'Marlo Chandler-Jones (wife); Polly (aunt); Mrs. Chandler (mother-in-law); Keith Chandler, Ray Chandler, three unidentified others (brothers-in-law); unidentified father (deceased); Jackie Shorr (alleged mother; unconfirmed)'
			},
			image: { url: 'https://www.superherodb.com/pictures2/portraits/10/100/10060.jpg' }
		};

		// console.log('this.state dans app.js');
		// console.log(this.state);
		return (
			<div>
				<Row className='no-gutters'>
					<Col xs='12' md='4'>
						<CardHero props={this.state} />
					</Col>

					<Col xs='12' md='4'>
						<button onClick={this.handleClick} className='random-button' color='secondary'>
							Randomize Hero
						</button>
						<img
							className='vs-img'
							src='https://png2.kisspng.com/sh/c3bb16bcd5fdf9991c1d23fe39929022/L0KzQYm4UMI2N6V6gJH0aYP2gLBuTgZqbJZ0RdlqbXX2PcX2mb1qdqVqhJ9sb4LoPbq6TflvfJZxRdV4cnWweYa0UsUufqQyiNDwLUXldIO3hvQ3bJJrSKk5Lkm2QIWCUckzOWY5SKYEM0K6QImCVsgveJ9s/kisspng-video-games-toy-intel-core-i3-intel-core-i5-25-vs-png-5bd20fd6daf070.9304919215404932708968.png'
							alt='logo vs'
						/>
						<FightButton />
					</Col>
					<Col xs='12' md='4'>
						<CardHero props={this.state} />
					</Col>
				</Row>
			</div>
		);
	}
}

export default App;
