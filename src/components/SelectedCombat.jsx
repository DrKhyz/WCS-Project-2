import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import CardHero from './CardHero/CardHero';
import Loading from './Loading.jsx';
import axios from 'axios';

class RandomCombat extends Component {
	state = {
		search: '',
		heroStore: [],
		isLoading: true
	};

	handleChange = e => {
		this.setState({ search: e.target.value });
	};

	normalizePowerstats = stats => (stats !== 'null' ? parseInt(stats) : Math.floor(Math.random() * 40) + 20);
	normalizeInformations = data =>
		data !== 'null' && data !== '-' && data !== '- lb' && data !== '' ? data : 'Unknown';
	getHerosData = e => {
		this.setState({ heroStore: [] });
		axios
			.get(`https://www.superheroapi.com/api.php/10219454314208202/search/${this.state.search}`)
			.then(res =>
				res.data.results.map((data, i) => {
					let id = data.id;
					let name = data.name;

					let intelligence = this.normalizePowerstats(data.powerstats.intelligence);
					let strength = this.normalizePowerstats(data.powerstats.strength);
					let speed = this.normalizePowerstats(data.powerstats.speed);
					let durability = this.normalizePowerstats(data.powerstats.durability);
					let power = this.normalizePowerstats(data.powerstats.power);
					let combat = this.normalizePowerstats(data.powerstats.combat);
					let life = this.normalizePowerstats(data.powerstats.durability);

					let fullname = this.normalizeInformations(data.biography['full-name']);
					let publisher = this.normalizeInformations(data.biography.publisher);
					let alignment = this.normalizeInformations(data.biography.alignment);

					let gender = this.normalizeInformations(data.appearance.gender);
					let race = this.normalizeInformations(data.appearance.race);
					let height = this.normalizeInformations(data.appearance.height[0]);
					let weight = this.normalizeInformations(data.appearance.weight[0]);

					let image = this.normalizeInformations(data.image);

					let star = (intelligence + strength + speed + durability + power + combat + durability) / 100;

					return this.setState(prevState => ({
						heroStore: [
							...prevState.heroStore,
							{
								id: id,
								name: name,
								powerstats: {
									intelligence: intelligence,
									strength: strength,
									speed: speed,
									durability: durability,
									power: power,
									combat: combat,
									life: life
								},
								biography: { fullname: fullname, publisher: publisher, alignment: alignment },
								appearance: { gender: gender, race: race, height: height, weight: weight },
								image: image,
								star
							}
						]
					}));
				})
			)
			.catch(error => {
				console.error(error);
			});

		e.preventDefault();
	};

	loadingHeroes = hero => {
		return hero.loading ? <Loading /> : <div className='animate' />;
	};

	render() {
		return (
			<div style={{ marginTop: '5%', width: '96%', marginLeft: '2%' }}>
				<Row>
					<NavLink className='btn outline btn-primary' activeClassName='btn-danger' exact to='/'>
						Back to Main
					</NavLink>
				</Row>
				<Row>
					<form onSubmit={this.getHerosData}>
						<label>Name:{this.state.search}</label>
						<br />
						<input type='text' onChange={this.handleChange} value={this.state.search} name='search' id='search' />
						<input type='submit' value='Submit' />
					</form>
				</Row>

				<Row className='no-gutters'>
					{this.state.heroStore.map(x => (
						<Col xs='4'>
							<CardHero props={x} />
						</Col>
					))}
				</Row>
			</div>
		);
	}
}

export default RandomCombat;
