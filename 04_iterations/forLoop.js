for (let i = 0; i < 10; i++) {
    const element = i;
    if(element == 5){
        //console.log("5 is best");
    }
    console.log(element);
}

for (let i = 0; i < 5; i++) {
    console.log(`outer loop i value: ${i}`);
    
    for (let j = 0; j < 5; j++) {
        //console.log(`inner loop i value: ${i} and inner loop j value: ${j}`);
        console.log(`${i} * ${j} = ${i*j}`);
        
    } 
}

let myArray = ["a", "b", "c", "d"]
console.log(myArray.length);

for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    console.log(element);
}

//break and continue
for (let i = 0; i <= 10; i++) {
    if(i == 5){
        console.log("5 detected");
        break //go to line 36(out of whole for loop) after break
    }
    console.log(`value of i is ${i}`);        
}

for (let i = 0; i <= 10; i++) {
    if(i == 5){
        console.log("5 detected");
        continue //wont print 'value of i is 5' but then continue the loop after continue
    }
    console.log(`value of i is ${i}`);        
}