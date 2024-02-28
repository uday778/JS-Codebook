// node IIFE.js

// immeadiately invoked function expressions(IIFE)

//normal function
// function call(name){
//     console.log(`${name}connected successfully`)
// }
// call("uday");

//syntax
// ()();
(function call(){
    //named IIFE
    console.log(`db connected successfully`)
})();


((name)=>{
    console.log(`db connected successfully ${name}`)
})('uday');