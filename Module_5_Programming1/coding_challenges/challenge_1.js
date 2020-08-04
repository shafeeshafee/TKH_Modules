// CODEPEN - https://codepen.io/shafeetkh/pen/RwabYKJ?editors=0012

// seperate first and last names into their own arrays

let names = ["Westly Snipes", "Nicholas Cage", "Nasir Jones", "Sean Carter", "Sean Combs", "Michael Jordan", "Patrick Ewing"]

let firstName = [];
let lastName = [];

for (i = 0; i < names.length; i++) {
  
 let nameSplit = names[i].split(" ");
 firstName.push(nameSplit[0]);
 lastName.push(nameSplit[1]);
 
}

console.log(firstName);
console.log(lastName);