// This is about getters and setters function in javascript
class user{
    constructor(password,uid){
        this._password= password
        this._uid=uid

    }
    get password(){
        return this._password.toUpperCase()
    }
    set password(value){
        this._password=value

    }
    
}
let user1=new user("aeiou",22455)
console.log(user1);

console.log(user1.password);
// So basically whats happening here that if i print user 1 itt will give that basic object (like key pair values that we have passed ) but if we try to print that perticular key of that object corresponding to get method iw will get that modified value as we defined in getter method
// So if i want to print modified password so
// console.log(user1._password);

// 

// console.log(password());
// Similerly there is a function which set the properties to keys
// Like if we try to change the properties corresponding setter  
// ie.
user1.password="asdf"
console.log(user1);
// It will give the normal object user1 as usual 
// But if we try to access the perticular password it will be encrypted by getter again and prints modified value
console.log(user1.password);
// that ws about it




