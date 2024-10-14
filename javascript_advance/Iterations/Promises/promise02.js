// Practice 02 in promise
let newPromise = new Promise(function(resolve, reject){
    setTimeout(()=>{
        console.log("Hello user Welcome : ");
        resolve("gratitude dispenced")
        
    },2000)
})
newPromise
.then((message)=>{
    console.log(message);
    
})
.catch((error)=>{
    console.log(`Error found : ${error}`);
    
})
