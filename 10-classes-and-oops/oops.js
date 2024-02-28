//object literal
const user={
    username:'uday',
    logincout:'5',
    signedIn:'true',

    getuserdetails:function(){
        // console.log('got user details from database');
        console.log(this);
        console.log(`username: ${this.username}`);
    }
}
// console.log(user.username);
console.log(user.getuserdetails());
console.log(this);

const promise1= new Promise((resolve, reject) => {})
const date=new Date()
//new keyword is a constructer function

function User(username,logincount,isloggedin){
    this.username=username
    this.logincout=logincount
    this.isloggedin=isloggedin
    this.greeting=function(){
        console.log(`welcome to ${this.username}`);
    }

    return this
}
const userone=new User('uday',12,true)
const usertwo= new User('chai aur code',11,false)
console.log(userone.constructor);
console.log(usertwo);
//while using new keyword it create new object
//constructer func called on new keyword