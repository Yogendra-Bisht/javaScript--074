// console.log("Hello js");
let example = [5, 10, 15, 20, 25, 30, 35];
// console.log(example.slice(1,3));
// console.log(example);
// console.log(example.splice(1,3));
// console.log(example);
// ok so basically splice method returns removed elements from array(both initial and final index will be included)
// and slice method returns a copy of a slice of an array(does not include the final index)
/***************Array2 Vid.lec. 15 **********************/
let example2= [40, 45, 50, 55, 60, 65];
let example3= [70, 75, 80, 85, 90];
// example.push(example2);
// console.log(example);
// console.log(example[7][3]);
// this is old method to combine two array but it creates sub array inside an array 
// But it changes the original array
let myarr=example.concat(example2);
console.log(myarr);
// This is the method to join or concat two arrays
// Here is the new methos to add or join two or more arrays
let myarr2=[...example, ...example2, ...example3];
console.log(myarr2);
// It will join example example2 exampl3 in a single array named myarr2
//This is the most used method to join or concat two or more arrays although we can use concat mehtod but this is prefred
// Does not changes the original arrays
console.log(example);

// Now we will discuss about flat method of in arrays in javascript
// It will return a single normal arry of an array which has some sub arrays 
let example4=[1,2,3,[4,5,6,[7,8,9],10],11,12];
// console.log(example4[3][3][1]);
// now we will convert it in a normal array which wont has subarrays on it and also we will have to define depth of normalization
let example5=example4.flat(Infinity);
console.log(example5);

let example6= "javaScript";
console.log(Array.isArray(example6));
// Array.isArray is a function which tells the example is array or not it will return true if example is array . in this case it will return false
console.log(Array.from(example6));
// Array.from will convert example into ana array which is string right now 
// It will return nothing if this function is unable to convert in array
let a= 200;
let b= 400;
let c=600;
console.log(Array.of(a,b,c));



