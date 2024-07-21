// now we will talk about nested scope in javascript

function one(){
    let example1= "nora";
    console.log(`This is first function and the variable value is ${example1}`);
    function two(){
        let example2 = "cassendra"
        console.log(`full name is ${example2} ${example1}`);
    
    }
    two();

    
};
one();

// Note :- The nested function can access the variable of parent function but the variable of child function can not be accessed by the parent function 

// *************************Intresting thing about function**************************
// In a normal function .. we can call the function before its initialization like

example3();
function example3(){
    console.log("I am inside the example3 function");
};

// But in arrow function it is not possible to access the function before intialization 

// example4();
// It will throw an error
let example4=()=>{
    console.log("I am inside the example4 function ");
};
example4();
// So we can only access the function after initialization 

// This intresting thinh known as hoisting.........
