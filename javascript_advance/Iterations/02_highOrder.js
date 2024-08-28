// Ok so in this session we will talk about a high order function which is known as filter 
// It returns a new array 
const books = [
    {
      name: "To Kill a Mockingbird",
      author: "Harper Lee",
      edition: "1st",
      genre: "Fiction",
      year: 1960
    },
    {
      name: "1984",
      author: "George Orwell",
      edition: "1st",
      genre: "Dystopian",
      year: 1949
    },
    {
      name: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      edition: "1st",
      genre: "Classic",
      year: 1925
    },
    {
      name: "The Catcher in the Rye",
      author: "J.D. Salinger",
      edition: "1st",
      genre: "Fiction",
      year: 1951
    },
    {
      name: "Moby-Dick",
      author: "Herman Melville",
      edition: "1st",
      genre: "Adventure",
      year: 1851
    },
    {
      name: "Pride and Prejudice",
      author: "Jane Austen",
      edition: "1st",
      genre: "Romance",
      year: 1813
    },
    {
      name: "The Hobbit",
      author: "J.R.R. Tolkien",
      edition: "1st",
      genre: "Fantasy",
      year: 1937
    },
    {
      name: "War and Peace",
      author: "Leo Tolstoy",
      edition: "1st",
      genre: "Historical Fiction",
      year: 1869
    },
    {
      name: "The Odyssey",
      author: "Homer",
      edition: "Ancient",
      genre: "Epic",
      year: "8th Century BC"
    },
    {
      name: "Crime and Punishment",
      author: "Fyodor Dostoevsky",
      edition: "1st",
      genre: "Psychological Fiction",
      year: 1866
    }
  ];
  
//   So let's try to print an array havingobject of all fiction books

let fiction_books = books.filter( (fbo)=>fbo.genre==="Fiction" );
console.log(fiction_books);
// so This will print the list of object wich have books of fiction genre


// Similerly we will try with edition
let book_edition_ancient = books.filter((abe)=>abe.edition==="Ancient")
console.log(book_edition_ancient);

// question - Problem: Given an array of employee objects, return a new array containing only the employees who are older than 30.
const employees = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 35 },
  { name: "Charlie", age: 32 },
  { name: "David", age: 28 }
];
// Expected output: [{ name: "Bob", age: 35 }, { name: "Charlie", age: 32 }]

let objects=employees.filter((ages)=>ages.age>30);
console.log(objects);

// Problem: Given an array of product objects, sort the array by price in ascending order.
const products = [
  { name: "Laptop", price: 1000 },
  { name: "Phone", price: 500 },
  { name: "Tablet", price: 750 }
];
// Expected output: [
//   { name: "Phone", price: 500 },
//   { name: "Tablet", price: 750 },
//   { name: "Laptop", price: 1000 }
// ]

//That is about it 