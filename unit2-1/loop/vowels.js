// to start off well declare what vowels are else will be considered a consonant
// const vowels = ["a", "e", "i", "o", "u"];
//else will be considered a consonant

//  VALIUES TO TEST

/* 
"hello"
"ukelele"
"awesome"
"onomomonopia"
"textbook"

*/

const str = "ukelele";
// we have a string to test
let consonants = 0;
// we have assigned a variable to store the consonants
let vowels = 0;
// we have assigned a variable to store the vowels

for (let i = 0; i < str.length; i++) {
  // loop through the string
  if (
    str[i] === "a" ||
    str[i] === "e" ||
    str[i] === "i" ||
    str[i] === "o" ||
    str[i] === "u"
  ) {
    // check if the letter is a vowel
    vowels++;
    // if the letter is a vowel add 1 to the vowel variable
  } else {
    consonants++;
    // if the letter is not a vowel add 1 to the consonant variable
  }
}

console.log(
  str + " has " + vowels + " vowels and " + consonants + " consonants"
);

// results printed in order

/* 
hello has 2 vowels and 3 consonants
ukelele has 4 vowels and 3 consonants
awesome has 4 vowels and 3 consonants
onomomonopia has 8 vowels and 5 consonants
textbook has 2 vowels and 5 consonants


*/
