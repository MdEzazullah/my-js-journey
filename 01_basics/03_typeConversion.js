let score1 = "100"
let score2 = "100abc"

console.log(typeof score1)//string
console.log(typeof(score1))//string
console.log(typeof score2)//string

let valueInNumber1 = Number(score1)
console.log(typeof valueInNumber1)//number
console.log(valueInNumber1)//100

let valueInNumber2 = Number(score2)
console.log(typeof valueInNumber2)//number
console.log(valueInNumber2)//NaN

//boolean value to number
let value = true
console.log(typeof value)
console.log(value)
let valueInNumber = Number(value)
console.log(typeof valueInNumber)
console.log(valueInNumber)

//number to boolean
let isLoggedIn = 1
console.log(typeof isLoggedIn)
let booleanIsloggedIn = Boolean(isLoggedIn)
console.log(typeof booleanIsloggedIn)
console.log(booleanIsloggedIn)

// let isLoggedIn = ""
// console.log(typeof isLoggedIn)               //string
// let booleanIsloggedIn = Boolean(isLoggedIn)
// console.log(typeof booleanIsloggedIn)        //boolean
// console.log(booleanIsloggedIn)               //false

// let isLoggedIn = "Ezaz"
// console.log(typeof isLoggedIn)               //string
// let booleanIsloggedIn = Boolean(isLoggedIn)
// console.log(typeof booleanIsloggedIn)        //boolean
// console.log(booleanIsloggedIn)               //true


//conclusion
//1. we can change string into number
//2. the which looks like number may not be the Number it may be NaN(Not a Number)
//3. We can change true value as 1 and false falue as 0
//4. We can also change 0 and 1 as false and true respectively
//5. empty string is considered as false and value under is considered as true