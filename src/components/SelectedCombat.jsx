import React, { Component } from 'react';
import { Row, Col, Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class RandomCombat extends Component {
	state = {
		search: ''
	};

	handleChange = e => {
		this.setState({ search: e.target.value });
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
					<h1>{this.state.search}</h1>
				</Row>
				<Row>
					<input type='text' onChange={this.handleChange} value={this.state.search} name='search' id='search' />
				</Row>
			</div>
		);
	}
}

export default RandomCombat;
