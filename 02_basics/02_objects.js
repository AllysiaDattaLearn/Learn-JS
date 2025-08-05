//singleton
Object.create

//object literals
const mySym = Symbol("key1") //declare symbol
const jsUser = {
    "name": "Allysia",
    "full name": "Allysia Datta",
    age: 30,
    email: "test@gmail.com",
    isLoggedin: true,
    lastLoginDays: ["Monday", "Wednesday", "Saturday"],
    [mySym]: "myKey1"

}

console.log(jsUser.name) //Allysia
console.log(jsUser.age) //30
console.log(jsUser["full name"]) //cant be accessed with .full name
console.log(jsUser[mySym]) //myKey1 access symbol from object


jsUser.check = "check"
console.log(jsUser.check)

jsUser.greeting = function(){
    console.log(`hello user , ${this.name}`)
}
console.log(jsUser.greeting())
//console.log(jsUser.email)
//console.log(jsUser.email)
//console.log(jsUser.email)

jsUser.email = "Allysia@google.com" //overwrite value
Object.freeze(jsUser) //freeze the object, value cant be changed
jsUser.email = "Allysia@fb.com" //cant be changed
console.log(jsUser.email) //Allysia@google.com

