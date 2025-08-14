//map - iterates through all items in array
let myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const myNewNums = myNums.map((nums) => nums+10)
//console.log(myNewNums); //[11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

//chaining
console.log(myNums)
let newNums = myNums.map((nums) => nums*10).map((nums) => nums+1).map((nums) => nums+100).filter((nums) => nums>150)
console.log(newNums); //[ 151, 161, 171, 181, 191, 201 ]

