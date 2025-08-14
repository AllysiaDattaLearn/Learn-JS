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


