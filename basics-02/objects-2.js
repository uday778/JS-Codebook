// node objects-2.js

// const tinderUser=new Object()
const tinderUser = {}
tinderUser.id="123abc"
tinderUser.name="sunny"
tinderUser.isloggedin=false

// console.log(tinderUser)

const regularUser={
    email:"uday@gmail.com",
    fullname:{
        userfullname:{
            firstname:"uday ",
            lastname:"kumar"
        }
    }
}
//accessing
// console.log(regularUser.fullname.userfullname.firstname)

const obj1={
    1:"a",
    2:"b",
}
const obj2={
     3:"c",
    4:"d",
}
const obj4={
     5:"e",
    6:"f",
}

//combine 
// const obj3=Object.assign({},obj1,obj2,obj4)
// OR
//combine using spread operater
const obj3={...obj1,...obj2,...obj4}
// console.log(obj3)


const users=[
    {
        id:1,
        email:"uday@gmail.com"
    },
    {
        id:1,
        email:"uday@gmail.com"
    },
    {
        id:1,
        email:"uday@gmail.com"
    },
    {
        id:1,
        email:"uday@gmail.com"
    },
    
]
users[0].email
// console.log(tinderUser)

// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))

// console.log(tinderUser.hasOwnProperty('isloggedin'))







const course={
    coursename:"js in hindi",
    price:"1999",
    courseInstructer:"uday"
}
const {courseInstructer:instructer}=course
// console.log(courseInstructer)
console.log(instructer)


//json api intro

// {
//     "name":"uday",
//     "coursename":"js in hindi",
//         "price": "free"
// }


// [
//     {},
//     {},
//     {},
// ]