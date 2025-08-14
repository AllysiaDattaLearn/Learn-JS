//on object -- cant use for of
//default print only key
const myObject = {
    'game1': 'super mario',
    'game2': 'snake ladder'
}

for (const key in myObject) {
    console.log(key); //prints only keys game1 game2
    console.log(`key is ${key} and value is ${myObject[key]}`); //key is game1 and value is super mario key is game2 and value is snake ladder
    //${myObject[key]} prints the value 
}

//on array
const myArray = ['a', 'b', 'c', 'd', 'e']
for (const key in myArray) {
   console.log(key) // 0 1 2 3 4 prints array index as key
   console.log(myArray[key]) //a b c d e
}

//cant use for in loop on Map

