

//string are immutable in JS
let myDept = "CSE";
console.log(myDept);//CSE
myDept = "ECE";
console.log(myDept)//ECE
let str1 = "Palak";
str1[0]="F";
console.log(str1);//Palak

//toUpperCase() and toLOwerCase() method
let myName = "Md Ezazullah";
console.log(myName.toUpperCase());//MD EZAZULLAH
console.log(myName.toLowerCase());//md ezazullah

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
let msg = "  Hello  ";
let newMsg= msg.trim();
console.log("Before trim :",msg);
console.log("After trim :",newMsg);

newMsg=newMsg.toUpperCase();
console.log("After Uppercase :",newMsg);
//in single line 
console.log(msg.trim().toUpperCase());  

let password = "          kajdj ojf da jaijanatyutya iqwerakpsj jj j           "
console.log(password)//          kajdj ojf da jaijanatyutya iqwerakpsj jj j           
console.log(password.trim());//kajdj ojf da jaijanatyutya iqwerakpsj jj j
console.log(password.toUpperCase());

//slice method
let STR="ILoveCoding";
console.log(STR.slice(1,5));   //'Love'
console.log(STR.slice(5,6));     //'C'
console.log(STR.slice(5));     //'Coding'
console.log(STR.slice(-2));    //'ILoveCodi'

//replace method
let S = "ApnaCollege";
console.log(S.replace("A","S"));//SpnaCollege
console.log(S.replace("Apna","Tera"));//TeraCollege
const url = "https://Ezaz.com/Ezaz%20Ansari";
console.log(url.replace("%20", "-"))
console.log(url.includes("Hitesh"))//false
console.log(url.includes("Ezaz"))


//repeat method
let S1="Mango";
console.log(S1.repeat(3));//MangoMangoMango

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

const Name = "shah rukh khan";
const repoCount = 50;
console.log(`Koyla actor is ${Name} and the repo value is ${repoCount}`);

