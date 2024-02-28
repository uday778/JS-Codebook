class user{
    constructor(username){
        this.username=username
    }

    logme(){
        console.log(`username : ${this.username}`);
    }
    static createId(){
        return `123`
    }
}

const uday = new user('uday kumar')

// console.log(uday.createId())

class Teacher extends user{
    constructor(username,email){
        super(username)
        this.email=email
    }
}
const iphone = new Teacher('iphone','teacher@gmail.com')
console.log(iphone);
console.log(iphone.createId())