/*Example 2 - Arrays and Strings

Write a script to calculate the area of a rectangle with sides, which
values are stored in the `values` variable as a string. Values guaranteed
separated by a space.
*/

const values = "8 11"

const rectangleSizes = values.split(" ");
console.log(rectangleSizes)


const rectangleWidth = Number(rectangleSizes[0]);
const rectangleLength = Number(rectangleSizes[1]);

const rectangleArea = rectangleWidth * rectangleLength;
console.log(rectangleArea);

