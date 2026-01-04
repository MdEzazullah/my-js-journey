// //Strings can be represented as "xyz" 'xyz' '''xyz'''
// const name = "Md Ezazullah"
// const repoCount = 50 
// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
// const myGame = new String('Ezazullah')
// console.log(myGame[0]);
// // console.log(myGame__proto__);
// console.log(myGame.length)
// console.log(myGame.toUpperCase);
// console.log(myGame.toLocaleLowerCase);
// console.log(myGame.)


//trim method
let msg = "  Hello  ";
console.log(msg.trim());
let password = "          kajdj ojf da jaijana jja ijjakpsj jj j           "
console.log(password)
console.log(password.trim());
//string are immutable in JS
console.log(msg);

//toUpperCase() and toLOwerCase() method
// let name = "Md Ezazullah";
// console.log(name.toUpperCase());
// console.log(name.toLowerCase());

//string method with argument 
//1.indexOf method
let str = "ILoveCoding";
newStr=str.indexOf("Love");
console.log(newStr);
console.log(str.indexOf("C"));
//output -> 1
//output -> 5
//If the letter is not present in the string then it print -1 as given below
console.log(str.indexOf("love"));//output -> -1

//method chaining
let newMsg= msg.trim();
console.log("Before trim :",msg);
console.log("After trim :",newMsg);
newMsg=newMsg.toUpperCase();
console.log("After Uppercase :",newMsg);
//in single line 
console.log(msg.trim().toUpperCase());  

//slice method
let STR="ILoveCoding";
console.log(STR.slice(1,5));   //'Love'
console.log(STR.slice(5,6));     //'C'
console.log(STR.slice(5));     //'Coding'
console.log(STR.slice(-2));    //'ILoveCodi'

//replace method
let S = "ApnaCollege";
console.log(S.replace("A","S"));
console.log(S.replace("Apna","Tera"));

//repeat method
let S1="Mango";
console.log(S1.repeat(3));

//Practice Question
let ques="Help!";//Trim it and convert it to uppercase
console.log(ques.trim().toUpperCase());
//practice question
//predict the output
let name="ApnaCollege";
console.log(name.slice(4,9));            //Coll
console.log(name.indexOf("na"));         // 2
console.log(name.replace("Apna","Our")); //Our College
console.log(name.slice(4).replace("l","t").replace("l","t"));
//string print in the output is the new string because string is immutable(not changeble)!!!