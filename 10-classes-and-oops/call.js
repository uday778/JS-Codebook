function setusername(username){
    this.username=username
    console.log('called');
}

function createuser(username,email,password) {
    setusername.call(this,username)
    //setusername(username)function call not working it taking refference not calling
    //for this case use .call it holds reference
    //  setusername.call(this,username)// in this case 'this' keyword holds the variables
    
    this.email=email
    this.password=password
}

const uday=new createuser('uday','uday@123.com',1432)
console.log(uday);