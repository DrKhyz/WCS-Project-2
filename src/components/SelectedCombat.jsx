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
		winStrike: 0,
		lastCombats: [],
		search: '',
		heroStore: [],
		asLost: false,
		isLoading: true,
		inCombat: false,
		heroStoreLoading: false,
	}

	componentDidMount() {
		getHeroDataFromApi().then(hero2 => this.setState({ hero2 }))
	}

	combatLoop = () => {
		if (
			this.state.hero1.powerstats.life !== 0 &&
			this.state.hero2.powerstats.life !== 0 &&
			!this.state.hero2.isLoading
		) {
			let newStats = handleCombat(this.state)
			this.setState(newStats)
			setTimeout(this.combatLoop, 1000)
		} else {
			this.setState({ inCombat: false })
			if (this.state.hero2.powerstats.life <= 0) {
				this.setState({ winStrike: this.state.winStrike + 1, inCombat: false })
			}
			if (this.state.hero1.powerstats.life <= 0) {
				this.setState({ asLost: true, inCombat: false })
			}
		}
	}

	handleClickCombat = () => {
		this.setState({ inCombat: true })
		this.combatLoop()
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
		this.setState({ heroStore: [], lastSearch: this.state.search, heroStoreLoading: true })
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
			.then(() => this.setState({ heroStoreLoading: false }))
		e.preventDefault()
	}

	loadingHeroes = hero => {
		return hero.loading ? <Loading /> : <CardHero props={hero} />
	}

	selectNextOppenent = () => {
		let NewLife = this.state.hero1.powerstats.life + this.state.hero1.powerstats.durability / 5
		if (NewLife >= this.state.hero1.powerstats.durability) {
			NewLife = this.state.hero1.powerstats.durability
		}

		this.setState({
			hero1: {
				...this.state.hero1,
				powerstats: {
					...this.state.hero1.powerstats,
					life: NewLife,
				},
			},
			hero2: { loading: true },
			inCombat: false,
		})
		getHeroDataFromApi().then(hero2 => this.setState({ hero2 }))
	}

	resetCombat = () => {
		this.setState({
			hero1: {
				...this.state.hero1,
				powerstats: {
					...this.state.hero1.powerstats,
					life: this.state.hero1.powerstats.durability,
				},
			},
			winStrike: 0,
			hero2: { loading: true },
			asLost: false,
			inCombat: false,
		})
		getHeroDataFromApi().then(hero2 => this.setState({ hero2 }))
	}

	render() {
		let isShaking = ''
		if (this.state.inCombat) {
			isShaking = 'shaking'
		}

		return (
			<div>
				<NavLink className='btn btn-primary m-1 ' activeClassName='btn-danger' exact to='/'>
					Back to Main
				</NavLink>

				{this.state.inCombat ? (
					<Button className='m-1' color='info'>
						Fight in Progress
					</Button>
				) : (
					<Button
						className='m-1'
						name='Reset hero'
						color='info'
						onClick={() =>
							this.setState({ hero1: undefined, heroStore: [], search: '', asLost: false })
						}>
						Change hero
					</Button>
				)}
				{this.state.hero1 ? (
					<div style={{ marginTop: '1%', width: '96%', marginLeft: '2%' }}>
						<Row>
							<Col xs='4'>
								<div className={isShaking}>
									<CardHero props={this.state.hero1} />
								</div>
							</Col>
							<Col xs='4'>
								{this.state.hero2.loading ? (
									<Loading />
								) : this.state.asLost ? (
									<div>
										<Button className='newCampaign-button' onClick={this.resetCombat}>
											New Campaign
										</Button>
										<p className='text-center mt-5'>You won {this.state.winStrike} match</p>
									</div>
								) : this.state.inCombat ? (
									''
								) : this.state.hero2.powerstats.life > 0 ? (
									<Button onClick={this.handleClickCombat} className='fight-button'>
										FIGHT
									</Button>
								) : (
									<Button onClick={this.selectNextOppenent} className='random-button'>
										Next Oppenent
									</Button>
								)}
							</Col>
							<Col xs='4'>
								<div className={isShaking}>{this.loadingHeroes(this.state.hero2)}</div>
							</Col>
						</Row>
					</div>
				) : (
					<div style={{ marginTop: '1%', width: '96%', marginLeft: '2%', textAlign: 'center' }}>
						{this.state.heroStoreLoading ? (
							<h1>Searching</h1>
						) : this.state.lastSearch ? (
							this.state.heroStore.length !== 0 ? (
								<h1>
									There is {this.state.heroStore.length} match for your search (
									{this.state.lastSearch})
								</h1>
							) : (
								<h1>There is no match for your search ({this.state.lastSearch})</h1>
							)
						) : (
							<h1>Search your hero</h1>
						)}

						<form onSubmit={this.getHerosData}>
							<input
								style={{ borderRadius: '5px', border: 'blue 1px solid' }}
								type='text'
								onChange={this.handleChange}
								value={this.state.search}
								name='search'
								id='search'
							/>
							<input
								style={{
									borderRadius: '5px',
									border: 'black 1px solid',
									color: 'red',
									background: 'blue',
									margin: 'auto',
								}}
								className='ml-1'
								type='submit'
								value='S'
							/>
						</form>
						<Row>
							{this.state.heroStore.map(x => (
								<Col
									key={x.id}
									xs='4'
									onClick={() => {
										this.setState({ hero1: x, hero2: { loading: true } })
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
