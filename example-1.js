/*Example 1 - Basic operations with an array

1. Create an array `genres` with elements "Jazz" and "Blues".
2. Add "Rock and Roll" to the end.
3. Print the first element of the array to the console.
4. Print the last element of the array to the console. The code should work for an array
random length.
5. Remove the first element and print it to the console.
6. Insert "Country" and "Reggae" at the beginning of the array.
*/

// 1 //
const genres = ["Jazz", "Blues"];
console.log(genres);

// 2 //
genres.push("Rock and Roll");
console.log(genres);

// 3 //
console.log(genres[0]);

// 4 //
console.log(genres[genres.length - 1]);

// 5 //
console.log(genres.shift());

// 6 //
genres.unshift("Country", "Reggae");
console.log(genres);