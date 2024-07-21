// We will talkabout scope in javascript 
// There is basically two type of scope in javascript
// 1st - local scope 2md - global scope
// example of global scope :-
let a = 10;
let b = 20;

function average(){
    // let a;
    // let b;
    console.log((a+b)/2);
};

average(a,b);
// console.log(a);

// *************************************
// let fullname = "yogi";


// This is the example of block scope variable 
// There is a variable full name which is decleared inside the block and also it can only accessible inside that perticular block

if(true){
    let fullname = "yogi";
    console.log("my name is ", fullname);

}
// console.log("my name is ", fullname );
// fullname can not be accedded outside that block
