/* Example 8 - Search for an element

Write a script to find the smallest number in an array. The code should work
for any array of numbers. Use a loop to solve problems.
*/

/* 
  ^Version 1: for
  ^max number
*/
const numbers = [2, 17, 94, 1, 0, 5, 23, 37, -10];
console.log(numbers);

let max = numbers[0];

for (let i = 0; i < numbers.length; i++) {
  console.log(`${max} < ${numbers[i]}`);
  if (max < numbers[i]) {
    max = numbers[i];
  }
  console.log(max);
}

console.log(`cel mai mare numar este: ${max}`);



/* 
  ^Version 2: for...of
  ^min number
*/
// const numbers = [2, 17, 94, 1, 0, 5, 23, 37, -10];
// console.log(numbers);

// let min = numbers[0];

// for (const number of numbers) {
//   console.log(`${min} > ${number}`)
//   if (min > number) {
//     min = number
//   }
//   console.log(min);
// }

// console.log(`cel mai mic numar este: ${min}`);



/* 
  ^Version 3: Math.min(...variabila) / Math.max(...variabila)
  ^trebuie folosit operatorul: ...
*/
// const numbers = [2, 17, 94, 1, 0, 5, 23, 37, -10,];
// console.log(numbers);

// console.log(Math.min(...numbers));
