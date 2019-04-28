import React, { useState, useEffect } from 'react';
import { Row, Col, Button } from 'reactstrap';
import CardHero from './CardHero/CardHero';
import getDatasFromApi from '../functions/getDatasFromApi';
import handleCombat from '../functions/handleCombat';
import Loading from './Loading.jsx';
import BackToMain from './BackToMain.jsx';

const RandomCombat = () => {
	const [hero1, setHero1] = useState({ loading: true });
	const [hero2, setHero2] = useState({ loading: true });
	const [hideButton, setHideButton] = useState(false);

	useEffect(() => {
		getDatasFromApi().then(hero => setHero1(hero));
		getDatasFromApi().then(hero => setHero2(hero));
	}, []);

	const winnerName = () => {
		return hero1.powerstats.life ? hero1.name : hero2.name;
	};

	const handleClickSelect = () => {
		setHideButton(false);
		setHero1({ loading: true });
		setHero2({ loading: true });
		getDatasFromApi().then(hero => setHero1(hero));
		getDatasFromApi().then(hero => setHero2(hero));
	};

	const handleClickCombat = () => {
		setHideButton(true);

		while (hero1.powerstats.life !== 0 && hero2.powerstats.life !== 0) {
			let newStats = handleCombat({ hero1, hero2 });
			setHero1(newStats.hero1);
			setHero2(newStats.hero2);
		}
	};

	const loadingHeroes = hero => {
		return hero.loading ? <Loading /> : <CardHero props={hero} />;
	};

	const hideCenter = () => {
		if (hideButton) {
			return (
				<div className='winner'>
					<p>Winner is :</p>
					<p>{winnerName()}</p>
					<Button onClick={handleClickSelect} className='newcombat-button' color='secondary'>
						New Combat
					</Button>
				</div>
			);
		} else {
			return (
				<div>
					{hero1.loading || hero2.loading ? (
						<div>
							<Button className='random-button' color='secondary'>
								Retriving Datas
							</Button>
							<div className='gap'> </div>
						</div>
					) : (
						<div>
							<Button onClick={handleClickSelect} className='random-button' color='secondary'>
								Randomize Hero
							</Button>
							<img
								className='vs-img animate'
								src='http://www.sclance.com/pngs/vs-png/vs_png_1474185.png'
								alt='logo vs'
							/>
							<Button onClick={handleClickCombat} className='fight-button' color='danger'>
								FIGHT
							</Button>
						</div>
					)}
				</div>
			);
		}
	};

	return (
		<div style={{ marginTop: '1%', width: '96%', marginLeft: '2%' }}>
			<Row>
				<BackToMain />
			</Row>
			<Row className=' centerBand' style={{ marginTop: '5%' }}>
				<Col xs='4'>
					<div>{loadingHeroes(hero1)}</div>
				</Col>
				<Col xs='4'>{hideCenter()}</Col>
				<Col xs='4'>
					<div>{loadingHeroes(hero2)}</div>
				</Col>
			</Row>
		</div>
	);
};

export default RandomCombat;
