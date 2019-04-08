import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import './App.css';
import CardHero from './components/CardHero/CardHero';
import { Button } from 'reactstrap';
class App extends Component {
	constructor(props) {
		super(props);
		// Declaration de l'etat vide pour les 2 heros
		this.state = {
			hero1: {
				id: '',
				name: '',
				powerstats: ['', '', '', '', '', '', ''],
				biography: ['', ''],
				appearance: ['', '', '', ''],
				image: '',
				star: ''
			},
			hero2: {
				id: '',
				name: '',
				powerstats: ['', '', '', '', '', '', ''],
				biography: ['', ''],
				appearance: ['', '', '', ''],
				image: '',
				star: ''
			}
		};
	}

	getHero(hero) {
		// fonction api qui recupere les donnees depuis l'api et hydrate l'etat des 2 heros
		let randomNumber = Math.floor(Math.random() * 730) + 1;
		fetch(`https://www.superheroapi.com/api.php/10219454314208202/${randomNumber}`)
			.then(res => res.json())
			.then(data => {
				let intelligence =
					data.powerstats.intelligence !== 'null'
						? parseInt(data.powerstats.intelligence)
						: Math.floor(Math.random() * 40) + 20;
				let strength =
					data.powerstats.strength !== 'null'
						? parseInt(data.powerstats.strength)
						: Math.floor(Math.random() * 40) + 20;
				let speed =
					data.powerstats.speed !== 'null' ? parseInt(data.powerstats.speed) : Math.floor(Math.random() * 40) + 20;
				let durability =
					data.powerstats.durability !== 'null'
						? parseInt(data.powerstats.durability)
						: Math.floor(Math.random() * 40) + 20;
				let power =
					data.powerstats.power !== 'null' ? parseInt(data.powerstats.power) : Math.floor(Math.random() * 40) + 20;
				let combat =
					data.powerstats.combat !== 'null' ? parseInt(data.powerstats.combat) : Math.floor(Math.random() * 40) + 20;
				let star = Math.floor(intelligence + strength + speed + durability + power + combat);
				let fullname = data.biography['full-name'] ? data.biography['full-name'] : 'Unknown';
				let alignement = data.biography.alignment !== '-' ? data.biography.alignment : 'Unknown';
				let gender = data.appearance.gender !== 'null' ? data.appearance.gender : 'Unknown';
				let race = data.appearance.race !== 'null' ? data.appearance.race : 'Unknown';
				let height = data.appearance.height[0] !== '-' ? data.appearance.height[1] : 'Unknown';
				let weight = data.appearance.weight[0] !== '- lb' ? data.appearance.weight[1] : 'Unknown';
				this.setState({
					[hero]: {
						id: data.id,
						name: data.name,
						powerstats: [intelligence, strength, speed, durability, power, combat, durability],
						biography: [fullname, data.biography.publisher, alignement],
						appearance: [gender, race, height, weight],
						image: data.image.url,
						star
					}
				});
			});
	}

	componentDidMount() {
		this.getHero('hero1');
		this.getHero('hero2');
	}
	handleClickSelect = () => {
		this.getHero('hero1');
		this.getHero('hero2');
	};

	// Fonction algorithmique qui gere les données liez aux combats (en cours de dev)
	handleClickCombat = () => {
		//ICI POUR LES CALCULS
		this.setState({
			hero1: {
				id: this.state.hero1.id,
				name: this.state.hero1.name,
				powerstats: [
					this.state.hero1.powerstats[0], //int
					this.state.hero1.powerstats[1], //str
					this.state.hero1.powerstats[2], //spd
					this.state.hero1.powerstats[3], //end
					this.state.hero1.powerstats[4], //pow
					this.state.hero1.powerstats[5], //cbt
					this.state.hero1.powerstats[6] - this.state.hero2.powerstats[1] / 10 //life point
				],
				biography: [this.state.hero1.biography[0], this.state.hero1.biography[1], this.state.hero1.biography[2]],
				appearance: [
					this.state.hero1.appearance[0], //gender
					this.state.hero1.appearance[1], //race
					this.state.hero1.appearance[2], //height
					this.state.hero1.appearance[3] //weight
				],
				image: this.state.hero1.image //image
			},
			hero2: {
				id: this.state.hero2.id,
				name: this.state.hero2.name,
				powerstats: [
					this.state.hero2.powerstats[0], //int
					this.state.hero2.powerstats[1], //str
					this.state.hero2.powerstats[2], //spd
					this.state.hero2.powerstats[3], //end
					this.state.hero2.powerstats[4], //pow
					this.state.hero2.powerstats[5], //cbt
					this.state.hero2.powerstats[6] - this.state.hero1.powerstats[1] / 10 //life point
				],
				biography: [this.state.hero2.biography[0], this.state.hero2.biography[1], this.state.hero2.biography[2]],
				appearance: [
					this.state.hero2.appearance[0], //gender
					this.state.hero2.appearance[1], //race
					this.state.hero2.appearance[2], //height
					this.state.hero2.appearance[3] //weight
				],
				image: this.state.hero2.image //image
			}
		});
	};

	//rendu des 2 cartes heros, des 2 boutons et du logo vs
	render() {
		return (
			<div>
				<Row className='no-gutters'>
					<Col xs='12' md='4'>
						<CardHero props={this.state.hero1} />
					</Col>
					<Col xs='12' md='4'>
						<Button onClick={this.handleClickSelect} className='random-button' color='secondary'>
							Randomize Hero
						</Button>
						<img
							className='vs-img'
							src='https://png2.kisspng.com/sh/c3bb16bcd5fdf9991c1d23fe39929022/L0KzQYm4UMI2N6V6gJH0aYP2gLBuTgZqbJZ0RdlqbXX2PcX2mb1qdqVqhJ9sb4LoPbq6TflvfJZxRdV4cnWweYa0UsUufqQyiNDwLUXldIO3hvQ3bJJrSKk5Lkm2QIWCUckzOWY5SKYEM0K6QImCVsgveJ9s/kisspng-video-games-toy-intel-core-i3-intel-core-i5-25-vs-png-5bd20fd6daf070.9304919215404932708968.png'
							alt='logo vs'
						/>
						<Button onClick={this.handleClickCombat} className='fight-button' color='danger'>
							FIGHT
						</Button>
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
