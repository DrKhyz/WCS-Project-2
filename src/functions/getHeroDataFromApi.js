const getHeroDataFromApi = () => {
	let randomNumber = Math.floor(Math.random() * 730) + 1;
	return fetch(`https://www.superheroapi.com/api.php/10219454314208202/${randomNumber}`)
		.then(res => res.json())
		.then(data => dataSelectors(data))
		.then(data => createHero(data));
};

const dataSelectors = data => {
	let intelligence = data.powerstats.intelligence;
	let strength = data.powerstats.strength;
	let speed = data.powerstats.speed;
	let durability = data.powerstats.durability;
	let power = data.powerstats.power;
	let combat = data.powerstats.combat;

	let fullname = data.biography['full-name'];
	let publisher = data.biography.publisher;
	let alignment = data.biography.alignment;

	let gender = data.appearance.gender;
	let race = data.appearance.race;
	let height = data.appearance.height[0];
	let weight = data.appearance.weight[0];

	let star;

	let image = data.image.url;

	return {
		id: data.id,
		name: data.name,
		powerstats: [intelligence, strength, speed, durability, power, combat, durability],
		biography: [fullname, publisher, alignment],
		appearance: [gender, race, height, weight],
		image: image,
		star,
		loading: false
	};
};

const createHero = data => {
	let intelligence = normalizePowerstats(data.powerstats[0]);
	let strength = normalizePowerstats(data.powerstats[1]);
	let speed = normalizePowerstats(data.powerstats[2]);
	let durability = normalizePowerstats(data.powerstats[3]);
	let power = normalizePowerstats(data.powerstats[4]);
	let combat = normalizePowerstats(data.powerstats[5]);

	let fullname = normalizeInformations(data.biography[0]);
	let publisher = normalizeInformations(data.biography[1]);
	let alignment = normalizeInformations(data.biography[2]);

	let gender = normalizeInformations(data.appearance[0]);
	let race = normalizeInformations(data.appearance[1]);
	let height = normalizeInformations(data.appearance[2]);
	let weight = normalizeInformations(data.appearance[3]);

	let image = normalizeInformations(data.image);

	let star = (intelligence + strength + speed + durability + power + combat + durability) / 100;

	return {
		id: data.id,
		name: data.name,
		powerstats: [intelligence, strength, speed, durability, power, combat, durability],
		biography: [fullname, publisher, alignment],
		appearance: [gender, race, height, weight],
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
