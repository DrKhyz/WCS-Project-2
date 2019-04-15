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
			powerstats: [
				oldStats.hero1.powerstats.intelligence, //int
				oldStats.hero1.powerstats.strength, //str
				oldStats.hero1.powerstats.speed, //spd
				oldStats.hero1.powerstats.durability, //end
				oldStats.hero1.powerstats.power, //pow
				oldStats.hero1.powerstats.combat, //cbt
				oldStats.hero1.powerstats.life //life point
			],
			biography: [...oldStats.hero1.biography],
			appearance: [...oldStats.hero1.appearance],
			image: oldStats.hero1.image //image
		},
		hero2: {
			id: oldStats.hero2.id,
			name: oldStats.hero2.name,
			powerstats: [
				oldStats.hero2.powerstats.intelligence, //int
				oldStats.hero2.powerstats.strength, //str
				oldStats.hero2.powerstats.speed, //spd
				oldStats.hero2.powerstats.durability, //end
				oldStats.hero2.powerstats.power, //pow
				oldStats.hero2.powerstats.combat, //cbt
				oldStats.hero2.powerstats.life //life point
			],
			biography: [...oldStats.hero2.biography],
			appearance: [...oldStats.hero2.appearance],
			image: oldStats.hero2.image //image
		}
	};
};

export default handleCombat;
