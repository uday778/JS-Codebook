class user{
    constructor(username){
        this.username=username
    }
    logme(){
        console.log(`username is ${this.username}`);
    }
}

class Teacher extends user{
    constructor(username,email,password){
        super(username)
        this.email=email
        this.password=password
    }
    addcourse(){
        console.log(` a new course was added by ${this.username}`);
    }
}

const uday= new Teacher('uday','uday@gmail.com','143')
uday.addcourse()
uday.logme()

const arjun=new user('arjun')
arjun.logme()

console.log(uday instanceof Teacher);
console.log(uday instanceof user);
console.log(arjun instanceof Teacher);
console.log(arjun instanceof user);