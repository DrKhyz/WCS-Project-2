import React, { Component } from 'react';
import { Row, Col, Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import CardHero from './CardHero/CardHero';
import getHeroDataFromApi from '../functions/getHeroDataFromApi';
import handleCombat from '../functions/handleCombat';
import Loading from './Loading.jsx';

class RandomCombat extends Component {
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
		while (this.state.hero1.powerstats.life !== 0 && this.state.hero2.powerstats.life !== 0) {
			let newStats = handleCombat(this.state);
			this.setState(newStats);
		}
	};

	winnerName = () => {
		if (!this.state.hero1.powerstats.life) {
			return this.state.hero2.name;
		}
		if (!this.state.hero2.powerstats.life) {
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
								className='vs-img animate'
								src='http://www.sclance.com/pngs/vs-png/vs_png_1474185.png'
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
			<div style={{ marginTop: '5%', width: '96%', marginLeft: '2%' }}>
				<Row>
					<NavLink className='btn outline btn-primary' activeClassName='btn-danger' exact to='/'>
						Back to Main
					</NavLink>
				</Row>
				<Row className='no-gutters centerBand' style={{ marginTop: '5%' }}>
					<Col xs='4'>{this.loadingHeroes(this.state.hero1)}</Col>
					<Col xs='4'>{this.hideButton()}</Col>
					<Col xs='4'>{this.loadingHeroes(this.state.hero2)}</Col>
				</Row>
			</div>
		);
	}
}

export default RandomCombat;
