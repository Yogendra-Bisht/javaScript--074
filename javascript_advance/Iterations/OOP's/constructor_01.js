// Let us take an example of a constructor
class person {
    constructor(username, password){
        this.name=username;
        this.passcode=password;
        this.ex=function(){
            console.log(`my name is ${this.name} and my password is ${this.passcode}`);
            
        }

        }


    };
    
    
let user1=new person("abc", 123);
    let user2=new person("efg", 456);
    console.log(user1);
    console.log(user2);
    user1.ex();
    user2.ex();
    // Classes and constructors improve code organization, automate initialization, and make it easier to create and manage multiple objects with similar properties. They’re particularly helpful when working with complex applications that involve multiple objects sharing similar behaviors.