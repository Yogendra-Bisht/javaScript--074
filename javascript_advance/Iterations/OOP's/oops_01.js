// This is about object oriented programming in javascript we'll discuss about object and  classes in js 
// There are 4 main pillers of object oriented programming
/*
1. Abstraction
2. Encaptulation 
3. Polimorphism
4. Inheritance
*/ 

// This is an object littral
let exampleobj={
    username: "user1",
    is_logged_in: true,
    workload: "medium",
    logincount: 0,
    user: function(){
        console.log(`the username is ${this.username} and is logged in ${this.is_logged_in} and workload is ${this.workload}`);
        // Also we know that this used for current context
        
    }
};
console.log(exampleobj.user());
// So this was about object littral and current c
ontext 


// Constructor
    function myfun(user, dob){
    this.user=user;
    this.dob=dob;
    console.log(this);

};
// myfun(a,b);
myfun("Hello","user");

