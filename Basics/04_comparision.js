console.log("2" > 1) //true not a good practice, datatype is different
console.log("02" > 1) //true

//not a good practice, just for concept
console.log(null > 0) //false
console.log(null == 0) //false
console.log(null >= 0) //true

// === compares not only value but data type as well
console.log("2" == 2) //true
console.log("2" === 2) //false

console.log(undefined > 0) //false
console.log(undefined == 0) //false
console.log(undefined >= 0) //false