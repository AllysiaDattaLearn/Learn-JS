let myDate= new Date()
console.log("toString output== " + myDate.toString()) //Sun Aug 03 2025 06:55:30 GMT+0000 (Coordinated Universal Time)
console.log("toDateString output== " + myDate.toDateString()) //Sun Aug 03 2025
console.log("toISOString output== " + myDate.toISOString()) //2025-08-03T06:55:30.003Z
console.log("toJSON output== " + myDate.toJSON()) //2025-08-03T06:55:30.003Z
console.log("toLocaleDateString output== " + myDate.toLocaleDateString()) //8/3/2025
console.log("toLocaleString output== " + myDate.toLocaleString()) //8/3/2025, 6:55:30 AM
console.log("toLocaleTimeString output== "+ myDate.toLocaleTimeString()) //6:55:30 AM

console.log(typeof myDate) //object

let MyCreatedDate = new Date(2023, 0, 23)
console.log(MyCreatedDate.toDateString()) //Mon Jan 23 2023 Jan is 0 in the array
MyCreatedDate = new Date(2023, 0, 23, 5, 3)
console.log(MyCreatedDate.toLocaleString()) //1/23/2023, 5:03:00 AM
MyCreatedDate = new Date("2023-01-25")
console.log(MyCreatedDate.toLocaleString()) //1/25/2023, 12:00:00 AM
console.log(Math.floor(Date.now()/1000)) //date.now gives value in milisec. devide by 1000 to get in sec

let currentDate = new Date()
console.log(currentDate.getMonth()) //starts from 0 is Jan
console.log(currentDate.getDay()) //starts from 0 is Sunday
console.log()
console.log()
console.log()
