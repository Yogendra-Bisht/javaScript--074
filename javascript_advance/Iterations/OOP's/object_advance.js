// Here are some advance concept of object in javaScript 
//like some properties of key value pairs and we have to manipulate the properties of those key value pairs
// This is how we can see those properties 
// Define an object
let example={
    Uttrakhand:"Dehradun",
    Himanchal_Pradesh:"Shimla",
    Punjab:"Chandigarh",
    Rajstha:"Jaypur"
}
// object of properties
console.log(Object.getOwnPropertyDescriptor(example,"Uttrakhand"));
// Changing writable property to false
Object.defineProperty(example,"Uttrakhand",{writable:false})
console.log(Object.getOwnPropertyDescriptor(example,"Uttrakhand"));
// Now trying to change the value of key "Uttrakhand"
example.Uttrakhand="Gairsain"
console.log(example)