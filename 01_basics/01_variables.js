const accountId = 144452
let accountEmail = "shivanisingh764393@gmail.com"
var accountPassword = "12345"
accountCity = "jaipur"
let accountState;

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
