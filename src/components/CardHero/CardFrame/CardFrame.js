import React, { Component } from 'react';
import './CardFrame.css';

class CardFrame extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div className='card-frame'>
				<table className='frame-table'>
					<tr>
						<td>Int</td>
						<td>str</td>
						<td>spd</td>
						<td>dur</td>
						<td>pw</td>
						<td>cmb</td>
					</tr>
					<tr>
						<td>100</td>
						<td>26</td>
						<td>27</td>
						<td>50</td>
						<td>47</td>
						<td>100</td>
					</tr>
				</table>
				<div className='frame-biography'>
					<div>Full-name: Bruce Wayne</div>
					<div>Alignement : Good</div>
					<div>Height : 188cm - Weigth: 95Kg</div>
					<div>Univers : DC Comics</div>
				</div>
			</div>
		);
	}
}

export default CardFrame;
