const coding =["js", "ruby", "java", "python"]
//by default for each is injected in array to loop through

//we need to provide  call back function here
//callback fn doesn't have name
coding.forEach( function (codeName) {
    console.log(codeName); //js ruby java python
}) 

//using arrow fn
coding.forEach((item) => {
    console.log(item); //js ruby java python
    
})

//you can also declare fn separately and provide reference
function printMe(value){
    console.log(value)
}
coding.forEach(printMe) //js ruby java python

//can print item, index and whole array
coding.forEach((ele, bele, kele) => { //item, index, full array
    console.log(ele, bele, kele); //js 0 [ 'js', 'ruby', 'java', 'python' ] .......
})

//array of object
const myCoding = [
    {
        langName: "javascript",
        langFile: "js"
    },
    {
        langName: "python",
        langFile: "py"
    },
    {
        langName: "java",
        langFile: "java"
    }
]

myCoding.forEach((item) => {
    console.log(`language name is ${item.langName} and language file name is ${item.langFile}`); //language name is javascript and language file name is js....
})

//adding condition check in for each
let myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let newNums = []
myNums.forEach(nums => {
    if(nums>4)
        newNums.push(nums)
})
console.log(newNums); //[ 5, 6, 7, 8, 9, 10 ]

//better way to do this using filter
const myNewNums = myNums.filter((nums) => nums>4)
console.log(myNewNums); //[ 5, 6, 7, 8, 9, 10 ]

const myNewNums2 = myNums.filter((nums) => {
    return nums>4 //need to use return keywork if using curly brace - explicit return
    })
console.log(myNewNums2); //[ 5, 6, 7, 8, 9, 10 ]

//map - iterates through all items in array
const myNewNums3 = myNums.map((nums) => nums+10)
console.log(myNewNums3); //[11, 12, 13, 14, 15, 16, 17, 18, 19, 20]




