// We will takl about the control flow in javaScript in this session , It is basically about if else switch case statement
//  If statement looks like this \
isloggedin=""
if (isloggedin) {
    console.log("Hello user you are logged in ");

    
}
else{
    console.log("please log in again");
}
// Here are some falsy and truthy valuse in conditionals 
// falsy means which will be consider as false like :- false , 0, -0, "", null ,undefined, NaN, BigInt 0n
//Also we have some truthy value which will act as a true likr :- true , " ", "false", "any non empty string", "0", [], etc
// The example is given above....

// Lets try an another example :-

let pt1 = 20;
let pt2 = 100;
let pt3 = 500;

if(pt1>=19 || pt2<=35 || pt3<50){
    console.log("Here is oly one condition is true but still this block has been executed");
}
else{
    console.log("Please log in again !");
}
// Lets try something else
let platform1 = "facebook";
let platform2 = "";
if(platform1&&platform2){
    console.log("if both will true then this block will executed");

}
else{
    console.log("this block will executed if any of the condition remain false ");
}
// We used some fals and truthy values in this statement also some operators which considers multiple vlues as condition 

// lets do a switch case statement
let month = 10;

switch (month) {
    case 10:
        console.log("This is October");
        
        break;
    case 11:
        console.log("This is November");
        
        break;
    case 12:
        console.log("This is December");
        
        break;
    case 1:
        console.log("This is january");
        
        break;
   

    default:
        console.log("This is not a winter month");
        break;
}

// This is about it.