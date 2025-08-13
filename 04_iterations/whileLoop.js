let i = 0
while (i<=10) {
    console.log(`value of i is ${i}`);
    i = i+2
}

let myArray = ["a", "b", "c", "d"]
let arr = 0
while (arr < myArray.length) {
    console.log(`array value is ${myArray[arr]}`);
    arr++
}

let score = 1
do {
    console.log(`score is ${score}`);
    score++ //first increament the check condition - print 1 to 9
} while (score < 10);

let score1 = 11
do {
    console.log(`score1 is ${score1}`); //score1 is 11 - bcz this loop first do the increment then checks condition
    score1++ 
} while (score1 < 10);