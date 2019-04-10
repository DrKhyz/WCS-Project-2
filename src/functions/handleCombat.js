const handleCombat = oldStats => {
	if (oldStats.hero1.powerstats[6] <= 0) {
		oldStats.hero1.powerstats[6] = 0;
	} else {
		oldStats.hero1.powerstats[6] = oldStats.hero1.powerstats[6] - oldStats.hero2.powerstats[1] / 10; //life point
	}
	if (oldStats.hero2.powerstats[6] <= 0) {
		oldStats.hero2.powerstats[6] = 0;
	} else {
		oldStats.hero2.powerstats[6] = oldStats.hero2.powerstats[6] - oldStats.hero1.powerstats[1] / 10; //life point
	}

	console.log(oldStats.hero1.powerstats[6]);
	console.log(oldStats.hero2.powerstats[6]);
	return {
		hero1: {
			id: oldStats.hero1.id,
			name: oldStats.hero1.name,
			powerstats: [
				oldStats.hero1.powerstats[0], //int
				oldStats.hero1.powerstats[1], //str
				oldStats.hero1.powerstats[2], //spd
				oldStats.hero1.powerstats[3], //end
				oldStats.hero1.powerstats[4], //pow
				oldStats.hero1.powerstats[5], //cbt
				oldStats.hero1.powerstats[6] //life point
			],
			biography: [...oldStats.hero1.biography],
			appearance: [...oldStats.hero1.appearance],
			image: oldStats.hero1.image //image
		},
		hero2: {
			id: oldStats.hero2.id,
			name: oldStats.hero2.name,
			powerstats: [
				oldStats.hero2.powerstats[0], //int
				oldStats.hero2.powerstats[1], //str
				oldStats.hero2.powerstats[2], //spd
				oldStats.hero2.powerstats[3], //end
				oldStats.hero2.powerstats[4], //pow
				oldStats.hero2.powerstats[5], //cbt
				oldStats.hero2.powerstats[6] //life point
			],
			biography: [...oldStats.hero2.biography],
			appearance: [...oldStats.hero2.appearance],
			image: oldStats.hero2.image //image
		}
	};
};

export default handleCombat;
