/**
 * MINIMUM
 *
 * to run code from this file use: npx nodemon 4-min
 *
 * 4.1 Write a function that will bring two Number arguments and will return the minimum of these two arguments
 *
 * 4.2 Optional: Modify the min function created before to bring an array of numbers as a
 *    single argument and return the smallest number from this array.
 *    (e.g: console.log(minArr([2, 4, -4, 10, 0, -9, 17]));  → -9
 *
 * Do not use Math.min
 */

// Your code here.
//
// Use these commands to test your code:
//
//console.log(min(0, 10));
// → 0
// console.log(min(0, -10));
// → -10
//

const printMin = (array) => {
    if (Array.isArray(array)) { //checking if an array was passed
        if (array.every((el) => typeof(el) === 'number')) { //checking if all elements are numbers, I guess could have used !isNaN
            let minValue = array.reduce((accumulator, currentValue) => {
              return accumulator < currentValue ? accumulator : currentValue;
            });
            return minValue;
        }
        else return 'Not all elements are numbers';        
    }
    else return 'You did not pass an array';
};

console.log(printMin([2, 4, -4, 10, 0, -9, 17]));

