"use strict"; // treat all JS code as newer version


// alert( 3 + 3) // we are using nodejs , not browser
                 // ye browser par run karne ke baad POP aayega na ki nodejs par .


console.log( 3
     +
      3) // code readability should be high
      // Means ki aise likhne ka koi tarika nhi hai. 
      //aise likhne se readability kharab hoti hai , aur achha nhi lagta hai read karne mein  


console.log( "Shivani")


// Datatypes in js :
let name = "Shivani" // String
let age = 20 // Number
let isLoggedIn = false // Boolean
let state; // undefined

/* 1. Number => 2 to power 53
   2. Bigint => jab bhut bada number ho tab use hota hai 
                specially - Trading
                          - Stock market etc ...
   3. String => " "
   4. Boolean => true/false
   5. Null => standalone value
   6. undefined => jab vlaue assign na ho tab output mein undefined show hota hai.
   7. symbol => unique
   
   
   8. object   (non-primitive datatype)*/

   console.log(typeof "Shivani") // output : String
   console.log(typeof age) // output : Number
   console.log(typeof null) // output : Object
   console.log(typeof undefined) // output : Undefined

 // undefined toh ek apneaap mein type hai .
 // and Null ek object hai .