import React from 'react';
import PropTypes from 'prop-types';
import { UncontrolledCollapse, Button } from 'reactstrap';

const ResumeCombatDamage = ({ historyArray }) => {
	const tableStyle = {
		textAlign: 'center',
		background: 'rgb(255,255,255,0.7)',
		padding: '10px',
		verticalAlign: 'middle',
		width: '80%',
		margin: '2% auto 0 auto',
		borderRadius: '2vw',
		color: 'black',
	};

	const styleSpan = {
		fontWeight: 'bold',
	};

	return (
		historyArray.length !== 0 && (
			<div style={tableStyle}>
				<Button color='primary' id='toggler' style={{ marginBottom: '1rem' }}>
					See Dealed Damages
				</Button>
				<UncontrolledCollapse toggler='#toggler'>
					{historyArray
						.reverse()
						.map((logs, i) => (
							<div key={i} style={{ fontSize: '1vw' }}>
								{logs[3] ? (
									<div>
										<p>
											<span style={styleSpan}>{logs[1]}</span> have dodge <span style={styleSpan}>{logs[0]}</span>{' '}
											Attack
										</p>
									</div>
								) : (
									<div style={{ width: '100%' }}>
										<p>
											<span style={styleSpan}>{logs[0]}</span> deal {logs[2]} {logs[4] ? 'Critical ' : ''}
											damage to <span style={styleSpan}>{logs[1]}</span>
										</p>
									</div>
								)}
							</div>
						))
						.slice(0, 30)}
				</UncontrolledCollapse>
			</div>
		)
	);
};

ResumeCombatDamage.propTypes = {
	historyArray: PropTypes.array.isRequired,
};

export default ResumeCombatDamage;
