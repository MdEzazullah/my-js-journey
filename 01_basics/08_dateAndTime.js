//Dates
let myDates = new Date()
console.log(myDates);//output comes in this form --> 2026-01-05T07:26:10.374Z
console.log(typeof(myDates));//object

console.log(myDates.toString());//output comes in this form --> Mon Jan 05 2026 07:26:10 GMT+0000 (Coordinated Universal Time)
console.log(myDates.toDateString()); //it print the todays day and date
console.log(myDates.toISOString());//2026-01-05T07:26:10.374Z
console.log(myDates.toLocaleTimeString);//[Function: toLocaleTimeString]
console.log(myDates.toJSON());//2026-01-05T07:26:10.374Z
console.log(myDates.getDate());  //it print the todays date
console.log(myDates.getDay());//1
console.log(myDates.getFullYear());//it print the year 
console.log(myDates.getTimezoneOffset());
console.log(myDates.getHours());
console.log(myDates.getMilliseconds());
console.log(myDates.getMinutes());



