// This is about while and do while loop in javascript
// While loop :- 
// initialization 
// condition 
// increament

let i =1;
while(i<=20){
    console.log(`Table of ${i} `);
    console.log("---------------");
    
    let j=1;
    while(j<=10){
        console.log(`${i}*${j}= ${i*j}`);
        j++
    }
    i++

}
// SO this is the nested while loop...
// similarly here we have do while loop in javascript and here is some twist that the do while loop runs at least one time if the condition matches or not it will run one time at least the reason behind this is that we check the condition at the last of loop
let x= 1;
do{
    console.log(x)
    x=x+2;
}
while(x<=10);
// This is the syntex of do while loop in javascript 


// Basicaly the loop works in three steps 1. initialization 2. condition 3. increament   , The order of these steps can change acording that which loop are we using
