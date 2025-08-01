let myName = "Allysia"
let age = 30
let type;

//Premitive data types
//number => up to 2 to power 53
//bigint => huge number - not much used
//string => ""
//boolean => true/false
//null => type is object
//undefined => type is undefined
//symbol => unique

//you can print type of anything using below
console.log(typeof undefined) //undefined
console.log(typeof null) //object
console.log(typeof myName) //string
console.log(typeof age) //number
console.log(typeof type) //undefined

const id = Symbol("123")
const anotherId = Symbol("123")
console.log(id == anotherId) //false although value is same but its unique, return type is Symbol

