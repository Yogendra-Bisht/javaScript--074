// OK so this will be about constructor in javascript
class example {
    constructor(username, userid) {
        this.name = username;
        this.id = userid;
    }
};
let userdata = new example("Jhon",20);
console.log(userdata);
let userdata2 = new example("abc",10);
console.log(userdata2);
// Ok so in this case we used this keyword which refers the current context and the keyword new creates a new object each end every time when we runs a function and creates an object

// basically it will gives an object havings key pair values of parameters passed in function with the help of this keyword 
