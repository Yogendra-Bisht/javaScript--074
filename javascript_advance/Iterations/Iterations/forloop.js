// This is about loops in javaScript........

// For loop :-
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }
// This is the syntex of for loop
// This is a for loop inside a for loop

for (let i = 1; i <=20; i++) {
    console.log(`Table of ${i} :- `);
    console.log("-----------------");
    for (let j = 1; j <=10; j++) {
        console.log(`${i} * ${j} = ${i*j}`);;
        
    }
    
}
// Also we can use loop with arrays and its index 
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

//also here are some keywords which can be used in loop like break and continue using if statement here is an example : - 
for(let i=0; i<=15;i++){
    if(i==10){
        console.log("10 detected :");
        break;
    }
    console.log(i);
}
// If we will use continue instead of break it will skip the printing of 10 (1 step of loop) and continue from there i.e :- in same example if we use continue

for(let i=0; i<=15;i++){
    if(i==10){
        console.log("10 detected :");
        continue;
    }
    console.log(i);
}

// So this is about break and continue which we can use in loops using if statement

