const getHeroDataFromApi = () => {
	// fonction api qui recupere les donnees depuis l'api et hydrate l'etat des 2 heros
	let randomNumber = Math.floor(Math.random() * 730) + 1;
	return fetch(`https://www.superheroapi.com/api.php/10219454314208202/${randomNumber}`)
		.then(res => res.json())
		.then(data => {
			let intelligence =
				data.powerstats.intelligence !== 'null'
					? parseInt(data.powerstats.intelligence)
					: Math.floor(Math.random() * 40) + 20;
			let strength =
				data.powerstats.strength !== 'null' ? parseInt(data.powerstats.strength) : Math.floor(Math.random() * 40) + 20;
			let speed =
				data.powerstats.speed !== 'null' ? parseInt(data.powerstats.speed) : Math.floor(Math.random() * 40) + 20;
			let durability =
				data.powerstats.durability !== 'null'
					? parseInt(data.powerstats.durability)
					: Math.floor(Math.random() * 40) + 20;
			let power =
				data.powerstats.power !== 'null' ? parseInt(data.powerstats.power) : Math.floor(Math.random() * 40) + 20;
			let combat =
				data.powerstats.combat !== 'null' ? parseInt(data.powerstats.combat) : Math.floor(Math.random() * 40) + 20;
			let star = Math.floor(intelligence + strength + speed + durability + power + combat);
			let fullname = data.biography['full-name'] ? data.biography['full-name'] : 'Unknown';
			let alignement = data.biography.alignment !== '-' ? data.biography.alignment : 'Unknown';
			let gender = data.appearance.gender !== 'null' ? data.appearance.gender : 'Unknown';
			let race = data.appearance.race !== 'null' ? data.appearance.race : 'Unknown';
			let height = data.appearance.height[0] !== '-' ? data.appearance.height[1] : 'Unknown';
			let weight = data.appearance.weight[0] !== '- lb' ? data.appearance.weight[1] : 'Unknown';

			return {
				id: data.id,
				name: data.name,
				powerstats: [intelligence, strength, speed, durability, power, combat, durability],
				biography: [fullname, data.biography.publisher, alignement],
				appearance: [gender, race, height, weight],
				image: data.image.url,
				star
			};
		});
};

export default getHeroDataFromApi;
