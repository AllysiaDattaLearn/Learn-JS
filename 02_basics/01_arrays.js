//JS array is resizable
//starts from zero index
//JS array copy operation create shallow copy - shallow copy of an object is a copy whose properties share the same references

const myArray = [0, 1, 2, 3, 4, true, "Allysia"] //it can contain mix of different data types 
console.log(myArray[6])

const myArr = new Array(1, 2, 3, 4)
myArr.push(5) //adds value in the array
myArr.push(6)
myArr.pop() //removes last value from array
myArr.unshift(9) //adds value at the beginning. whole array values are index shifted
myArr.shift() //removes first value from array
console.log(`includes value = ${myArr.includes(4)}`) //is the value present is array
console.log(`indexOf value = ${myArr.indexOf(3)}`) //index of the value, result is -1 if value is not present

const newArray = myArr.join() //joins whole myArr array as string

console.log(myArr) //[ 1, 2, 3, 4, 5 ]
console.log(newArray) //1,2,3,4,5
console.log(typeof myArr) //object
console.log(typeof newArray) //string

//--------slice and splice-----------------
const myArr2 = new Array(0, 1, 2, 3, 4, 5, 6)
console.log("original array ", myArr2) //[0, 1, 2, 3, 4, 5, 6]

const myArrSlice = myArr2.slice(1, 3) 
console.log("slice array ", myArrSlice) // [1, 2] doesnt include edge value
console.log("original array after slice", myArr2) //[0, 1, 2, 3, 4, 5, 6] original array is not changed

const myArrSplice = myArr2.splice(1, 3)
console.log("splice array ", myArrSplice) // [ 1, 2, 3 ] includes edge value
console.log("original array after slice", myArr2) //[ 0, 4, 5, 6 ] original array is updated

const marvel_heros = ["Thor", "Ironman", "Spiderman"]
const dc_heros = ["Superman", "Flash", "Batman"]

const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros) //[ 'Thor', 'Ironman', 'Spiderman', 'Superman', 'Flash', 'Batman' ]
//concat both arrays and create a new array

marvel_heros.push(dc_heros)
console.log(marvel_heros) //[ 'Thor', 'Ironman', 'Spiderman', [ 'Superman', 'Flash', 'Batman' ] ]
//dc_heros array is added as last index
console.log(marvel_heros[3]) //[ 'Superman', 'Flash', 'Batman' ]

const marvel_heros1 = ["Thor", "Ironman", "Spiderman"]
const dc_heros1 = ["Superman", "Flash", "Batman"]
const indian_heros1 = ["Shaktiman", "nagaraj"]

const all_heros = [...marvel_heros1, ...dc_heros1, ...indian_heros1]
console.log(all_heros) //["Thor", "Ironman", "Spiderman", "Superman", "Flash", "Batman", "Shaktiman", "nagaraj"]
//using spread operator, spread all values and adds in an array, mostly used

const nestedArray = [1, 2, [3, 4, 5], 6, [5, 6, [7, 8]]]
const realArray = nestedArray.flat(Infinity)
console.log(realArray) //[1, 2, 3, 4, 5, 6, 5, 6, 7, 8]

console.log(Array.isArray("Allysia")) //false do you have this array?
console.log(Array.from("Allysia")) //['A', 'l', 'l', 'y', 's', 'i', 'a'] makes array from the input
console.log(Array.from({name: "Allysia"})) //[] return empty array. you have to specify whether to make array with keys or values....discuss later

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3)) //[ 100, 200, 300 ]







