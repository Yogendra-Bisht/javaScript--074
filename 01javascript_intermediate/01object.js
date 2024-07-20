// This is about object in javascript
// This is how we define a objet , It is the key pair value of elements
// console.log("Hello object");
let myobj={
    tony:"IronMan",
    steave:"Caption",
    wanda:"Witch",
    banz:"Winter soldiar"
};
// This is how we print whole array 
console.log(myobj);
// If we want to print a perticular value of any key
console.log(myobj.tony);
console.log(myobj.banz);
// console.log(myobj.length());
// if we want to cange the value of any ket
myobj["tony"]="R.D.J";
// There is another wa to change the value of key 
myobj.banz = "Bucky";


console.log(myobj);
let example = {
    fullName : "JsUser",
    Id : 8948,
    // [mykey]: "key1",
    Sr_no : "223" 

};

example["Id"]= 8476;
console.log(example["Id"]);
Object.freeze(example);
// It will freeze the defined object (example) or we can say It will ristrict the changes defined after this method so the below changes on example will not propagate in object
example["Id"]= 322;
console.log(example);

let example2 = {
    names : {
        first : "abc",
        second : "bcd",
        third : "efg"

    },
    id : "class",
    class : "first"
}
console.log(example["names"]);
// console.log(example["names"]["first"]);