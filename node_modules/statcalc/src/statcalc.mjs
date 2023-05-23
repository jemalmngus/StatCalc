// statCalc.js

// Calculate the mean of an array of numbers
function mean(numbers) {
    if (numbers.length === 0) {
      throw new Error('Empty array');
    }
    const sum = numbers.reduce((acc, val) => acc + val, 0);
    return sum / numbers.length;
  }
  
  // Calculate the median of an array of numbers
  function median(numbers) {
    if (numbers.length === 0) {
      throw new Error('Empty array');
    }
    const sorted = numbers.sort((a, b) => a - b);
    const mid = Math.floor(sorted.length / 2);
    if (sorted.length % 2 === 0) {
      return (sorted[mid - 1] + sorted[mid]) / 2;
    } else {
      return sorted[mid];
    }
  }
  
  // Calculate the mode of an array of numbers
  function mode(numbers) {
    if (numbers.length === 0) {
      throw new Error('Empty array');
    }
    const counts = {};
    numbers.forEach((num) => {
      counts[num] = counts[num] ? counts[num] + 1 : 1;
    });
    let maxCount = 0;
    let modes = [];
    for (const num in counts) {
      const count = counts[num];
      if (count > maxCount) {
        maxCount = count;
        modes = [num];
      } else if (count === maxCount) {
        modes.push(num);
      }
    }
    return modes.map((num) => Number(num));
  }
  
  // Export the functions
  export {
    mean,
    median,
    mode,
  };
  