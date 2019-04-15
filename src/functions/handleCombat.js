const handleCombat = oldStats => {
	if (oldStats.hero1.powerstats.life <= 0 && oldStats.hero2.powerstats.life <= 0) {
		if (oldStats.hero1.powerstats.speed >= oldStats.hero2.powerstats.speed) {
			oldStats.hero1.powerstats.durability = 1;
		} else {
			oldStats.hero2.powerstats.durability = 1;
		}
	}

	if (oldStats.hero1.powerstats.life <= 0) {
		oldStats.hero1.powerstats.life = 0;
	} else {
		oldStats.hero1.powerstats.life -=
			((oldStats.hero2.powerstats.strength +
				oldStats.hero2.powerstats.combat +
				(oldStats.hero2.powerstats.intelligence + oldStats.hero2.powerstats.power)) /
				10) *
			(oldStats.hero2.powerstats.speed / 100);
	}

	if (oldStats.hero2.powerstats.life <= 0) {
		oldStats.hero2.powerstats.life = 0;
	} else {
		oldStats.hero2.powerstats.life -=
			((oldStats.hero1.powerstats.strength + oldStats.hero1.powerstats.combat) / 10 +
				(oldStats.hero1.powerstats.intelligence + oldStats.hero1.powerstats.power) / 10) *
			(oldStats.hero1.powerstats.speed / 100);
	}

	return {
		hero1: {
			id: oldStats.hero1.id,
			name: oldStats.hero1.name,
			powerstats: {
				intelligence: oldStats.hero1.powerstats.strength,
				strength: oldStats.hero1.powerstats.speed,
				speed: oldStats.hero1.powerstats.durability,
				durability: oldStats.hero1.powerstats.intelligence,
				power: oldStats.hero1.powerstats.power,
				combat: oldStats.hero1.powerstats.combat,
				life: oldStats.hero1.powerstats.life
			},
			biography: { ...oldStats.hero1.biography },
			appearance: { ...oldStats.hero1.appearance },
			image: oldStats.hero1.image
		},
		hero2: {
			id: oldStats.hero2.id,
			name: oldStats.hero2.name,
			powerstats: {
				intelligence: oldStats.hero2.powerstats.strength,
				strength: oldStats.hero2.powerstats.speed,
				speed: oldStats.hero2.powerstats.durability,
				durability: oldStats.hero2.powerstats.intelligence,
				power: oldStats.hero2.powerstats.power,
				combat: oldStats.hero2.powerstats.combat,
				life: oldStats.hero2.powerstats.life
			},
			biography: { ...oldStats.hero2.biography },
			appearance: { ...oldStats.hero2.appearance },
			image: oldStats.hero2.image
		}
	};
};

export default handleCombat;
