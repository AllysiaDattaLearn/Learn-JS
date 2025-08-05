const tinderUser1 = new Object() //creates empty singleton object
const tinderUser = {} //creates empty non-singleton object
//otherwise both are same

tinderUser.id = "123adc"
tinderUser.isLoggedIn = true
tinderUser.name = "check"

console.log(tinderUser) //{ id: '123adc', isLoggedIn: true, name: 'check' } 
console.log(Object.keys(tinderUser)) //[ 'id', 'isLoggedIn', 'name' ]  most used
console.log(Object.values(tinderUser)) //[ '123adc', true, 'check' ]  most used
console.log(Object.entries(tinderUser)) //[ [ 'id', '123adc' ], [ 'isLoggedIn', true ], [ 'name', 'check' ] ]
//makes array with key valu pair. not much used
console.log(tinderUser.hasOwnProperty('isLoggedIn')) //true present or not

const regularUser = { //nested object createion
    email: "test@gmail.com",
    fullName: {
        userFullNAme: {
            fName: "Allysia",
            lNAme: "Datta"
        }

    }
}

console.log(regularUser.fullName) //{ userFullNAme: { fName: 'Allysia', lNAme: 'Datta' } }
console.log(regularUser.fullName.userFullNAme.fName) //Allysia
console.log(regularUser.fullName?.userFullNAme.fName) //api values protection, in case it doesnt exist

const obj1 = {1: "a", 2: "b", 3: "c"}
const obj2 = {4: "d", 5: "e", 6: "f"}
const obj3 = {7: "g", 8: "h"}

const obj4 = {obj1, obj2} //will use whole obj1 as first object and whole obj2 as second
const obj5 = Object.assign({}, obj1, obj2, obj3) //empty target object rest are source object
console.log(obj5)  //merge all 3 objects and return a new object

const obj6 = {...obj1, ...obj2, ...obj3} //spread and ,erge in new object, most used syntax

const arrayObj = [
    {
        name: "star",
        age: 30
    },
    {
        course: "js",
        type: "test"
    },
    {
        isPassed: true
    }
]
console.log(arrayObj[0].name) //start

//object destructure most used in react
const course = {
    courseName: "JS",
    courseInstructor: "hitesh",
    paymentMode: "gpay",
    cost: 100
}

const{courseInstructor} = course //can be accessed with courseInstructor, course.courseInstructor is not needed
console.log(courseInstructor)
const{courseInstructor: inst} = course //put a short name to access
console.log(inst)
