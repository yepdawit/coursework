// to start off ill be creating a simple function that accepts numbers provided and ony displays the odd numbers
// this function will be called oddNumbers
// the function will accept a number as a parameter
// the function will then loop through the numbers provided and check if the number is odd
// if the number is odd it will be displayed

/* 
here is a list of values to test inside the array box
[2, 4, 6, 8, 11, 20, 15, 22]
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 [70, 42, 55, 81, 21, 91, 34]
[2, 4, 6, 8, 10, 11, 12] 
 */

const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// we have an array of numbers

const odd = [];

// we have an empty array to store the odd numbers
// loop through the array of numbers

for (let i = 0; i < numArr.length; i++) {
  // check if the number is odd
  if (numArr[i] % 2 !== 0) {
    // if the number is odd push it to the odd array
    odd.push(numArr[i]);
  }
}

// print results
console.log(odd); // [11, 15]
/* 
results printed in order
[11,15]
[ 1, 3, 5, 7, 9 ]
[ 55, 81, 21, 91 ]
[ 11 ]
 */
