// // This is the third session on promises in javascript
// let promiseOne = new Promise(function(resolve, reject){
//     let x = setInterval(()=>{
//         console.log("Hello User");
//         resolve("done");
        
//     },2000)


//     clearInterval(x);


    

// })
// promiseOne
// .then((message)=>{
//     console.log(message);
    

// })
// .catch((error)=>{
//     console.log(`Error found : ${error}`);
    
// });

// ************************************************************************************ //

let example = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        condition = false;
        if(condition){
            console.log("Condition is true");
            resolve("Successful outcome")
        

        }
        else{
            console.log("Condition is falls");
            reject("Outcome failure")
        
        }
    },1000)
});

example
.then((X)=>{
    console.log(X);
    

})
.catch((Y)=>{
    console.log(Y);
    

});
// .then and .catch should be chained together

