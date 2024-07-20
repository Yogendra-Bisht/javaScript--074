// This is about Arrays in javascript
// Indexing starts with 0
// this is how we can define an array
let myarr = [2,4,6,8,10];
// console.log(myarr);
// If we want to print perticular index of element 
console.log(myarr[2]);
// Here are some methods of array
console.log(myarr.length);
// This will return length of an array 
console.log(typeof myarr);
// Push method for adding element in array at the last index
myarr.push(12);
console.log(myarr);
// Pop method to remove an element from last index
myarr.pop();
console.log(myarr);
console.log("**************************************************************************");

// If we want to add or remove element at the first index of an array so we have shift and unshift method

//Example
let example = ["hello","javaScript","language","devloper","software" ];
console.log(example); 
example.unshift("one");
console.log(example);
example.shift();
console.log(example);
// That was about shift and unshift

console.log(example.slice(2,4));
// Does not changes the original array
console.log(example);
// Note -: push pop shift unshift splice sort etc are mutating methods of array or we can say these methods changes original array
example.splice(1,3)
console.log("This is splice--->");
// It removes element from array which are included in splice method
console.log(example);

example.sort();
console.log(example);
// myarr.sort();
// console.log(myarr);