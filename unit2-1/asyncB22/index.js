// asynchtonous code literally means that the code is not executed in the order it is written
// it enables our ptogram to start a potentially long running task, without blocking the code that comes after it
// this is the reason why we can have multiple programs running at the same time
// the code is executed in the order it is written
console.log("i happen first"); // this runs first in the console.
setTimeout(() => {
  console.log("i happen third");
}, 3000); //this is a timer function, it takes two arguments, the first is a function, the second is the time in milliseconds
console.log("i happen second");
// the function that is passed to the setTimeout function is called a callback function

//what is "asynchronous code"?

// my code <---> event loop <---> web api's <---> callback queue

console.log("i happen first"); // this runs first in the console.
setTimeout(() => {
  // this is a timer function, it takes two arguments, the first is a function, the second is the time in milliseconds
  console.log("i happen third"); // this is the callback function
}, 3000); // this is the time in milliseconds
console.log("i happen second"); // this runs second in the console.

/* 
old way of doing things
console.log("i happen first");
fs.readFile("text.txt", (err, data) => {
 console.log("i happen third");
});
console.log("i happen second");
this is the old way of doing things, it is called a callback hell, it is not very readable, and it is hard to debug
 
-----------------------------------------*/
/* 
problems with callbacks
1. callback hell
2. lack of proper error handling
3. inability to return properly from callback
4. inability to perform multiple asynchronous operations together
5. callback functions are not cancelable
6. callback functions are not composable
 */

// ----------------We arer gonna use promises   --------------------
// is a js object that represents the eventual result of an asynchronous operation
// just an object with value and status
// we just put async then we put the function
// async and await are just syntactic sugar for promises they make the code look cleaner
/* const tryGetRich = async () => {
  let num = await readFileAsync("/luckyNumber.txt");

  let success = await bookmaker.ber(num);

  if (success) {
    console.log("you won");
  } else {
    console.log("you lost");
  }
}; */

// Try/catcch
// the try/catch block is used to handle errors
// the try block lets you test a block of code for errors
// api application programming interface
//set of functions that allow you to access data or features of an application or other service
// client <-----> Rest API <-----> server/database

// rest api example in english
// Get --> get data
// post --> create data
// put --> update data
// delete --> delete data

// http methods
// http methods      safe?   idempotent?
// get               yes     yes
// post              no      no
// put               no      yes
// delete            no      yes
// patch             no      no

//Crud operations
// create --> post
// read --> get
// update --> put
// delete --> delete

// Static pages and dynamic pages
// static               dynamic pages

/* -*-*-*-*-*-*-*-*-*-**-*-*-*-*-*-*-*-*-- */

// parsing responses
// parsing is the process of transforming a string into a data structure
// JSON.parse() is a method that parses a JSON string, constructing the JavaScript value or object described by the string

// JSON.stringify() is a method that converts a JavaScript object or value to a JSON string
