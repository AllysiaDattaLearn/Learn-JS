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



