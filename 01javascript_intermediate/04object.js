// console.log("This is about de-structure of object and some part of API");
// first we will define an object
let myobj = {
    userFullName:"yogendra",
    id : 88643,
    male:true
}
// console.log(myobj["name"]);
// now we will destructure this object
const{userFullName : Name} = myobj;
console.log(Name);
// Now this will print userFullName

// **************************************
// This is JSON format looks like
// {}
// The values or data comes from backend in JSON format. it look like object format or we can say object without name
// ie
// {
//     "name":"yogi",
//     "course":"iuwoi"
// }
