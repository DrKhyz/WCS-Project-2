import React, { Component } from 'react';
import { Row, Col, Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import CardHero from './CardHero/CardHero';
import Loading from './Loading.jsx';

class RandomCombat extends Component {
	state = {
		search: '',
		hero0: { loading: true }
	};

	handleChange = e => {
		this.setState({ search: e.target.value });
	};

	getHerosData = e => {
		fetch(`https://www.superheroapi.com/api.php/10219454314208202/search/${this.state.search}`)
			.then(res => res.json())
			.then(data => data.results.map((h, i) => this.setState({ ['hero' + i]: h, loading: false })));
		e.preventDefault();
	};

	loadingHeroes = hero => {
		return hero.loading ? (
			<Loading />
		) : (
			<div className='animate'>
				<CardHero props={hero} />
			</div>
		);
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

				<Row>
					<Col xs={{ offset: 4, size: 4 }}>{this.loadingHeroes(this.state.hero0)}</Col>
				</Row>
			</div>
		);
	}
}

export default RandomCombat;
