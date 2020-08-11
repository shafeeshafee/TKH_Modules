const game = () => {
	let pScore = 0;
	let cScore = 0;

	// start the game
	const startGame = () => {
		const playBtn = document.querySelector(".intro button");
		const introScreen = document.querySelector(".intro");
		const match = document.querySelector(".match");

		playBtn.addEventListener("click", () => {
			introScreen.classList.add("fadeOut");
			match.classList.add("fadeIn");
		});
	};

	// play match
	const playMatch = () => {
		const options = document.querySelectorAll(".options button");
		const playerHand = document.querySelector(".player-hand");
		const computerHand = document.querySelector(".computer-hand");
		const hands = document.querySelectorAll(".hands img");

		hands.forEach((hand) => {
			hand.addEventListener("animationend", function () {
				this.style.animation = "";
			});
		});

		// computer options
		const computerOptions = ["rock", "paper", "scissors"];

		options.forEach((option) => {
			option.addEventListener("click", function () {
				//computer choice
				const computerNumber = Math.floor(Math.random() * 3);
				const computerChoice = computerOptions[computerNumber];

				setTimeout(() => {
					// compare hand functions
					compareHands(this.textContent, computerChoice);
					// update images
					playerHand.src = `./assets/${this.textContent}.png`;
					computerHand.src = `./assets/${computerChoice}.png`;
				}, 1500);

				playerHand.style.animation = "shakePlayer 1.5s ease";
				computerHand.style.animation = "shakeComputer 1.5s ease";
			});
		});
	};

	const updateScore = () => {
		const playerScore = document.querySelector(".player-score p");
		const computerScore = document.querySelector(".computer-score p");
		playerScore.textContent = pScore;
		computerScore.textContent = cScore;
	};

	// debbug down here
	const compareHands = (playerChoice, computerChoice) => {
		// update text
		const winner = document.querySelector(".winner");
		// check for a tie
		if (playerChoice === computerChoice) {
			winner.textContent = "Tie!";
			return;
		}
		// check for rock
		if (playerChoice === "rock") {
			if (computerChoice === "scissors") {
				winner.textContent = "Player wins!";
				pScore++;
				updateScore();
				return;
			} else {
				winner.textContent = "Robot wins!";
				cScore++;
				updateScore();
				return;
			}
		}
		// check for paper
		if (playerChoice === "paper") {
			if (computerChoice === "scissors") {
				winner.textContent = "Robot wins!";
				cScore++;
				updateScore();
				return;
			} else {
				winner.textContent = "Player wins!";
				pScore++;
				updateScore();
				return;
			}
		}
		if (playerChoice === "scissors") {
			if (computerChoice === "rock") {
				winner.textContent = "Robot wins!";
				cScore++;
				updateScore();
				return;
			} else {
				winner.textContent = "Player wins!";
				pScore++;
				updateScore();
				return;
			}
		}
	};
	// call all inner functions
	startGame();
	playMatch();
};

// restart function reloads the page
function refreshed() {
	const refreshPage = document.querySelector("#restart");
	refreshPage.addEventListener("click", location.reload());
}

// start game
game();
