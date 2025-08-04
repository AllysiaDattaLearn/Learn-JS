let scope = 33
console.log(typeof scope) //number

let score = "52"
console.log(typeof score) //string
let valueOfScore = Number(score)
console.log(typeof valueOfScore) //number
console.log(valueOfScore) //52

let test = "52abc"
console.log(typeof test) //string
let valueOfTest = Number(test)
console.log(typeof valueOfTest) //number
console.log( valueOfTest) //NaN - not a number

let checkNull = null
console.log("null type before= " + typeof checkNull) //object
let valueOfNull = Number(checkNull)
console.log("null type = " + typeof valueOfNull) //number
console.log( "null value = " + valueOfNull) //0

let checkUndefined = undefined
console.log("undefined type before = " + typeof checkUndefined) //undefined
let valueOfUndefined = Number(checkUndefined)
console.log("undefined type = " + typeof valueOfUndefined) //number
console.log("undefined value = " +  valueOfUndefined) //NaN

let booleanTrue = true
console.log("booleanTrue type = " + typeof booleanTrue) //boolean
let valueOfBooleanTrue = Number(booleanTrue)
console.log("booleanTrue type = " + typeof valueOfBooleanTrue) //number
console.log("booleanTrue value = " + valueOfBooleanTrue) //1

let booleanFalse = false
console.log("booleanFalse type = " + typeof booleanFalse) //boolean
let valueOfBooleanFalse = Number(booleanFalse)
console.log("booleanFalse type = " + typeof valueOfBooleanFalse) //number
console.log("booleanFalse value = " + valueOfBooleanFalse) //0

let isLoggedIn = "Allysia"
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log("booleanIsLoggedIn value = " + booleanIsLoggedIn) 
//1- true, 0- false, 545- true, 
// ""- false, "allysia"- true

let number = 99
let stringNumber = String(number)
console.log("stringNumber type = " + typeof stringNumber) //string
console.log("stringNumber value = " + stringNumber) //99

//*************************OPERATIONS*********************************
let str1 = "Allysia"
let str2 = " Datta"
console.log("string concatenation= "+(str1+str2)) //Allysia Datta

console.table([("1" + 2), (1 + "2"), ("1" + 2 + 2), (1 + 2 + "2")])
//               12         12       122(string first e thakle convert all to string)        32(string last e thakle do operation then concatenate string)

console.log(+true) //1 true+ is not allowed
//prefix ++count first increment then use    postfix count++ first use then increment



