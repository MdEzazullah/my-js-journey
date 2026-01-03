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
