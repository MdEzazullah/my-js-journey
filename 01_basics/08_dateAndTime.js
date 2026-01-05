//Dates
let myDates = new Date()
console.log(myDates);//output comes in this form --> 2026-01-05T07:26:10.374Z
console.log(typeof(myDates));//object

console.log(myDates.toString());//output comes in this form --> Mon Jan 05 2026 07:26:10 GMT+0000 (Coordinated Universal Time)
console.log(myDates.toDateString()); //it print the todays day and date
console.log(myDates.toISOString());//2026-01-05T07:26:10.374Z
console.log(myDates.toLocaleTimeString);//[Function: toLocaleTimeString]
console.log(myDates.toJSON());//2026-01-05T07:26:10.374Z
console.log(myDates.getMonth());
console.log(myDates.getDate());//it print the todays date
console.log(myDates.getDay());//1
console.log(myDates.getFullYear());//it print the year 
console.log(myDates.getTimezoneOffset());
console.log(myDates.getHours());
console.log(myDates.getMilliseconds());
console.log(myDates.getMinutes());

let myCreatedDate1 = new Date(2026, 0, 5); //format Date(year, month, date)
console.log(myCreatedDate1.toDateString());//Fri Jan 23 2026

let myCreatedDate2 = new Date(2026, 0, 5, 2, 53, 45);//format Date(year, month, date, hour, minutes, second)
console.log(myCreatedDate2.toLocaleString());//1/26/2026, 2:53:45 AM

let myCreatedDate3 = new Date("01-05-2026");
console.log(myCreatedDate3.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);//it gives milisecond value
console.log(myTimeStamp/1000);//it gives second but this comes with decimal value
console.log(Math.floor(myTimeStamp/1000));//it gives second value without decimal value

//to customise more accurates value
let newDate = new Date()
newDate.toLocaleString('default', {
    weekday: "long"  
})
console.log(newDate.weekday);
