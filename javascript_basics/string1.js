let example="Hello javaScript";
console.log(example);
// ********************************************
// Here are some more methods on strings


// Slice method to slice the string
console.log(example.slice(2,8));
// to replace the part of string
console.log(example.replace("javaScript","J.S"));
// trim method to remove whitespaces from string
// note- only remove whitespaces from start and end of string 
console.log(example.trim());
// charat to find the character at given index in string
console.log(example.charAt(2));
// indexof to find the index of character of string
console.log(example.indexOf('o'));
// include for check the given string is included or not
console.log(example.includes("java"));
// Conactination of string
let example2="Devloper";
console.log(example.concat("-", example2));