//array.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue))
//accumulator value starts with the value provided in initial value
//then next accumulator value is the function return, that is accumulator + currentValue here
let myArray = [1, 2, 3, 4, 5]
let myNewArray = myArray.reduce(function(accVal, CurrVal){
    console.log(`accumulator value ${accVal} and current value ${CurrVal}`);
    return accVal + CurrVal  
}, 0)
console.log(`final result with function is ${myNewArray}`);
/*accumulator value 0 and current value 1
accumulator value 1 and current value 2
accumulator value 3 and current value 3
accumulator value 6 and current value 4
accumulator value 10 and current value 5
final result with function is 15*/

//same with arrow function
myNewArray = myArray.reduce((accVal, CurrVal) => accVal + CurrVal, 0)
console.log(`final result with arrow function is ${myNewArray}`); //final result with arrow function is 15

/*****************************add shopping cart prices *****************************/
const shoppingCart = [
    {
        courseType: "free",
        courseNAme: "JS",
        price: 999
    },
    {
        courseType: "paid",
        courseNAme: "Java",
        price: 1999
    },
    {
        courseType: "paid",
        courseNAme: "Python",
        price: 2999
    },
]
let cartPrice = shoppingCart.reduce((acc, item) => acc + item.price, 0)
console.log(`cart price is ${cartPrice}`); //cart price is 5997

let paidCoursePrice = shoppingCart.filter((shop) => shop.courseType == "paid").reduce((acc, item) => acc + item.price, 0)
console.log(`cart price for paid course is ${paidCoursePrice}`); //cart price for paid course is 4998


