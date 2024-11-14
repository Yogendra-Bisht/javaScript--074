// This is about prototype in javascript 
/*In JavaScript, a prototype is a mechanism by which objects inherit properties and methods from one another. Think of it as a blueprint or a template that defines the shared characteristics of objects created from it.*/ 
/*every object has a prototype:
Every JavaScript object has an internal link to another object, known as its prototype. This prototype object can also have its own prototype, forming a chain of prototypes known as the prototype chain.  */


let example={
    first : "01",
    second : "02",
    third : "03",
    example2 : function (username, userid){
        console.log(`hello ${this.username} your userid is ${this.userid}`);
        

    }
};
// console.log(example);
// example.example2("Rob",224)
// console.log(example);
console.log(example.prototype);





