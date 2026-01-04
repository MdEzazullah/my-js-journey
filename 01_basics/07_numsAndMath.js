//nums and math

//nums
const  score = 400
console.log(score)

const balance = new Number(100);
console.log(balance)
console.log(balance.toString())
console.log(balance.toString().length)

//toFixed() method
console.log(balance.toFixed(2))//It tell that how many digit you are going to show  
const otherNumber = 123.32453;
console.log(otherNumber.toPrecision(3))//123
console.log(otherNumber.toPrecision(4))//123.3
console.log(otherNumber.toPrecision(5))//123.32
console.log(otherNumber.toPrecision(2))//1.2e+2

const hundreds = 100000000;
console.log(hundreds.toLocaleString());//the value changes to string                                //100,000,000
console.log(hundreds.toLocaleString("en-IN"))//this will give you the indian undersatandable value  //10,00,00,000


//maths
console.log(Math.PI);///3.141592653589793
//abs(absolute) method convert the all the value to its positive value
console.log(Math.abs(4)) //4
console.log(Math.abs(-5)) //5
console.log(Math.abs(+4)) //4
console.log(Math.abs(44.6)) //44.6
//round off value
console.log(Math.round(4.6))//5
console.log(Math.ceil(3.9))//4
console.log(Math.ceil(3.3))//4

console.log(Math.floor(5.4))//5
console.log(Math.floor(5.9))//5

console.log(Math.min(3,5,1,9,8))
console.log(Math.max(5,9,4,1,8))

console.log(Math.random())//random() method will always give the random value which always lies betweem 0 and 1 

//to increase the range of the random value you have to multiply with that specific value
console.log(Math.random()*10)//now random value always lies between 0 to 9
//to avoid that 0 you have to add 1 
console.log((Math.random()*10) +1)//now random value always lies between 1 to 10

//without decimal value
console.log(Math.floor(Math.random()*10)+1)//random value always lies between 1 to 10 without decimal value

//formula to generate the random value from the given min and max value
const min=10
const max=20
console.log(Math.floor(Math.random()*(max-min+1))+min)//eg: Math.floor(Math.random()*10+1) here 10=(10-1+1)+1