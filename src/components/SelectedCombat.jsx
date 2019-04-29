import React, { useState, useEffect } from 'react';
import { Row, Col, Button } from 'reactstrap';
import CardHero from './CardHero/CardHero';
import getDatasFromApi from '../functions/getDatasFromApi';
import handleCombat from '../functions/handleCombat';
import BackToMain from './BackToMain.jsx';
import Loading from './Loading.jsx';

const SelectedCombat = () => {
	const [hero1, setHero1] = useState(null);
	const [hero2, setHero2] = useState(null);
	const [winStrike, setWinStrike] = useState(0);
	const [search, setSearch] = useState('');
	const [lastSearch, setLastSearch] = useState('');
	const [heroStore, setHeroStore] = useState([]);
	const [asLost, setAsLost] = useState(false);
	const [inCombat, setInCombat] = useState(false);
	const [heroStoreLoading, setHeroStoreLoading] = useState(false);
	const [hero1DealingDamage, setHero1DealingDamage] = useState(false);
	const [hero1ReceivingDamage, setHero1ReceivingDamage] = useState(false);
	const [hero2DealingDamage, setHero2DealingDamage] = useState(false);
	const [hero2ReceivingDamage, setHero2ReceivingDamage] = useState(false);
	let firstAttack;
	useEffect(() => {
		getDatasFromApi().then(hero2data => setHero2(hero2data));
	}, []);

	const handleClickCombat = () => {
		if (hero1.powerstats.speed > hero2.powerstats.speed) {
			firstAttack = true;
		} else {
			firstAttack = false;
		}
		setInCombat(true);

		combatLoop();
	};

	const combatLoop = () => {
		if (hero1.powerstats.life !== 0 && hero2.powerstats.life !== 0 && !hero2.loading) {
			let newStats = handleCombat({ hero1, hero2, firstAttack });
			setHero1(newStats.hero1);
			setHero2(newStats.hero2);

			setHero1DealingDamage(newStats.hero1DealingDamage);
			setHero1ReceivingDamage(newStats.hero1ReceivingDamage);
			setHero2DealingDamage(newStats.hero2DealingDamage);
			setHero2ReceivingDamage(newStats.hero2ReceivingDamage);
			firstAttack = newStats.firstAttack;

			setTimeout(combatLoop, 1000);
		} else {
			setInCombat(false);
			if (hero2.powerstats.life <= 0) {
				setWinStrike(winStrike + 1);
				setHero1DealingDamage(false);
				setHero2DealingDamage(false);
			}
			if (hero1.powerstats.life <= 0) {
				setAsLost(true);
				setHero1DealingDamage(false);
				setHero2DealingDamage(false);
			}
		}
	};

	const callHeroList = soughtWord => {
		setLastSearch(soughtWord);
		setHeroStoreLoading(true);
		getDatasFromApi(soughtWord)
			.then(heroStoreDatas => setHeroStore(heroStoreDatas))
			.then(() => setHeroStoreLoading(false));
	};

	const selectNextOppenent = () => {
		let NewLife = hero1.powerstats.life + hero1.powerstats.durability / 5;
		if (NewLife >= hero1.powerstats.durability) {
			NewLife = hero1.powerstats.durability;
		}

		setHero1({ ...hero1, powerstats: { ...hero1.powerstats, life: NewLife } });
		setHero2({ ...hero2, loading: true });

		setInCombat(false);
		getDatasFromApi().then(hero2data => setHero2(hero2data));
	};

	const resetCombat = () => {
		setHero1({ ...hero1, powerstats: { ...hero1.powerstats, life: hero1.powerstats.durability } });
		setWinStrike(0);
		setHero2({ ...hero2, loading: true });
		setAsLost(false);
		setInCombat(false);
		getDatasFromApi().then(hero2data => setHero2(hero2data));
	};

	let hero1Anime = '';
	let hero2Anime = '';
	if (hero1DealingDamage && hero2ReceivingDamage) {
		hero2Anime += 'shaking';
		hero1Anime += 'h1Attacking';
	}
	if (hero2DealingDamage && hero1ReceivingDamage) {
		hero1Anime += 'shaking';
		hero2Anime += 'h2Attacking';
	}

	return (
		<div style={{ width: '96%', marginLeft: '0' }}>
			<BackToMain />

			{inCombat ? (
				<Button className='m-1' color='info'>
					Fight in Progress
				</Button>
			) : (
				lastSearch && (
					<Button
						className='m-1'
						name='Reset hero'
						color='info'
						onClick={() => {
							setHero1(undefined);
							setHeroStore([]);
							setSearch('');
							setAsLost(false);
							setLastSearch('');
							setWinStrike(0);
						}}>
						{hero1 ? 'Change hero' : 'Reset Search'}
					</Button>
				)
			)}
			{hero1 ? (
				<div style={{ marginTop: '1%', width: '96%', marginLeft: '2%' }}>
					<Row>
						<Col xs='4'>
							<div className={hero1Anime}>
								<CardHero props={hero1} />
							</div>
						</Col>
						<Col xs='4'>
							{hero2.loading ? (
								<Loading />
							) : asLost ? (
								<div>
									<Button className='newCampaign-button' onClick={() => resetCombat()}>
										New Campaign
									</Button>
									<p className='text-center mt-5'>You won {winStrike} match</p>
								</div>
							) : inCombat ? (
								''
							) : hero2.powerstats.life > 0 ? (
								<Button onClick={() => handleClickCombat()} className='fight-button'>
									FIGHT
								</Button>
							) : (
								<Button onClick={() => selectNextOppenent()} className='random-button'>
									Next Oppenent
								</Button>
							)}
						</Col>
						<Col xs='4'>
							<div className={hero2Anime}>{hero2.loading ? <Loading /> : <CardHero props={hero2} />}</div>
						</Col>
					</Row>
				</div>
			) : (
				<div style={{ marginTop: '1%', width: '96%', marginLeft: '2%', textAlign: 'center' }}>
					{heroStoreLoading ? (
						<h1>Searching</h1>
					) : lastSearch ? (
						heroStore.length !== 0 ? (
							<div>
								<h1>Select your hero</h1>
								<h3>
									There is {heroStore.length} match for your search ({lastSearch})
								</h3>
							</div>
						) : (
							<h1>There is no match for your search ({lastSearch})</h1>
						)
					) : (
						<h1>Search your hero</h1>
					)}

					<form
						onSubmit={e => {
							e.preventDefault();
							return callHeroList(search);
						}}>
						<input
							style={{ borderRadius: '5px', border: 'blue 1px solid' }}
							type='text'
							onChange={e => setSearch(e.target.value)}
							value={search}
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
						{heroStore.map(x => (
							<Col key={x.id} xs='4' onClick={() => setHero1(x)}>
								<CardHero props={x} />
							</Col>
						))}
					</Row>
				</div>
			)}
		</div>
	);
};

export default SelectedCombat;
