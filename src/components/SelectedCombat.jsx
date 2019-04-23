import React, { Component } from 'react'
import { Row, Col, Button } from 'reactstrap'
import { NavLink } from 'react-router-dom'
import CardHero from './CardHero/CardHero'
import getHeroDataFromApi from '../functions/getHeroDataFromApi'
import handleCombat from '../functions/handleCombat'
import Loading from './Loading.jsx'
import axios from 'axios'

class SelectedCombat extends Component {
	state = {
		search: '',
		heroStore: [],
		isLoading: true,
	}

	componentDidMount() {
		getHeroDataFromApi().then(hero2 => this.setState({ hero2 }))
	}

	handleClickCombat = () => {
		while (this.state.hero1.powerstats.life !== 0 && this.state.hero2.powerstats.life !== 0) {
			let newStats = handleCombat(this.state)
			this.setState(newStats)
		}
		if (this.state.hero2.powerstats.life === 0) {
			this.setState({ winner: this.state.hero1.name })
		}
		if (this.state.hero1.powerstats.life === 0) {
			this.setState({ winner: this.state.hero2.name })
		}
	}

	winnerName = () => {
		if (!this.state.hero1.powerstats.life) {
			return this.state.hero2.name
		}
		if (!this.state.hero2.powerstats.life) {
			return this.state.hero1.name
		}
	}

	handleChange = e => {
		this.setState({ search: e.target.value })
	}

	normalizePowerstats = stats =>
		stats !== 'null' ? parseInt(stats) : Math.floor(Math.random() * 40) + 20
	normalizeInformations = data =>
		data !== 'null' && data !== '0 cm' && data !== '0 kg' && data !== '' ? data : 'Unknown'
	getHerosData = e => {
		this.setState({ heroStore: [] })
		axios
			.get(`https://www.superheroapi.com/api.php/10219454314208202/search/${this.state.search}`)
			.then(res =>
				res.data.results.map((data, i) => {
					let id = this.normalizePowerstats(data.id)
					let name = this.normalizeInformations(data.name)

					let intelligence = this.normalizePowerstats(data.powerstats.intelligence)
					let strength = this.normalizePowerstats(data.powerstats.strength)
					let speed = this.normalizePowerstats(data.powerstats.speed)
					let durability = this.normalizePowerstats(data.powerstats.durability)
					let power = this.normalizePowerstats(data.powerstats.power)
					let combat = this.normalizePowerstats(data.powerstats.combat)

					let fullname = this.normalizeInformations(data.biography['full-name'])
					let publisher = this.normalizeInformations(data.biography.publisher)
					let alignment = this.normalizeInformations(data.biography.alignment)

					let gender = this.normalizeInformations(data.appearance.gender)
					let race = this.normalizeInformations(data.appearance.race)
					let height = this.normalizeInformations(data.appearance.height[1])
					let weight = this.normalizeInformations(data.appearance.weight[1])

					let image = this.normalizeInformations(data.image)

					let star =
						(intelligence + strength + speed + durability + power + combat + durability) / 100

					return this.setState(prevState => ({
						heroStore: [
							...prevState.heroStore,
							{
								id: id,
								name: name,
								powerstats: {
									intelligence,
									strength,
									speed,
									durability,
									power,
									combat,
									life: durability,
								},
								biography: {
									fullname: fullname,
									publisher: publisher,
									alignment: alignment,
								},
								appearance: {
									gender: gender,
									race: race,
									height: height,
									weight: weight,
								},
								image: image,
								star,
								loading: false,
							},
						],
					}))
				}),
			)
			.catch(error => console.log(error))
		e.preventDefault()
	}

	loadingHeroes = hero => {
		return hero.loading ? <Loading /> : <CardHero props={hero} />
	}

	handleClickSelect = () => {
		this.setState({ hero2: { loading: true } })
		this.setState({ winner: '' })
		this.setState({
			hero1: {
				...this.state.hero1,
				powerstats: {
					...this.state.hero1.powerstats,
					life: this.state.hero1.powerstats.durability,
				},
			},
		})
		getHeroDataFromApi().then(hero2 => this.setState({ hero2 }))
	}

	render() {
		return (
			<div>
				<NavLink className='btn btn-primary m-1 ' activeClassName='btn-danger' exact to='/'>
					Back to Main
				</NavLink>
				<button
					className='m-1'
					name='Reset hero'
					onClick={() => this.setState({ hero1: undefined, heroStore: [] })}>
					Change hero
				</button>
				{this.state.hero1 ? (
					<div style={{ marginTop: '1%', width: '96%', marginLeft: '2%' }}>
						<Row>
							<Col xs='4'>
								<CardHero props={this.state.hero1} />
							</Col>
							<Col xs='4'>
								<Button
									onClick={this.handleClickSelect}
									className='random-button'
									color='secondary'>
									Next Oppenent
								</Button>
								{this.state.hero2.loading ? (
									''
								) : this.state.winner ? (
									<p className='text-center mt-5'>{this.state.winner} win the match</p>
								) : (
									<Button onClick={this.handleClickCombat} className='fight-button' color='danger'>
										FIGHT
									</Button>
								)}
							</Col>
							<Col xs='4'>{this.loadingHeroes(this.state.hero2)}</Col>
						</Row>
					</div>
				) : (
					<div style={{ marginTop: '1%', width: '96%', marginLeft: '2%' }}>
						<form style={{ marginLeft: '40%' }} onSubmit={this.getHerosData}>
							<input
								type='text'
								onChange={this.handleChange}
								value={this.state.search}
								name='search'
								id='search'
							/>
							<input type='submit' value='Submit' />
						</form>
						<Row>
							{this.state.heroStore.map(x => (
								<Col
									key={x.id}
									xs='4'
									onClick={() => {
										this.setState({ hero1: x })
										this.setState({ hero2: { loading: true } })
										getHeroDataFromApi().then(hero2 => this.setState({ hero2 }))
									}}>
									<CardHero props={x} />
								</Col>
							))}
						</Row>
					</div>
				)}
			</div>
		)
	}
}

export default SelectedCombat
