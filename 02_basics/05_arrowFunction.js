const addNumber = (num1, num2) => {
    return num1 + num2  //explicit return
}
console.log(addNumber(3, 4))

const addNumber2 = (num1, num2) => num1 + num2 //implicit return
console.log(addNumber2(3, 4))

const addNumber3 = (num1, num2) => (num1 + num2) //implicit return
console.log(addNumber3(3, 4))
//all 3 will give same out put, different way of writing arrow function. used most in react

const message = () => ({username: "allysia"})
console.log(message()) //{ username: 'allysia' }