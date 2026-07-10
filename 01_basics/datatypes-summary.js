// DataTypes-Summary :-


//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id); // Symbol(123)
console.log(anotherId); // Symbol(123)

console.log(id === anotherId); // Output false 


const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]; // this a Array 
let myObj = {
    name: "hitesh",
    age: 22,
}  // this is a Object // iske andar ham String , number etc likh sakte hai.

const myFunction = function(){
    console.log("Hello world");
}  // this is a Function

console.log(typeof bigNumber); // Jab DataType pata karna ho kisi value ka tab ham typeof use karte hai.

// https://262.ecma-international.org/5.1/#sec-11.4.3

// console.log(typeof anotherId); // Symbol
//console.log(typeof Null); // object
//console.log(typeof function); // function
// console.log(typeof object); // object
// console.log(typeof bigNumber); // BigInt



//******************************************************************************************/

// Stack , Heap

// Stack is a used in Primitive DataType.
// Heap is a used in Non-Primitive DataType.

// Stack (Primitive), Heap(Non-Primitive)

 let myYoutubename = "Shivanisinghdotcom"

 let anothername = myYoutubename
 anothername = "chaiaurcode"

 console.log(myYoutubename); // Shivanisinghdotcom
 console.log(anothername); // chaiaurcode

 let userOne = {
    email: "user@google.com",
    upi: "user@ybl" 
 }

 let userTwo = userOne

 userTwo.email = "hitesh@google.com"
 
 console.log(userOne.email); // hitesh@google.com
 console.log(userTwo.email); // hitesh@google.com

 
 
