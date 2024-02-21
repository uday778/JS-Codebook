// node truthy.js

// const usermail="uday.ai"
// const usermail=""
const usermail=[] //empty array and strings becomes truthy value
if(usermail){
    // console.log("got user email")
}else{
    // console.log("don't have user email")
}

// falsy values

// false , 0 , -0 ,BigInt 0n , "" , null , undefined , NaN

// truthy values 
//values in double quotes becomes truthy

//true , 1  , "0" , "false" , "  " , [] , {} , function(){} 

//array checking
if(usermail.length===0){
    // console.log("array is empty")
}


// object checking
const emptyObj={}
//Object.keys(emptyObj)= it returns an array thats why we use .length property
if(Object.keys(emptyObj).length===0){
    // console.log("object is empty")
}

// impt😍
// false==0 is true
// 0=="" is true
// false=="" is true


///nullish coalescing operator(??): null ,undefined

let val1
// val1= 5 ?? 10
// val1=null ?? 10
// val1=undefined??15
// val1=null ?? 10 ?? 20

// console.log(val1)


//ternery operater
//syntax
// condition ? true:false

const iceteaprice=100
iceteaprice>=80 ?console.log("more than 80"): console.log("less than 80")

// === not only check the value it check the type