// 3rd Topic - ConversionOperation : 
// NaN (Not a Number)


let score = "33"// typeof - String hoga
            // if let score = 33 // typeof - number  

console.log(typeof score); // ye typeof check karne ko hai jaise ki upar mein value number hai ya koi others ?
console.log(typeof(score)); // Aise bhi check kar sakte hai . yaha par as a method (score) check kiya hai .

let valueInNumber = Number(score) // ye "33" is String ko --> number change ke liye ValueInNmuber use hota hai jise ham conversion kahte hai .
console.log(typeof valueInNumber); // ab ham iska use kar ke  - jo value ko conversion kiya hai uska typeof check karte hai  Example - let spoose - "33abc" ye ek String hai but isko ham number mein convert kiye hai .
console.log(valueInNumber); // Output show karta hai .

// conversion :-
// "33" => 33 Output // typeof - number
// "33abc" => NaN Output // typeof - number 
// true =>  Output 1; false => Output 0  // typeof - number
// "shivani" => Output NaN // typeof - number

let isLoggedIn = "shivani"

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);
console.log(typeof booleanIsLoggedIn)

// conversion :-
// 1 => Output true;  0 => Output false // typeof - Boolean 
// " " => Output false //  Boolean
// "Shivani" => Output true // Boolean
// 33 => Output true // Boolean

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);

// conversion :-
// 33 => Output 33 // typeof - String



// Basically ConversionOperation mein yahi hota hai ki ham :
// Number ko String mei kaise convert kare And   // let stringNumber = String(someNumber)
// String ko number mein conversion   // let valueInNumber = Number(score)
// String ko boolean mein conversion  // let booleanIsLoggedIn = Boolean(isLoggedIn)




//******************************************* Operations **********************************************/
// ye basically itna important nhi hai bas ismein ka karwaya hua code technically use nhi karte hai .


let value = 3
let negValue = -value 
// console.log(negValue); // Output -3

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " shivani"

let str3 = str1 + str2
// console.log(str3); // Output hello shivani

// console.log("1" + 2); // Output - 12
// console.log(1 + "2"); // Output - 12
// console.log("1" + 2 + 2); // Output - 122 aayega ismein pahle hi " " hi aagya hai toh ADD nhi hua hai sabhi value ATTACH ho gya hai . 
// console.log(1 + 2 + "2"); // Output - 32 kyuki aage mein "" ye nhi laga hai toh practically ADD hogya rhen last value "2" ATTACH hogya 

// console.log( (3 + 4) * 5 % 3); this is s not technically correct to use for any project .

// console.log(+true); // Output 1
// console.log(+""); // Output false

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter; // Output 101 -|
//                            |- Both Output are same but Tecnically not same beacuse PREFIX and POSTFIX  works are differntly in code 
gameCounter++; // Output 101 -|  so if you want understant go check MDN PREFIX and POSTFIX meaning .
console.log(gameCounter);

// link to study ( for more understanding ConversonOperation)
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion