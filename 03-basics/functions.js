//  node functions.js


// function saymyname(){
//     console.log("u");
//     console.log("d");
//     console.log("a");
//     console.log("y");
//     console.log("7");
//     console.log("7");
//     console.log("8");
// }
// saymyname()


// function addtwonums(Number1,Number2){
//     console.log(Number1+ Number2)
// }

function addtwonums(Number1,Number2){
    // let result=Number1+ Number2
    return Number1 + Number2}
const results=addtwonums(3,3)
// console.log("results :" ,results)


function loginusermessage(username="sam"){
    if(!username){
        console.log("Please enter a username")
        return 
    }
    return `${username}  just loggedin`
}
// console.log(loginusermessage("uday kumar"))
// console.log(loginusermessage("arjun"))



// ../....../..././././/
function calculatecartprize(val1,val2,...num1){
    return num1
}
// console.log(calculatecartprize(200,400,500,100,2000))




const user={
    username:"hitesh",
    prices:199
}
function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.prices}`)
}

// handleObject(user)
handleObject({
    username:"udaykumar",
    prices:300
})

const mynewarray=[200,300,400,600]
function returnsecondvalue(getarray){
    return getarray[3]
}

console.log(returnsecondvalue(mynewarray))