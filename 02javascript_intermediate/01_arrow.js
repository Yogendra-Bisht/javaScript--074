// We'll discus about arrow function and this keyword in this file 


// This keyword:-
// lets define a function 
// function one(){
    
//     fullname:"Yogendra",
//     id:984,
    
//     console.log(this.myobj);
//     // console.log(this.myobj);
// };
// one();


// ********************
let userdata ={
    username : "Yogendra Bisht",
    id : 824,
    isLogedIn : true,
    fetchdata : function getdata(){
        console.log(`welcome ${this.username} you id is ${this.id}`);
        // console.log(this);
    }
}
userdata.fetchdata();
// Basically this keyword refers the current context

// ********** Now lets talk about arrow function in javascript
// Basically arrow function is a declearation method of a function 
// example:-


const example =(x,y)=>{
    return (x+y)/2
}

console.log(example(3,4));


// If we are using return keyword in function this is known as explicit return
// But in implicit return we wont use return keyword in function ie. 
// and also wo wont use curly braces
let example2 = (a,b)=> a+b
console.log(example2(2,3));

// Also we can use parantheses

let example3 = (a,b)=>(a+b)
console.log(example(9,34));

// if we are declearing object in function in implicit return 
 let example4 = (a,b)=>({username : "yogendra"});
 console.log(example4());





