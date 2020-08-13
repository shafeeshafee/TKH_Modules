// CODEPEN - https://codepen.io/shafeetkh/pen/YzqKOBJ?editors=0012

// Step 1: Take the following lyrics as a long string and use the split string method to change it
const lyrics = `Wipe the sweat off my dome, spit the phlegm on the streets Suede Timbs on my feets makes my cipher complete Whether cruising in a Sikh's cab, or Montero Jeep I can't call it, the beats make me falling asleep I keep falling, but never falling six feet deep I'm out for presidents to represent me, I'm out for presidents to represent me, I'm out for dead presidents to represent me,`;
const arrS = lyrics.split(" ");

// Step 2: Iterate thru each string and when a string has the letter ‘s’ in it replace it with ‘$’
for (i = 0; i < arrS.length; i++) {
	arrS[i] = arrS[i].replace(/s|S/gi, "$");
}

// Step 3: join the array back into a string again using ' ' as a separator with the join string
arrS.toString();
let dollarLyrics = arrS.join(" ");

// Step 4: Log the new string to your screen
console.log(dollarLyrics);
