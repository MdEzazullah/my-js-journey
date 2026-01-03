//primitives datatypes 
// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt
const score = 100
const scoreValue = 100.45
const isLoggedIn = false
const outsideTemp = null
let useEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id == anotherId)//false

const BigNumber =25495327557507347n
console.log(BigNumber);
console.log(typeof BigNumber);




//non-primitives(refernece)
//Array, Objects, Functions

const pokemon = ["pikachu", "charizard", "mewtow"];//Array
console.log(typeof pokemon)
console.table(pokemon)
let obj = {                            //Object
    name: "Md Ezazullah",
    age: 21,
    roll: 2303048
}
console.log(typeof obj);
console.table(obj)

const myFunction = function(){
    console.log("Md Ezazullah");
}
console.log(typeof myFunction);
console.log(myFunction);

//------------------------------------------------------------
// stack memory is used for primitive datatypes while heap memory is used in non-primitives datetypes
let myYoutubeName = "hitesh choudhary"
let anotherName = myYoutubeName//it is the copy of the myYoutubeName
anotherName = "chai our code" //value updated 
console.log(anotherName) //It print the updated value i.e. chai our code
console.log(myYoutubeName)//It print the original value i.e hitesh choudhary

let user1={//object 
    email: "md@google.com",
    upi: "md@ybl"
}
let user2 = user1 //it give the reference of the original value
user2.email = "Ezaz@google.com";
console.log(user1)//Ezaz@google.com
console.log(user2)//Ezaz@google.com













