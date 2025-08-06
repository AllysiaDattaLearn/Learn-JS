function addNumbers (number1, number2){ //number1, number2 are parameters
    let result = number1 + number2
    //return result
    return number1 + number2 //less code
    console.log("unreachable code after return in function")
}
let result = addNumbers(3, 4) //3, 4 are arguments
console.log(`result is , ${result}`);


function loginUserMessage (userName){
    return `${userName} just logged in` //return statement only returns, doesnt print
}
console.log(loginUserMessage("Allysia")) //Allysia just logged in
console.log(loginUserMessage()) //undefined just logged in


function loginUserMessage2 (userName){
    //if(userName === undefined){
    if(!userName){ //works same as line 19
        console.log("please enter user name")
        return
    }
    return `${userName} just logged in` 
}
console.log(loginUserMessage2()) //please enter user name when executing line 20 then prints undefined when executing line 25


function loginUserMessage3 (userName = "sam"){ //default value is sam if nothing is passed as argument
    return `${userName} just logged in` //return statement only returns, doesnt print
}
console.log(loginUserMessage3()) //sam just logged in
console.log(loginUserMessage3("David")) //David just logged in

//e.g. add prices in shopping cart where number of items are not fixed
function calculateCartPrice(...price){ //rest operator
    return price
}
console.log(calculateCartPrice(200, 300, 500)) //[ 200, 300, 500 ] you can pass as many arguments

function calculateCartPrice2(price1, price2, ...price){
    console.log(price1, price2, price) //200 300 [ 500, 700, 900 ] price1= 200, price2 = 300 rest in price
    return price
}
console.log(calculateCartPrice2(200, 300, 500, 700, 900)) //[ 500, 700, 900 ] returns only price

//objects in functions
const user = {
    name: "allysia datta",
    age: 30
}
function handleObjects(anyObject){
    console.log(`user name is ${anyObject.name} age is ${anyObject.age}`)
}
handleObjects(user) //user name is allysia datta age is 30
handleObjects({ //another way of directly passing object
    name: "allysia datta",
    age: 30
})

//arrays in functions
const newArray = [200, 400, 500, 700]
function handleArray(anyArray){
console.log(anyArray[1])
}
handleArray(newArray) //400
handleArray([200, 400, 500, 700]) //another way of directly passing array

//hold function in a variable, that variable is called expression
//console.log(addTwo(5)) //cant access variable before declaration, error
const addTwo = function(num){
    return num + 2
}
console.log(addTwo(5))

console.log(addOne(5)) //6 you can call function before declaration
function addOne(num){
    return num + 1
}
