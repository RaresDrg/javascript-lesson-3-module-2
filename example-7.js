/*Example 7 - Sorting an array with a loop

Write a script to sort an array of strings alphabetically by the first
letter of an element.
*/


/* 
  ^Version: metoda sort --> toate elementele sunt puse in ordine ascendenta
  ^ + reverse --> inverseaza elementele, practic le schimba in ordine descendenta
*/

const langs = ["python", "javascript", "c++", "haskel", "php", "ruby"];
console.log(langs)

console.log(langs.sort()); // ordine alfabetica ascendenta //
console.log(langs.sort().reverse()); // ordine alfabetica descendenta //