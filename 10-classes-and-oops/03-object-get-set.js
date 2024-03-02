// // Object based syntax
// // 
const user={
    email:'uday@gmail.com',
    _password:'abcdef',

    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email=value
    },

//     get password(){
//  return this._password.toUpperCase()
//     },
//     set password(value){
//         this._password=value
//     }
}

const hi=Object.create(user)
console.log(hi.email);











// const user = {
//     _email: 'uday@gmail.com',
//     _password: 'abcdef',

//     get email() {
//         return this._email.toUpperCase(); // Fixed the getter to return the uppercase email
//     },

//     set email(value) {
//         this._email = value;
//     }
// }

// const hi = Object.create(user);
// console.log(hi.email); // Output: UDAY@GMAIL.COM