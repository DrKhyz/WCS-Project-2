import React, { Component } from 'react';
import { Row, Col, Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import CardHero from './CardHero/CardHero';
import getDatasFromApi from '../functions/getDatasFromApi';
import handleCombat from '../functions/handleCombat';
import Loading from './Loading.jsx';

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
	};

	componentDidMount() {
		getDatasFromApi().then(hero2 => this.setState({ hero2 }));
	}

	combatLoop = () => {
		if (
			this.state.hero1.powerstats.life !== 0 &&
			this.state.hero2.powerstats.life !== 0 &&
			!this.state.hero2.isLoading
		) {
			let newStats = handleCombat(this.state);
			this.setState(newStats);
			setTimeout(this.combatLoop, 1000);
		} else {
			this.setState({ inCombat: false });
			this.state.hero2.powerstats.life <= 0 && this.setState({ winStrike: this.state.winStrike + 1, inCombat: false });

			this.state.hero1.powerstats.life <= 0 && this.setState({ asLost: true, inCombat: false });
		}
	};

	handleClickCombat = () => {
		this.setState({ inCombat: true });
		this.combatLoop();
	};

	callHeroList = soughtWord => {
		this.setState({ lastSearch: this.state.search, heroStoreLoading: true });
		getDatasFromApi(soughtWord).then(heroStore => this.setState(heroStore));
	};

	selectNextOppenent = () => {
		let NewLife = this.state.hero1.powerstats.life + this.state.hero1.powerstats.durability / 5;
		if (NewLife >= this.state.hero1.powerstats.durability) {
			NewLife = this.state.hero1.powerstats.durability;
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
		});
		getDatasFromApi().then(hero2 => this.setState({ hero2 }));
	};

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
		});
		getDatasFromApi().then(hero2 => this.setState({ hero2 }));
	};

	render() {
		let isShaking = '';
		if (this.state.inCombat) {
			isShaking = 'shaking';
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
					this.state.lastSearch && (
						<Button
							className='m-1'
							name='Reset hero'
							color='info'
							onClick={() =>
								this.setState({
									hero1: undefined,
									heroStore: [],
									search: '',
									asLost: false,
									lastSearch: '',
									winStrike: 0,
								})
							}>
							{this.state.hero1 ? 'Change hero' : 'Reset Search'}
						</Button>
					)
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
								<div className={isShaking}>
									{this.state.hero2.loading ? <Loading /> : <CardHero props={this.state.hero2} />}
								</div>
							</Col>
						</Row>
					</div>
				) : (
					<div style={{ marginTop: '1%', width: '96%', marginLeft: '2%', textAlign: 'center' }}>
						{this.state.heroStoreLoading ? (
							<h1>Searching</h1>
						) : this.state.lastSearch ? (
							this.state.heroStore.length !== 0 ? (
								<div>
									<h1>Select your hero</h1>
									<h3>
										There is {this.state.heroStore.length} match for your search ({this.state.lastSearch})
									</h3>
								</div>
							) : (
								<h1>There is no match for your search ({this.state.lastSearch})</h1>
							)
						) : (
							<h1>Search your hero</h1>
						)}

						<form
							onSubmit={e => {
								e.preventDefault();
								return this.callHeroList(this.state.search);
							}}>
							<input
								style={{ borderRadius: '5px', border: 'blue 1px solid' }}
								type='text'
								onChange={e => this.setState({ search: e.target.value })}
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
										this.setState({
											hero1: x,
											hero2: { loading: true },
										});
										getDatasFromApi().then(hero2 => this.setState({ hero2 }));
									}}>
									<CardHero props={x} />
								</Col>
							))}
						</Row>
					</div>
				)}
			</div>
		);
	}
}

export default SelectedCombat;
