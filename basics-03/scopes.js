// node scopes.js
// let a=300
// if(true){
//     let a = 10 
//     const b = 20
//     var c = 30 
//     console.log("inner",a)
// }
// console.log(a)
// console.log(b)
// console.log(c)


 function one(){
    const username="uday"

    function two(){
        const website= "youtube"
        console.log(username)
    }
    
    // console.log(website)
    // two()
 }
//  one()


if(true){
    const username="uday"
    if(username==="uday"){
        const website="youtube"
        // console.log(username + website)
    }
    // console.log(website)
}
// console.log(username)



/// ===============++++++++++++++++++++++
//intresting 
//hoisting
console.log(addone(5))
function addone(num){
    return num+1
}

console.log(addtwo(5))
const addtwo=function(num){
    return num +2 
}