// This is the second session on constructor
// We will se the code architecture using constructor and withot using constructor
// Method 1 - creating books of same subject using constructor
class book{
    constructor(price,author,subject,topic,edition){
        this.price=price
        this.author=author
        this.subject=subject
        this.topic=topic
        this.edition=edition
        this.about=function(){
            console.log(`This is a book of ${this.subject} written by ${this.author}, price of this book is ${this.price} and it is the ${this.edition} edition, elaborated topic is ${this.topic}`);
            
        }

    }
} 
// created a book constructor, using that we can construct multiple book object having similer keys as constructor
// Creating object of multiple books
let book_1=new book(1599,"N. Zetly","Physics","Quantum physics","Second")
console.log(book_1);
book_1.about();

let book_2=new book(1899,"J. pauli","Maths","Ring theory","First")
console.log(book_1);
book_2.about();

let book_3=new book(2500,"Ashwini CHandra","Physics","Atomic and nuclear physics","Fourth")
console.log(book_1);
book_3.about();

// Created 3 different book object having similer keys 