// A promise is an object representing the eventual completion or faliure of an asynchronous operation
// Also we can consume the promises and create the promises
// lets take an example and create a promise
// console.log("hello there");
const promiseOne = new Promise((resolve, reject)=>{

    setTimeout(function(){
        for(i=0; i<20; i++){
            console.log(i);
            

        }
        resolve("Task completed")
    },2000)
    // resolve("complete")
})
// Now we need to consume the
promiseOne
.then((message)=>{
    console.log(message);
    
})
.catch((error)=>{
    console.log(error);
    

})
