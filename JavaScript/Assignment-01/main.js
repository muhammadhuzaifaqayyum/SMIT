// ---------------------------------------------------------------------------------------
// Answer no 01
// ---------------------------------------------------------------------------------------


let number1 = prompt("Enter the first number:");
let number2 = prompt("Enter the second number:");

// convert input strings to numbers
number1 = Number(number1);
number2 = Number(number2);

if (number1 > number2) {
  console.log("The larger number is: " + number1);
} else if (number2 > number1) {
  console.log("The larger number is: " + number2);
} else {
  console.log("The two numbers are equal.");
}


// ---------------------------------------------------------------------------------------
// Answer no 02
// ---------------------------------------------------------------------------------------

let number = prompt("Enter a number:");
number = Number(number);

if (number > 0) {
  alert("The sign is +");
} else if (number < 0) {
  alert("The sign is -");
} else {
  alert("The number is zero.");
}


// ---------------------------------------------------------------------------------------
// Answer no 03
// ---------------------------------------------------------------------------------------


let number1 = prompt("Enter the first number:");
let number2 = prompt("Enter the second number:");
let number3 = prompt("Enter the third number:");
let number4 = prompt("Enter the fourth number:");
let number5 = prompt("Enter the fifth number:");

// Convert input strings to numbers
number1 = Number(number1);
number2 = Number(number2);
number3 = Number(number3);
number4 = Number(number4);
number5 = Number(number5);

// Assume first number is largest
let largestNumber = number1;

// Compare the remaining numbers to the current largest number
if (number2 > largestNumber) {
  largestNumber = number2;
}
if (number3 > largestNumber) {
  largestNumber = number3;
}
if (number4 > largestNumber) {
  largestNumber = number4;
}
if (number5 > largestNumber) {
  largestNumber = number5;
}

console.log("The largest number is: " + largestNumber);


// ---------------------------------------------------------------------------------------
// Answer no 04
// ---------------------------------------------------------------------------------------


for (let i = 0; i <= 15; i++) {
    if (i % 2 === 0) {
      console.log(i + " is even");
    } else {
      console.log(i + " is odd");
    }
  }

  

// ---------------------------------------------------------------------------------------
// Answer no 05
// ---------------------------------------------------------------------------------------