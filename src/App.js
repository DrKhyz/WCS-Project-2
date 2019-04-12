import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import './App.css';
import CardHero from './components/CardHero/CardHero';
import { Button } from 'reactstrap';
import getHeroDataFromApi from './functions/getHeroDataFromApi';
import handleCombat from './functions/handleCombat';
import Loading from './components/Loading.jsx';

class App extends Component {
	state = {
		hero1: { loading: true },
		hero2: { loading: true },
		hideButton: false
	};

	componentDidMount() {
		getHeroDataFromApi().then(hero1 => this.setState({ hero1 }));
		getHeroDataFromApi().then(hero2 => this.setState({ hero2 }));
	}

	handleClickSelect = () => {
		this.setState({ hideButton: false });
		this.setState({ hero1: { loading: true }, hero2: { loading: true } });
		getHeroDataFromApi().then(hero1 => this.setState({ hero1 }));
		getHeroDataFromApi().then(hero2 => this.setState({ hero2 }));
	};

	handleClickCombat = () => {
		this.setState({ hideButton: true });
		while (this.state.hero1.powerstats[6] !== 0 && this.state.hero2.powerstats[6] !== 0) {
			let newStats = handleCombat(this.state);
			this.setState(newStats);
		}
	};

	winnerName = () => {
		if (this.state.hero1.powerstats[6] === 0) {
			return this.state.hero2.name;
		}
		if (this.state.hero2.powerstats[6] === 0) {
			return this.state.hero1.name;
		}
	};

	hideButton = () => {
		if (this.state.hideButton) {
			return (
				<div className='winner'>
					<p>Winner is :</p>
					<p>{this.winnerName()}</p>
					<Button onClick={this.handleClickSelect} className='newcombat-button' color='secondary'>
						New Combat
					</Button>
				</div>
			);
		} else {
			return (
				<div>
					{this.state.hero1.loading || this.state.hero2.loading ? (
						<div>
							<Button className='random-button' color='secondary'>
								Retriving Datas
							</Button>
							<div className='gap'> </div>
						</div>
					) : (
						<div>
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
						</div>
					)}
				</div>
			);
		}
	};

	loadingHeroes = hero => {
		return hero.loading ? <Loading /> : <CardHero props={hero} />;
	};

	render() {
		return (
			<div>
				<Row className='no-gutters centerBand'>
					<Col xs='4'>{this.loadingHeroes(this.state.hero1)}</Col>
					<Col xs='4'>{this.hideButton()}</Col>
					<Col xs='4'>{this.loadingHeroes(this.state.hero2)}</Col>
				</Row>
			</div>
		);
	}
}

export default App;
