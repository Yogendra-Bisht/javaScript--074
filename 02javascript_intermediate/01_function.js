// This is about how we define a function 
function avg(a,b){
    return((a+b)/2);

    
};
// console.log(avg(4,3));
// another modern way is
let average=(a,b)=>{
    console.log(a+b)/2;
}

// average(5,8);
// Here are some example of function we will define for practica use 
// 1st => for print random number between 1 to 99
let randomNo = ()=>{
    let no = Math.floor((Math.random()*100)+1);
    return no
        
};
console.log(randomNo());
// So the function randomNo willl print the  random number between 1 to 100


// funcion for printing a number from 10 to 99
let twoDigits = ()=>{
    for(i=10; i<100; i++){
        console.log(i);
    }
};
twoDigits();

// let x= prompt("give the number");

// **********************************************
// Now we will discuss about function with objects and arrays
