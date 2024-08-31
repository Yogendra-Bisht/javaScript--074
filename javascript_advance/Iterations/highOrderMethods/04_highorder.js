// We will talk about more high order function of array
// The .reduce() method in JavaScript is used to reduce an array to a single value by executing a reducer function on each element of the array, from left to right. The reducer function takes an accumulator (which holds the accumulated result of the previous operations) and the current element and combines them to return a single value.
// Let's take an example of array 
let my_array = [2, 4, 6, 8, 10];
let value = my_array.reduce((accumulator,currentValue)=>accumulator+currentValue,5);

console.log(value);

// This is the basic syntax of reduce method of array
// It has used a accumulator which is a variable holds initial vlue which is currently 0

const example = [5, 4, 3, 2, 1];
let product = example.reduce((acc,curval)=>acc*curval,1)
console.log(product);

// This is the example with multiplication elements of arrays with each other
// Thats about it