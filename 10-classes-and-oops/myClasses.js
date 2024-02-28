//ES6

class User {
    constructor(username,email,password){
        this.username=username
        this.email=email
        this.password=password
    }
    encryptpassword(){
        return `${this.password}abc`
    }
    changeusername(){
        return `${this.username.toUpperCase()}`
    }
}

const udayasuser=new User('uday','uday@gmail.com','12345')
console.log(udayasuser);
console.log(udayasuser.encryptpassword());
console.log(udayasuser.changeusername());


//behind the scenes

function User(username,email,password){
    this.username=username
        this.email=email
        this.password=password
}
User.prototype.encryptpassword=function(){
    return `${this.password}abc`
}
User.prototype.changeusername=function(){
    return `${this.username.toUpperCase()}`
}

const tea= new User('arjun','arjun@gmail.com','i love you')
console.log(tea.encryptpassword());
console.log(tea.changeusername());