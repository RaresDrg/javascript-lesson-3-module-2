/*Example 5 - Arrays and Strings

Write a script that prints to the console all the words of a string except the 
first and the last one. The resulting string must not start or end whitespace 
character. The script should work for any line.
*/
 

/* 
  ^Varianta fara spatii goale in stringul initial
  ^version 1 = pop, shift
*/
const string = "Welcome to the future";
console.log(string);

const arrayOfString = string.split(" ");
console.log(arrayOfString);

arrayOfString.pop();
console.log(arrayOfString);

arrayOfString.shift()
console.log(arrayOfString);

console.log(arrayOfString.join(" ")); // to the //



/* 
  ^Varianta fara spatii goale in stringul initial
  ^version 2 = slice
*/
// const string = "Welcome to the future";
// console.log(string);

// const arrayOfString = string.split(" ");
// console.log(arrayOfString);

// const arrayOfStringSliced = arrayOfString.slice(1, -1);
// console.log(arrayOfStringSliced);

// console.log(arrayOfStringSliced.join(" "));

// *Version 2: varianta scurta //
// const arrayOfString = string.split(" ").slice(1, -1).join(" ");
// console.log(arrayOfString); // to the //



/* 
  ^Varianta fara spatii goale in stringul initial
  ^version 3 = splice
*/
// const string = "Welcome to the future";
// console.log(string);

// const arrayOfString = string.split(" ");
// console.log(arrayOfString);

// arrayOfString.splice(0, 1);
// arrayOfString.splice(-1, 1);

// console.log(arrayOfString.join(" ")); // to the //



/* 
  ^Varianta fara spatii goale in stringul initial
  ^version 4 = for
*/
// const string = "Welcome to the future";
// console.log(string);

// const arrayOfString = string.split(" ");
// console.log(arrayOfString);

// let result = "";

// for (let i = 1; i < arrayOfString.length - 1; i++) {
//   result += arrayOfString[i] + " ";
// }

// console.log(result); // to the //



/* 
  ^Varianta lui Sergiu: cu spatii albe in stringul initial
  ^version 1 = versiunea lui ( nu prea e buna, are si alt rezultat)
*/
// const string = "    Welcome to the future";
// console.log(string);

// const words = string.split(" ");
// console.log(words);

// if (words.length > 1) {
//   words.shift();
// }

// for (let i = 0; i < words.length; i++) {
//   if (words[i] === " ") {
//     words.shift();
//   } else {
//     break;
//   }
// }

// console.log(words);

// if (words.length > 1) {
//   words.pop();
// }
// console.log(words);

// let finalString = "";
// for (const word of words) {
//   if (word !== "") {
//     finalString += word + " ";
//   }
// }

// console.log(finalString); // Welcome to the //



/* 
  ^Varianta lui Sergiu: cu spatii albe in stringul initial
  ^version 2 = for (! loop creates a string that has only a white space at final !)

  ^ --> sliece(1, -2) --> *delete first letter and last 2 letters (white space and letter)
*/
// const string = "    Welcome to the future    ";
// console.log(string);

// const arrayOfString = string.split(" ");
// console.log(arrayOfString);

// let finalString = "";

// for (let i = 0; i < arrayOfString.length; i++) {
//   if (arrayOfString[i] !== "") {
//     finalString += arrayOfString[i] + " ";
//   }
// }

// result = finalString.split(" ").slice(1, -2).join(" ");
// console.log(result); // to the //



/* 
  ^Varianta lui Sergiu: cu spatii albe in stringul initial
  ^version 3 = functia pentru stringuri: trim() --> delete all white spaces
*/
// const string = "         Welcome to the future  ";
// console.log(string);

// const finalString = string.trim().split(" ").slice(1, -1).join(" ");
// console.log(finalString); // to the //