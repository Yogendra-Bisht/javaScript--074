// Third part of javascript object 
// Singalton object define
// let myobj = new Object();
// console.log(myobj);
let myobj={};
myobj.name="Yogi";
myobj.age="21";
// console.log(myobj);
// now we will discuss about nested object
let myobj2={
    levels : {
        level1 : "easy",
        level2 : "moderte",
        level3 : "hard"
    },
    players : {
        level1 : 100,
        level2 : 50,
        level3 : 25
    },
    award : {
        level1 : "none",
        leel2 : "none",
        level3 : {
            last15 : "certificate",
            top10 : "certificate + cashprize"
        }
    }


}
// console.log(myobj2.award.level3);
// This property tell us the object is frozen or not
// console.log(Object.isFrozen(myobj2));

// There is a method of object similer to frozen which is Object.seal(example) but in this case but it allows modification on existing properties value. but we canot add extra elements 
// Object.seal(example) // seals the object

// console.log(Object.keys(myobj2.award.level3));
// This will print only keys of award in myobj
//Similerly
// console.log(Object.values(myobj2));
// It will print the values of keys in object

// Ok so this will about how we can join or add two object in an  object

let person1={
    name : "jsUser",
    role : "frontendDevloper"
};
let person2={
    name2 : "javaDevloper",
    role2 : "backendDevloper"

};
// Now we will join or add these two objects like we did in arrays
let userData ={...person1, ...person2};
// console.log(userData);
console.log(userData);
// note they keys should have identical

// Now we will talk about the destructure of object in next lesson

