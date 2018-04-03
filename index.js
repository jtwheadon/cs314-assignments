
// Global Functions

// Gets a string from the user
// minLength = minimum length of the string
function getString(minLength) {
  let userString = prompt("Enter a string that is atleast " + minLength + " character(s) long");
  if (userString == null || userString.length < minLength){
    return getString(minLength);
  }
  else {
    return userString;
  }
}

// Gets a list of strings
// use -1 if number of strings doesnt matter
function getStrings(numStrings) {
  let promptQ;
  if (numStrings == -1) {
    promptQ = "Enter strings separated by commas";
  }
  else {
    promptQ = "Enter " + numStrings + " strings separated by commas"
  }
  let userStrings = prompt(promptQ);
  if(userStrings == null || userStrings === "") {
    return getStrings(numStrings);
  }
  userStrings = userStrings.replace(/\s/g, '');
  userStrings = userStrings.split(",");
  if (userStrings.length === numStrings || numStrings == -1) {
    return userStrings;
  }
  else {
    return getStrings(numStrings);
  }
}

// Gets a list of integers from user
function getIntegers() {
  let userInts = prompt("Enter integers separated by commas");
  if (userInts == null || userInts === "") {
    return getIntegers();
  }
  testInts = userInts.replace(/,,/g,"x");
  testInts = testInts.replace(/,/g,"");
  if (isNaN(testInts) || userInts.charAt(0)===',' || userInts.charAt(userInts.length-1)===",") {
    alert("You must only use integers separated by commas, no spaces or letters");
    return getIntegers();
  }
  else {
    return userInts.split(",");
  }
}


/*
1. Char Swap

Write a JavaScript function to create a new string from an input string from
the user swapping the position of first and last characters. The string length entered by
the user must be greater than or equal to 1.
*/
function charSwap() {
  let originalString = getString(1);
  let newString;
  if (originalString.length == 1) {
    newString = originalString;
  }
  else {
    let first = originalString.charAt(0);
    let last = originalString.charAt(originalString.length-1);
    let middle = originalString.substring(1,originalString.length-1);
    newString = last + middle + first;
  }

  return newString;
}

/*
2. Hi String

Write a JavaScript function that asks for a string from the user and returns a
new string adding "Hi" in front of the input string. If the input string begins with "Hi" then
return the original string. The string length entered by the user must be greater than or
equal to 1.
*/
function hiString() {
  let userString = getString(1);
  if (userString.substr(0,2) == "Hi") {
    return userString;
  }
  else {
    return "Hi" + userString;
  }
}

/*
3. Three Chars to Front

Write a JavaScript function to create a new string from an input
string taking the last 3 characters and adding them to the front of the string. The string
length entered by the user must be at least 3 characters long.
*/
function threeCharsToFront() {
  let userString = getString(3);
  let threeChars = userString.substring(userString.length-3);
  return threeChars + userString;
}


/*
4. Strings to Sentence

Write a JavaScript function that asks for a list of items from the
user separated by commas. Convert this to an array without the commas or extra
spaces. Alert the items back to the user with a single saying that is formed using
backticks (``).
Example:
input from user: blue, dogs, chocolate
output from function: My favorite color is blue, dogs are awesome, and I love chocolate!
*/
function stringsToSentence() {
  let userStrings = getStrings(3);
  return `I like ${userStrings[0]} and ${userStrings[1]} and ${userStrings[2]}`
}

/*
5. Upper or Lower

Write a JavaScript function that asks for a string from the user and
creates a new string from that string where the first 3 characters are lowercase. If the
string length entered by the user is less than 3 convert all the characters in upper case.
*/
function upperOrLower() {
  let userString = getString(1);
  if (userString.length < 3) {
    return userString.toUpperCase();
  }
  else {
    return userString.substr(0,3).toLowerCase() + userString.substring(3);
  }
}


/*
6. Integer Swap

Write a JavaScript function that asks for a comma separated list of
numbers from the user and swap the first and last elements of a given array of integers.
Alert the result to the user. The array length given from the user should be at least 1.
*/
function integerSwap() {
  let userInts = getIntegers();
  let end = userInts[userInts.length-1];
  userInts[userInts.length-1] = userInts[0];
  userInts[0] = end;
  alert(userInts);
  return userInts;
}

/*
7. Longest String

Write a JavaScript function that asks for a comma separated list of
strings from the user and alerts the longest string from the given array of strings.
*/
function longestString() {
  let userStrings = getStrings(-1);
  let currLong = 0;
  for (let i in userStrings) {
    if (userStrings[i].length > userStrings[currLong].length){
      currLong = i;
    }
  }
  alert(userStrings[currLong]);
  return userStrings[currLong];
}


/*
8. Largest Even Number

Write a JavaScript function that asks for a comma separated list
of numbers from the user. Convert this list to an array of numbers and alert the largest
even number from the array of integers.
*/
function largestEvenNumber() {
  let userInts = getIntegers();
  let currMax = 0;
  for(let i in userInts) {
    if(userInts[i] > userInts[currMax]){
      currMax = i
    }
  }
  alert(userInts[currMax])
  return userInts[currMax];
}

/*
9. Current Day Time

Write a JavaScript function that alerts the current day and time in the
following format:
Example:
Today is Friday.
It is 4:00PM.
*/
function currentDayTime() {
  let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  let currDate = new Date();
  let dayOfWeek = days[currDate.getDay()]
  let hour;
  let ampm;
  let milHour = currDate.getHours();
  if (milHour === 0 || milHour > 12) {
    ampm = "PM";
    if (milHour === 0) {
      hour = 12;
    }
    else {
      hour = milHour-12
    }
  }
  else {
    ampm = "AM";
  }
  let minute = currDate.getMinutes();
  alert(`Today is ${dayOfWeek}.
It is ${hour}:${minute}${ampm}`);
}

/*
10. Unlimited Function

Write a JavaScript function that accepts an unlimited number of
arguments and prints them out in a single string in a single alert.
*/
function unlimitedFunction() {
  let alertString = "";
  for (let i in arguments) {
    alertString = alertString + arguments[i];
  }
  alert(alertString);
}
