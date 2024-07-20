/****************************Array in function ******************************************/
// Leta talk about rest or spread operator in function. It will use there where we dont know how many arguments will be passed by the user , so we have to store all these values in a single variable of array. and e define this variable with ... (3dots) with it in parameter like function cart (...values){} so the values stores all the arguments passed by user... now lets take an example :-
// example 1 :-

function Cart(...values){
    return values
}
console.log(Cart(1,2,3,4,5,6,7,8,9,0));
//  example2:-
function items(firstitem,seconditem,...others){
    console.log(firstitem);
    console.log(seconditem);
    console.log(others);

}
items("apple", "banana", "mango", "grapes", "watermelon", "peach", "orange");
// First two items goes in firstitem and seconditem rest will be in rest operator others

/**************************Object in function ************************************** */

// Now we will try to pass an object in a  function

// Declearing an object
 let user ={
    fullName : "Yogendra Bisht",
    id : 2103
 };
 
 function aboutUser(anyObject){

    console.log(`Hello my name is ${anyObject.fullName} and my id is ${anyObject.id}`);

 };
aboutUser(user);
// Also we can directly pass an object in function like
aboutUser({
    fullName : "Yogendra Singh",
    id : 4
});
// Similerly we can do this with array 
let myarr=[1,2,3,4,5,6,7,8,9,0];
function arrhandel(anyArray){
    console.log(`The secondelement of array is  ${anyArray[1]}`);
};
arrhandel(myarr);

// also we can directly pass an array in function
arrhandel([0,9,8,7,6,5,4,3,2,1]);