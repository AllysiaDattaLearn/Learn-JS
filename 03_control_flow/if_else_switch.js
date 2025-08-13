const temperature = 41

if(temperature <30){
    console.log("temperature more than 30");
}else if(temperature <40){
    console.log("temperature more than 40");  
}else if(temperature <50){
    console.log("temperature more than 50");  //temperature more than 50
}else{
    console.log("temperature more than 100"); 
}

//operators <, >, <=, >=, ==, !=, ===(type check as well), !==

//multiple checking
const a = true
const b = true
const c = false

if(a && b && 2==2){ //true
    console.log("print and true");
}

if(a || b || c){
    console.log("print or true");
}

//Switch
const month = 3
//const month = "January"

switch (month) {
    //case "January":  //case sensitive - month is January
    case 1:
        console.log("month is January");
        break;
    case 2:
        console.log("month is Feb");
        break;
    case 3:
        console.log("month is March"); //month is March
        break;
    default:
        console.log("execute when none of the case match");
        break;
}