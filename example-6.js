/*Example 6 - Arrays and Strings

Write a script that "unwraps" a string (reverse letter order) and prints
it to the console.
*/


/* 
  ^Varianta cu litere inversate pentru tot stringul (inversata si pozitia cuvintelor)
  ^versiunea: desfasurata
*/
const string = "Welcome to the future";

const arrayOfString = string.split("");
console.log(arrayOfString);

const arrayOfStringReverse = arrayOfString.reverse();
console.log(arrayOfStringReverse);

const finalString = arrayOfStringReverse.join("");
console.log(finalString); // erutuf eht ot emocleW //



/* 
  ^Varianta cu litere inversate pentru tot stringul (inversata si pozitia cuvintelor)
  ^versiunea: scurta
*/
// const string = "Welcome to the future";
// const finalString = string.split("").reverse().join("");
// console.log(finalString); // erutuf eht ot emocleW //



/* 
  ^Varianta cu litere inversate pentru tot stringul (inversata si pozitia cuvintelor)
  ^versiunea: complicata (degeaba, fara rost)
*/
// const string = "Welcome to the future";

// const words = string.split(" ");
// console.log(words);

// for (let i = 0; i < words.length; i++) {
//   words[i] = words[i].split("").reverse().join("");
// }

// console.log(words);

// const finalString = words.reverse().join(" ");
// console.log(finalString); // erutuf eht ot emocleW //



/* 
  ^Varianta Sergiu: pozitia cuvintelor ramane aceeasi, (literele cuvintelor se inverseaza)
  ^version 1: for (fiecare iteratie este modificata --> modificarea generala a variabilei)
*/
// const string = "Welcome to the future";

// const words = string.split(" ");
// console.log(words);

// for (let i = 0; i < words.length; i++) {
//   words[i] = words[i].split("").reverse().join("");
// }

// console.log(words);

// const finalString = words.join(" ");
// console.log(finalString); // emocleW ot eht erutuf //


// ! Diferenta dintre versiuni --> in docomentul Word !


/* 
  ^Varianta Sergiu: pozitia cuvintelor ramane aceeasi, (literele cuvintelor se inverseaza)
  ^version 2: variabila (finalString = "") --> iteratiile le combin cu ea si spatiu gol
*/
// const string = "Welcome to the future";

// const words = string.split(" ");
// console.log(words);

// let finalString = "";

// for (let i = 0; i < words.length; i++) {
//   finalString += words[i].split("").reverse().join("") + " ";
// }

// console.log(finalString); // emocleW ot eht erutuf //



/* 
  ^Varianta Sergiu: pozitia cuvintelor ramane aceeasi, (literele cuvintelor se inverseaza)
  ^version 3: for...of
*/
// const string = "Welcome to the future";

// const words = string.split(" ");
// console.log(words);

// let finalString = "";

// for (const word of words) {
//   finalString += word.split("").reverse().join("") + " ";
// }

// console.log(finalString); // emocleW ot eht erutuf //