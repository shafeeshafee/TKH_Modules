const Car = {
	year: 19,
	color: "black",
	type: "auto",
	sound: "skrrrrr",
	get noise() {
		return this.sound;
	},
	set noise(value) {
		this.sound = value;
	},
};

// changing car noise to VROOM VROOOM
console.log(`getter car noise is: ${Car.noise}`);
Car.noise = "VROOM VROOOMMMM";
console.log(`setter car noise is: ${Car.noise}`);

const Team = {
	name: "The TKH Tigers",
	members: 50,
	jerseyColor: "purple",
	mascot: "Giant Thousand Dollar Bill",
	slogan: "get that bread",
	get shoutOut() {
		return this.slogan;
	},
	set shoutOut(hustle) {
		this.slogan = hustle;
	},
};

// changing slogan to HUSTLE!
console.log(`getter slogan is: + ${Team.shoutOut}`);
Team.shoutOut = "HUSTLE!";
console.log(`setter slogan is: + ${Team.shoutOut}`);

const Animal = {
	scientificName: "Ailurus fulgens",
	color: "dark orange, black, white",
	lifespan: "13 years",
	rating: 9,
	status: "Endangered",
	get situation() {
		return this.status;
	},
	set situation(state) {
		this.status = state;
	},
};

// changing status to Vulnerable
console.log(`getter animal status is: ${Animal.situation}`);
Animal.status = "Vulnerable";
console.log(`setter animal status is: ${Animal.situation}`);
