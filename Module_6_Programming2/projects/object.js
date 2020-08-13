const Car = {
	year: 19,
	color: "black",
	type: "auto",
	sound: "skrrrrr",
	get noise() {
		return this.sound;
	},
	set noise(value) {
		return (this.sound = value);
	},
};

// changing car noise to VROOM VROOOM
console.log(Car.noise);
Car.noise = "VROOM VROOOMMMM";
console.log(Car.noise);

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
		return (this.slogan = hustle);
	},
};

// changing slogan to HUSTLE!
console.log(Team.shoutOut);
Team.shoutOut = "HUSTLE!";
console.log(Team.shoutOut);

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
		return (this.status = state);
	},
};

// changing status to Vulnerable
console.log(Animal.situation);
Animal.status = "Vulnerable";
console.log(Animal.situation);
