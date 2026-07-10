// 3rd Topic - ConversionOperation : 
// NaN (Not a Number)


let score = "33"// typeof - String hoga
            // if let score = 33 // typeof - number  

console.log(typeof score); // ye typeof check karne ko hai jaise ki upar mein value number hai ya koi others ?
console.log(typeof(score)); // Aise bhi check kar sakte hai . yaha par as a method (score) check kiya hai .

let valueInNumber = Number(score) // ye "33" is String ko --> number change ke liye ValueInNmuber use hota hai jise ham conversion kahte hai .
console.log(typeof valueInNumber); // ab ham iska use kar ke  - jo value ko conversion kiya hai uska typeof check karte hai  Example - let spoose - "33abc" ye ek String hai but isko ham number mein convert kiye hai .
console.log(valueInNumber); // Output show karta hai .

// conversionOperation :-
// "33" => 33 Output // typeof - number
// "33abc" => NaN Output // typeof - number 
// true =>  Output 1; false => Output 0  // typeof - number
// "shivani" => Output NaN // typeof - number

let isLoggedIn = "shivani"

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);
console.log(typeof booleanIsLoggedIn)

// conversionOperation :-
// 1 => Output true;  0 => Output false // typeof - Boolean 
// " " => Output false //  Boolean
// "Shivani" => Output true // Boolean
// 33 => Output true // Boolean

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);

// conversionOperation :-
// 33 => Output 33 // typeof - String



// Basically ConversionOperation mein yahi hota hai ki ham :
// Number ko String mei kaise convert kare And   // let stringNumber = String(someNumber)
// String ko number mein conversion   // let valueInNumber = Number(score)
// String ko boolean mein conversion  // let booleanIsLoggedIn = Boolean(isLoggedIn)