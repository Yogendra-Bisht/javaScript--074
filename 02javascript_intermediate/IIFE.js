// This is about immediately Invoke Function Expressions  ===> IIFE
// Basically IIfe used to avoid pollution created by global scope

// Its basically a function which immediately invoke
// We wwrite a function inside the () and for exicution we use ();
// Example :--

(function example(){

    console.log("DATABASE CONNECTION SECURED.....!!");
})();

// It will immediately invoke the function 
// Lets try with arrow function : ==>
// if it accepts any variable so it will look like this=>
(exapmle2=()=>{
    console.log("Database connection lost....!");
})();

// Now if the function takes parameters then we will difine like this

(example3=(name, id)=>{
    console.log(`Hello user.. my name is ${name} and my id is ${id}`);
})("Yogendra", 2256);
// It is required to end the function with ; otherwise the next function will throw an error
// SO this is about immediately invoke function expression
