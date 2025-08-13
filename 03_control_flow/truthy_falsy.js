//const useremail = "ally@ai.com" //got user email after run
const useremail = "" //did not get user email

if(useremail){
    console.log("got user email");
}else{
    console.log("did not get user email");
}

//assumption empty string is false, this is called truthy value and falsy value

/*falsy value:
- false, 0, -0, Bigint 0n, "", null, undefined, NaN
everything else is truthy value */

/*truthy value
"0", 'false', "false", " ", [], {}, function(){} */

/* all the below statements return true
false == 0, false =='', 0 == '' */

const emptyArray = []
if(emptyArray.length === 0){
    console.log("array is empty");
}else{
    console.log("array not empty");
}

const emptyObject = {}
if(Object.keys(emptyArray).length === 0){
    console.log("object is empty");
}else{
    console.log("object not empty");
}

//nullish Coalescing Operator (??): usually used on null and undefined
const val1 = null ?? 10
console.log(val1); //10
const val2 = undefined ?? 15 //15
const val3 = null ?? 10 ?? 15 //10
//mostly used to get value from DB. assign null if you dont get anything back from DB and we will handle function accordingly
//val = null ?? complex function to get data from API or DB

//Terniary Operator
//condition ? true : false
const price = 110
price >=100 ? console.log("more than 100") : console.log("less than 100")

const check = 90
console.log("test");



