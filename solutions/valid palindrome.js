// This question is asked by Facebook. 
// Given a string, return whether or not it forms a palindrome ignoring case and non-alphabetical characters.
// Note: a palindrome is a sequence of characters that reads the same forwards and backwards.


// Function that accepts a string and checks if its an alphabet
function isAlphabet(str) {
  let code;

  for(let i = 0, len = str.length; i < len; i++) {
    code = str.charCodeAt(i);
    if(!(code > 64 && code < 91) && !(code > 96 && code < 123)) {
      return false;
    }
  }

  return true;
}




// Function that accepts an array and then removes non-alphabetic characters by calling the isAlphabet function
function removeNotAlphabet (arr) {
  let newArray = [];
  for(let each of arr) {
    if( isAlphabet(each) ) {
      newArray.push(each)
    }
  }

  return newArray.join("");
}



// Function that checks if the string is a valid palindrome

function validPalindrome ( str ) {
  let normalString = str.split("");
  let reversedString = str.split("").reverse();

  normalString = removeNotAlphabet(normalString);
  reversedString = removeNotAlphabet(reversedString)

  return normalString.toLowerCase() == reversedString.toLowerCase()
}



console.log(validPalindrome('A man, a plan, a canal: Panama.'))  // Returns true
console.log(validPalindrome('level'))  // Returns true
console.log(validPalindrome('algorithm'))  // Returns false

