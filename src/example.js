import { mean, median, mode } from 'statcalc';


const numbers = [1, 2, 3, 4, 5, 5, 6, 6, 7, 8, 9];
console.log(mean(numbers));    // Output: 5.090909090909091
console.log(median(numbers));  // Output: 6
console.log(mode(numbers));    // Output: [5, 6]

const emptyArray = [];
console.log(mean(emptyArray)); // Throws an error: Empty array
