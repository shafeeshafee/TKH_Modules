// change every letter 's' into '$' in these song lyrics

const lyrics = `Wipe the sweat off my dome, spit the phlegm on the streets Suede Timbs on my feets makes my cipher complete Whether cruising in a Sikh's cab, or Montero Jeep I can't call it, the beats make me falling asleep I keep falling, but never falling six feet deep I'm out for presidents to represent me, I'm out for presidents to represent me, I'm out for dead presidents to represent me,`
const arrS = lyrics.split(" ");
console.log(arrS);

for (i = 0; i < arrS.length; i++) {
  arrS[i] = arrS[i].replace('s', '$');
  arrS[i] = arrS[i].replace('S', '$');
  arrS.toString()
}

console.log(arrS.join(' '));
