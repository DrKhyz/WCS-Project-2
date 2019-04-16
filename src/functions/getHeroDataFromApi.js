const getHeroDataFromApi = () => {
	let randomNumber = Math.floor(Math.random() * 730) + 1;
	return fetch(`https://www.superheroapi.com/api.php/10219454314208202/${randomNumber}`)
		.then(res => res.json())
		.then(data => dataSelectors(data))
		.then(data => createHero(data));
};

const dataSelectors = data => {
	let id = data.id;
	let name = data.name;

	let intelligence = data.powerstats.intelligence;
	let strength = data.powerstats.strength;
	let speed = data.powerstats.speed;
	let durability = data.powerstats.durability;
	let power = data.powerstats.power;
	let combat = data.powerstats.combat;
	let life = data.powerstats.durability;

	let fullname = data.biography['full-name'];
	let publisher = data.biography.publisher;
	let alignment = data.biography.alignment;

	let gender = data.appearance.gender;
	let race = data.appearance.race;
	let height = data.appearance.height[0];
	let weight = data.appearance.weight[0];

	let image = data.image.url;

	let star;

	return {
		id: id,
		name: name,
		powerstats: {
			intelligence: intelligence,
			strength: strength,
			speed: speed,
			durability: durability,
			power: power,
			combat: combat,
			life: life
		},
		biography: { fullname: fullname, publisher: publisher, alignment: alignment },
		appearance: { gender: gender, race: race, height: height, weight: weight },
		image: image,
		star,
		loading: false
	};
};

const createHero = data => {
	let intelligence = normalizePowerstats(data.powerstats.intelligence);
	let strength = normalizePowerstats(data.powerstats.strength);
	let speed = normalizePowerstats(data.powerstats.speed);
	let durability = normalizePowerstats(data.powerstats.durability);
	let power = normalizePowerstats(data.powerstats.power);
	let combat = normalizePowerstats(data.powerstats.combat);
	let life = normalizePowerstats(data.powerstats.life);

	let fullname = normalizeInformations(data.biography.fullname);
	let publisher = normalizeInformations(data.biography.publisher);
	let alignment = normalizeInformations(data.biography.alignment);

	let gender = normalizeInformations(data.appearance.gender);
	let race = normalizeInformations(data.appearance.race);
	let height = normalizeInformations(data.appearance.height);
	let weight = normalizeInformations(data.appearance.weight);

	let image = normalizeInformations(data.image);

	let star = (intelligence + strength + speed + durability + power + combat + durability) / 100;

	return {
		id: data.id,
		name: data.name,
		powerstats: {
			intelligence: intelligence,
			strength: strength,
			speed: speed,
			durability: durability,
			power: power,
			combat: combat,
			life: life
		},
		biography: { fullname: fullname, publisher: publisher, alignment: alignment },
		appearance: { gender: gender, race: race, height: height, weight: weight },
		image: image,
		star,
		loading: false
	};
};

// Normalizers
const normalizePowerstats = stats => (stats !== 'null' ? parseInt(stats) : Math.floor(Math.random() * 40) + 20);
const normalizeInformations = data =>
	data !== 'null' && data !== '-' && data !== '- lb' && data !== '' ? data : 'Unknown';
// End Normalizers

export default getHeroDataFromApi;
