// CODEPEN DISPLAYS NUMBERS AS 'NaN' - THIS IS A BUG WITH CODEPEN 
// BECAUSE OTHER JS CONSOLES + DEFAULT BROWSER CONSOLE WORKS WITH THIS CODE AND DISPLAYS THE NUMBERS
// FOR THIS REASON, I SUPPLEMENTED A REPL.IT LINK BELOW

// LIVE CODE LINK - https://repl.it/@shafee/TKHassignment1


// step 1 - create prompts for financial data
let weeklyIncome = parseInt(prompt("How much is your weekly income?"));
let food = parseInt(prompt("How much do you pay for food weekly?"));
let housing = parseInt(prompt("Anually, how much do you pay for housing?"));
let transportation = parseInt(prompt("How much do you pay for transportation weekly?"));
let otherCost = parseInt(prompt("How much do you spend on other things weekly?"));
let goal = parseInt(prompt("How much would you like to save in a year?"));

// step 2 - how much to save a week
let weeklySave = goal / 52;
console.log("With your weekly salary, you would have to save $" + weeklySave.toFixed(2) + " every week to cover your goal.");

// step 3 - total weekly costs
let weekTotal = (housing / 52) + food + transportation + otherCost;
console.log("You spend this much in a week: $" + weekTotal.toFixed(2));
let weeklyCost = weeklyIncome - weekTotal;
console.log("End of the week, you're left with: $" + weeklyCost.toFixed(2));

// step 4 - right track or need to save?
if (weeklySave < weeklyCost) {
  console.log("You're on track!");
}
else {
  console.log("You're not on the right track. Currently, you need to save this much weekly: $" + (weeklySave.toFixed(2) - weeklyCost.toFixed(2)))
}