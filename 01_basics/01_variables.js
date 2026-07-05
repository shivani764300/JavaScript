// 1st Topic - Let Var Const :

const accountId = 144452 // Const - iska value kabhi change nhi hota hai. (Const tabhi use hota hai jab value ka use nhi karna rhta hai..)
let accountEmail = "shivanisingh764393@gmail.com" // Let - iska Value change hota hai 
var accountPassword = "12345" // (Not recommende in Js) Var is a same as Let But Var not use Beacuse of Scope.
accountCity = "jaipur" // ye aise bhi execute ho jata hai .But This is not right way to declare/execution You shuld take a one of the variable .
let accountState; // iska Output - Undefined aayega kyuki kuch value mention nhi hai nn ..

// accountId = 2  // not allowed (const keyword ka value kabhi change nhi hota hai)
// console.log(accountId);

accountEmail = "hello@123.com"
accountPassword = "2122123"
accountCity = "kanpur"


console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and function scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
/*
  Console.log likh kar bhi output nikal sakte hai But Baar Baar kon likhega toh
  simply ek baar mein likh sakte hai .. Console.table([]) ka use kar ke . 
*/