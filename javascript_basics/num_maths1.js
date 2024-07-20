// This is the practice of math and num in javaScript
// Math is a default library which comes with javaScript
let example = 125;
// Here are some proprties of numbers 
console.log(example.toString());
console.log(typeof example);
console.log(example.toFixed(3));
// Fixed decimal value upto 3 decimal points
let example2 = 234.897;
console.log(example2.toPrecision(4));
// Precised value upto 4 digits
let example3=1000000;
console.log(example3.toLocaleString());
// ***********************************************************************
// Math libary in javascript
console.log(Math.abs(-52));
// Converts negative number to positive--------> 52 
console.log(Math.round(4.6589));
console.log(Math.round(4.3589));

// Round off value ----------> 5
// Roumd off value ----------------> 4

// But if we want to rund off the value explicetly tending to lower or heigher value
console.log(Math.ceil(4.23322));
// It will give 5 roundof value because we wnat heigher value
// Similerly
console.log(Math.floor(5.9659));
// It will give the minimum value after roundoff -------------> 5


console.log(Math.min(1,5,3,7));
// Chooses the minimum value -------> 1

console.log(Math.max(1,5,8,6));
// Chooses the maximum value -------> 8

//imp..
console.log(Math.random());
// Gives a random value between 0 and 1
console.log((Math.random()*100)/10);







