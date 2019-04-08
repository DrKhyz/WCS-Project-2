const handleCombat = oldStats => ({
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
			oldStats.hero1.powerstats[6] - oldStats.hero2.powerstats[1] / 10 //life point
		],
		biography: [oldStats.hero1.biography[0], oldStats.hero1.biography[1], oldStats.hero1.biography[2]],
		appearance: [
			oldStats.hero1.appearance[0], //gender
			oldStats.hero1.appearance[1], //race
			oldStats.hero1.appearance[2], //height
			oldStats.hero1.appearance[3] //weight
		],
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
			oldStats.hero2.powerstats[6] - oldStats.hero1.powerstats[1] / 10 //life point
		],
		biography: [oldStats.hero2.biography[0], oldStats.hero2.biography[1], oldStats.hero2.biography[2]],
		appearance: [
			oldStats.hero2.appearance[0], //gender
			oldStats.hero2.appearance[1], //race
			oldStats.hero2.appearance[2], //height
			oldStats.hero2.appearance[3] //weight
		],
		image: oldStats.hero2.image //image
	}
});

export default handleCombat;
