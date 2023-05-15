/* ill be looping over the following list and reverse them accordingly

[1, 2, 3]
[1, 3, 5, 7, 9, 11]
[20, 50, 30, 60, 200]

[1, -1, 2, -3, 5, -8, 13]


*/

let array = [1, 2, 3];
// start new array

let newArray = [];

// loop through array in reverse order

for (let i = array.length - 1; i >= 0; i--) {
  newArray.push(array[i]);
}

// print results

console.log(newArray); // [3, 2, 1]
/* 
results printed in order
[ 3, 2, 1 ]
[ 11, 9, 7, 5, 3, 1 ]
[ 200, 60, 30, 50, 20 ]

[
  13, -8, 5, -3,
   2, -1, 1
]


*/
