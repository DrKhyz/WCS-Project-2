import React, { Component } from 'react';
import { Route, BrowserRouter, Switch, NavLink } from 'react-router-dom';
import RandomCombat from './components/RandomCombat.jsx';
import Main from './components/Main.jsx';
import './App.css';

class Router extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<BrowserRouter>
				<div>
					<Switch>
						<Route path='/random' component={RandomCombat} />
						<Route path='/' exact component={Main} />
					</Switch>
				</div>
			</BrowserRouter>
		);
	}
}

export default Router;
