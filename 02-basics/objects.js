//singleton
// constructer= singleton
// Object.create



//literal != singleton
//object literals

const mysym=Symbol("key1") //🌐🚀

const JsUser={
    name:"Hitesh",
    "fullname":"uday kumar",
    [mysym]:"mykey1",
    age:18,
    location:"hyd",
    email:"uday@gmail.com",
    isLoggedIn:false,
    lastloginDays:["monday", "tuesday", "wednesday", "thursday", ]
}//node objects.js

//accessing
// console.log(JsUser.email)
// console.log(JsUser["email"])

// console.log(JsUser["fullname"])
// console.log(JsUser[mysym])//


JsUser.email="ajay@gmail.com" //overwriting
// Object.freeze(JsUser)
JsUser.email="ajaymicrosoft@gmail.com"
// console.log(JsUser)

JsUser.greeting=function(){
    console.log("hello js user")
}
JsUser.greeting2=function(){
    console.log(`hello js user : ${this.name}`)
}
// console.log(JsUser.greeting)//we get the reffrence of the function

console.log(JsUser.greeting())
console.log(JsUser.greeting2())