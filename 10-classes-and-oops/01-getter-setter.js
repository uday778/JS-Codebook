class user{
    constructor(email,password){
        this.email=email
        this.password=password
    }
    get email(){
         return this._email.toUpperCase()
    }
    set email(value){
         this._email=value
    }
    get password(){
        return this._password.toUpperCase()
    }
    set password(value){
        this._password = value
    }
}
const uday= new user('uday@gmail.com','uday123')
console.log(uday.password );
console.log(uday.email );