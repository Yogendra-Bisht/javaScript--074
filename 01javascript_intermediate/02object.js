// freeze method freeze the applied changes on object 
// Object.freeze(objectName);
//it willl freeze the changes applied on object
// ******************************
console.log("This is object 02 ");


// If we want to decleare a symbol like 
const mySym = Symbol();
// We can include this in a object
let example={
    [mySym] : "Left",
    // This is symbol defined in object
    name : "jsUser",
    id : 985877,
    branch : "C.A"
};
// console.log(example["name"]);
console.log(example[mySym]);
console.log(typeof mySym);
console.log(example);

// We can define a function inside an object

let example2={
    name1 : "jsuser",
    age : 21,
    f1(){
        console.log(`hello ${this.name1}, is your age is ${this.age} ? And aslo remember your id is  ${this.id}`);
    },
    // This  is how we can define a function inside an object
    id : 2669824
};
example2.f1();
// This is how we execute a function
// Ok so this was about symbol and function in an object
