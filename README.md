# StatCalc

StatCalc is a mathematical package for performing statistical calculations.

## Installation

You can install StatCalc using npm:

```bash
npm install statcalc

```

## Usage

```javascript 
// Import the statcalc module
import { mean, median, mode } from 'statcalc';


const numbers = [1, 2, 3, 4, 5, 5, 6, 6, 7, 8, 9];
console.log(mean(numbers));    // Output: 5.090909090909091
console.log(median(numbers));  // Output: 6
console.log(mode(numbers));    // Output: [5, 6]

const emptyArray = [];
console.log(mean(emptyArray)); // Throws an error: Empty array


```

## API

### `mean(numbers)`

Calculates the mean of an array of numbers.

- `numbers` (Array): An array of numbers.
- Returns: The mean value as a number.

### `median(numbers)`

Calculates the median of an array of numbers.

- `numbers` (Array): An array of numbers.
- Returns: The median value as a number.

### `mode(numbers)`

Calculates the mode of an array of numbers.

- `numbers` (Array): An array of numbers.
- Returns: An array containing the mode(s) of the input array.

