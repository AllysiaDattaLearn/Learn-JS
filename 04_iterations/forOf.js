//on array
const arrayNum = [1, 2, 3, 4, 5, 6]
for (const num of arrayNum) {
    console.log(num); // 1 2 3 4 5 6 
}

//on string
const greetings = "hello world!"
for (const greet of greetings) { //common practice is greet of greetings, num of numbers
    console.log(greet); //h e l l o   w o r l d !
}

//on map - default prints whole map
const myMap = new Map()
myMap.set('IN', 'India')
myMap.set('USA', 'United States')
myMap.set('Fr', 'France')
console.log(myMap); //Map(3) { 'IN' => 'India', 'USA' => 'United States', 'Fr' => 'France' }

for (const key of myMap) {
    console.log(key); //[ 'IN', 'India' ] [ 'USA', 'United States' ] [ 'Fr', 'France' ] prints whole map
}

//to print specific key or value
for (const [key, value] of myMap) {
    console.log(key, '---', value) //IN --- India USA --- United States Fr --- France
}
for (const [key] of myMap) { //IN got USA
    if(key == 'USA'){
        console.log('got USA');
        break
    }
    console.log(key)
}