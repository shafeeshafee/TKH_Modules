// CODEPEN DISPLAYS NUMBERS AS 'NaN' - THIS IS A BUG WITH CODEPEN
// BECAUSE OTHER JS CONSOLES + DEFAULT BROWSER CONSOLE WORKS WITH THIS CODE AND DISPLAYS THE NUMBERS
// FOR THIS REASON, I SUPPLEMENTED A REPL.IT LINK BELOW

// LIVE CODE LINK - https://repl.it/join/xufmidgc-shafee

// step 1 - create prompts for financial data
let weeklyIncome = parseInt(prompt("How much is your weekly income?"));
let food = parseInt(prompt("How much do you pay for food weekly?"));
let housing = parseInt(prompt("Anually, how much do you pay for housing?"));
let transportation = parseInt(prompt("How much do you pay for transportation weekly?"));
let otherCost = parseInt(prompt("How much do you spend on other things weekly?"));
let goal = parseInt(prompt("How much would you like to save in a year?"));

// step 2 - how much to save a week
let saveGoal = goal / 52;
console.log("With your weekly salary, you would have to save $" + saveGoal.toFixed(2) + " every week to cover your goal.");

// step 3 - total weekly costs
let weekTotal = housing / 52 + food + transportation + otherCost;
console.log("This much much is spent in a week: $" + weekTotal.toFixed(2));
let amountLeft = weeklyIncome - weekTotal;
console.log("End of the week, you're left with: $" + amountLeft.toFixed(2));

// step 4 - right track or need to save?
if (amountLeft > saveGoal) {
	console.log("You're on track!");
} else {
	console.log("You're not on track. Currently, you need to save this much weekly: $" + (saveGoal.toFixed(2) - amountLeft.toFixed(2)));
}
