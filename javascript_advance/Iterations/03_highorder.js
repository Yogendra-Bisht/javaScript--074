// This is about map in javascript
// Ok so lets define ann array containing numbers
// The .map() method in JavaScript is an array method used to create a new array by applying a provided function to each element of the original array. The .map() method does not change the original array; instead, it returns a new array.
// let newArray = originalArray.map(callbackFunction);

let example1=[9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
let exampledouble1 = example.map( (double)=> double*2 )
console.log(exampledouble1);

// So it will print the double elements of array example
// let numbers = [1, 2, 3, 4];
// let squaredNumbers = numbers.map(function(num) {
//     return num * num;
// });
// console.log(squaredNumbers);.
let example=[9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
let exampledouble = example.map( (double)=> double*2 ).map((half)=>half/2);
console.log(exampledouble);
// It will print the the array containing same numbers because we used two map methods in first we did double of numbers and then we did half in second map method

// Basically its a mapping from one array to another created array
// Thats about it