//  node arrow.js

const user={
    username:"uday",
    price:199,
    welcomemessage:function(){
        console.log(`${this.username}, welcome to website`)
        console.log(this);
    }
}
// console.log(user.welcomemessage())
// user.username="sam"
// console.log(user.welcomemessage())

// console.log(this)


// function chai(){
//     let username="uday"
//     console.log(this.username)//not used in functions it gives undefined
// }
// chai()
// const chai=function(){
//     let username="uday"
//     console.log(this.username)//not used in functions it gives undefined
// }
// chai()


// const chai=()=>{
//     let username="uday"
//     console.log(this.username)//not used in functions it gives undefined
// }
// chai()






/////arrow functions/////

// different syntax

// const addtwo=(num1,num2)=>{ return num1 + num2}
// const addtwo=(num1,num2)=>( num1 + num2)
// const addtwo=(num1,num2)=>num1 + num2

//object return  (wrap in parenthesis())
const addtwo=(num1,num2)=>({username:"uday"})
console.log(addtwo(3,2))

// const myarray=[2,5,3,7,8]
// myarray.foreach(()=>{})









