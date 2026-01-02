import { log } from "console"

const accountId = 144523
let email = "mdiqbal@example.com";
var password = "securePassword123";
/*
prefer not to use because of issue in block scope and functional scope
*/
let accountCity = "New York";
let accountState;
console.log("first alloted values")
console.log(accountId)
log(email)                  
console.log(password)

console.log("after changing values")
//accountId = 987654; // This will cause an error because accountId is a constant
email = "mi.@example.com";
password = "newPassword456";
console.log(email)
console.log(password)   

console.log("In table form")
console.table([accountId, email, password, accountCity, accountState])
