// FUncrion demo

// Create a fully functioning calculator

/* 

[function keyword] [function name] [paranthesis] [curly braces or code block]

{inside the curly braces is the brain of the function i.e. the code that will be executed when the function is called}


Function declaration
*/
// function addition(a , b){} // function keyword, function name, paranthesis, code block // -------------------> anything these lines are only visible and usable to the function itself ~`

/* 
function expression
    - Able to be anonymous
    - Able to be stored in a variable
    - Able to be passed as an argument to another function


*/

function additon(value1, value2) {
  let sum = value1 + value2;
  console.log(sum, "line 25");
  return sum;
}

let returnedvalue = additon(2, 3);

console.log(returnedvalue, "line 33");
