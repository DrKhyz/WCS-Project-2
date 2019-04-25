const handleCombat = oldStats => {
	if (oldStats.hero1.powerstats.life <= 0 && oldStats.hero2.powerstats.life <= 0) {
		if (oldStats.hero1.powerstats.speed >= oldStats.hero2.powerstats.speed) {
			oldStats.hero1.powerstats.life = 1
		} else {
			oldStats.hero2.powerstats.life = 1
		}
	}

	if (oldStats.hero1.powerstats.life > 0) {
		oldStats.hero1.powerstats.life -=
			((oldStats.hero2.powerstats.strength +
				oldStats.hero2.powerstats.combat +
				(oldStats.hero2.powerstats.intelligence + oldStats.hero2.powerstats.power)) /
				10) *
			(oldStats.hero2.powerstats.speed / 100)
	}

	if (oldStats.hero2.powerstats.life > 0) {
		oldStats.hero2.powerstats.life -=
			((oldStats.hero1.powerstats.strength + oldStats.hero1.powerstats.combat) / 10 +
				(oldStats.hero1.powerstats.intelligence + oldStats.hero1.powerstats.power) / 10) *
			(oldStats.hero1.powerstats.speed / 100)
	}

	if (oldStats.hero2.powerstats.life <= 0) {
		oldStats.hero2.powerstats.life = 0
	}

	if (oldStats.hero1.powerstats.life <= 0) {
		oldStats.hero1.powerstats.life = 0
	}
	return {
		hero1: {
			...oldStats.hero1,
			powerstats: {
				...oldStats.hero1.powerstats,
				life: oldStats.hero1.powerstats.life,
			},
		},
		hero2: {
			...oldStats.hero2,
			powerstats: {
				...oldStats.hero2.powerstats,
				life: oldStats.hero2.powerstats.life,
			},
		},
	}
}

export default handleCombat
