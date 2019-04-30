const handleCombat = oldStats => {
	let hero1DealingDamage = false;
	let hero1ReceivingDamage = false;
	let hero2DealingDamage = false;
	let hero2ReceivingDamage = false;
	let asCritical = false;
	let asMissed = false;

	let criticalHitHero1 = oldStats.hero1.powerstats.intelligence / 10;
	let chanceMissHero1 = oldStats.hero1.powerstats.speed / 10;

	let criticalHitHero2 = oldStats.hero2.powerstats.intelligence / 10;
	let chanceMissHero2 = oldStats.hero2.powerstats.speed / 10;

	if (oldStats.firstAttack) {
		let criticalChance = Math.floor(Math.random() * 101);
		let missChance = Math.floor(Math.random() * 101);

		if (chanceMissHero2 <= missChance) {
			if (criticalHitHero1 >= criticalChance) {
				oldStats.hero2.powerstats.life -=
					oldStats.hero1.powerstats.strength -
					oldStats.hero2.powerstats.durability / 5 +
					oldStats.hero1.powerstats.power * 2;
				asCritical = true;
				console.log('critical hit');
			} else {
				oldStats.hero2.powerstats.life -=
					oldStats.hero1.powerstats.strength -
					oldStats.hero2.powerstats.durability / 3 +
					oldStats.hero2.powerstats.power;
			}
		} else {
			console.log('missed');
			asMissed = true;
		}

		hero1DealingDamage = true;
		hero2ReceivingDamage = true;
	}

	if (!oldStats.firstAttack) {
		let criticalChance = Math.floor(Math.random() * 101);
		let missChance = Math.floor(Math.random() * 101);

		if (chanceMissHero1 <= missChance) {
			if (criticalHitHero2 >= criticalChance) {
				oldStats.hero1.powerstats.life -=
					oldStats.hero2.powerstats.strength -
					oldStats.hero1.powerstats.durability / 5 +
					oldStats.hero2.powerstats.power * 2;
				console.log('critical hit');
				asCritical = true;
			} else {
				oldStats.hero1.powerstats.life -=
					oldStats.hero2.powerstats.strength -
					oldStats.hero1.powerstats.durability / 3 +
					oldStats.hero2.powerstats.power;
			}
		} else {
			console.log('missed');
			asMissed = true;
		}

		hero2DealingDamage = true;
		hero1ReceivingDamage = true;
	}

	if (oldStats.hero2.powerstats.life <= 0) {
		oldStats.hero2.powerstats.life = 0;
	}

	if (oldStats.hero1.powerstats.life <= 0) {
		oldStats.hero1.powerstats.life = 0;
	}

	return {
		hero1DealingDamage: hero1DealingDamage,
		hero1ReceivingDamage: hero1ReceivingDamage,
		hero2DealingDamage: hero2DealingDamage,
		hero2ReceivingDamage: hero2ReceivingDamage,
		firstAttack: !oldStats.firstAttack,
		hero1: {
			...oldStats.hero1,
			powerstats: {
				...oldStats.hero1.powerstats,
				life: oldStats.hero1.powerstats.life,
			},
			asCritical: asCritical,
			asMissed: asMissed,
		},
		hero2: {
			...oldStats.hero2,
			powerstats: {
				...oldStats.hero2.powerstats,
				life: oldStats.hero2.powerstats.life,
				asCritical: asCritical,
				asMissed: asMissed,
			},
		},
	};
};

export default handleCombat;
