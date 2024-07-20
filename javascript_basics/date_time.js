// Date and time in javaScript 
// Dates
let myDate = new Date();
console.log(myDate);
console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toTimeString);
console.log(typeof myDate);
// it is object
// But if we want to declear date
let myCreatedDate = new Date(2024, 0, 21);
let myCreatedDate1 = new Date("01-25-2024");
// This is how we declear dates in js
console.log(myCreatedDate.toDateString());
console.log(myCreatedDate.toLocaleString());
// console.log(Date);
let mydate = new Date();
console.log(myDate);
console.log(myDate.getTime());
// Now it will give time in miliseconds from jan 1 1970
// AAlso we can convert it in seconds simply by deviding it from 1000
console.log(Math.round(mydate.getTime()/1000));
// Math.round for round off the value of seconds 
// This is it