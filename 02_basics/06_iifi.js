//Immidiately Invoked Function Expression (IIFE)
//saves the function from global variable pollution

(function chai(){ //named IIFE
    console.log("print chai")
})(); //print chai---- ; is necessary to end the function invoke
// declare function in first (), second () is for execution

((name) => { //unnamed IIFE
     console.log(`print ${name}`)
})("allysia") //print allysia