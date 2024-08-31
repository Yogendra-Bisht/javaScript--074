// Here we will study about high order function in javaScript basically these are used for arrays in javascript
// OK lets take an example 
let example = ["Witch","Ghost","Fear","Horror"];

example.forEach((item,index)=>{
    console.log(index);
    
})
// first arument always will hold item name and secons will hold index

// Lets try with object inside an array

let myarray = [
    {
        htmm : "scelaton",
        css : "design",
        javascript : "functionalities"
    },
    {
        python : "artifitial inteligence"
    },
    {
        java : "software dev"

    }
]

// myarray.forEach((item)=>{
//     console.log(item.css);
    
// });
// Also we can use parameters index and array
// The first argument holds the value of item second holds index and third array
// Example :-
myarray1=[9,8,7,6,5]
myarray1.forEach((item,index)=>{
    console.log(`the item is ${item} and index of ${item} is ${index}`);
    

}) 
// This is about it