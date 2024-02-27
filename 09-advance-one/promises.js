const promise01 = new Promise((resolve, reject) => {
    //do an async task
    //db calls , cryptography , network
    setTimeout(() => {
        console.log('async task is complete  01');
        resolve()
    }, 1000)
})
//another syntax

promise01.then(() => {
    console.log('promise01 consumed');
})

new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('async task 02');
        resolve();
    }, 4000)
}).then(() => {
    console.log('async task 02 is resolved');
})

const promise03 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({ username: 'uday', email: "uday@gmail.com" })
    }, 3000)
})
promise03.then((user) => {
    console.log(user);
})



const promise04 = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false;
        if (!error) {
            resolve({ username: 'uday', password: '123' })
        }
        else {
            reject('Error: something went wrong')
        }
    }, 5000)
})
const username = promise04.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch((error) => {
    console.log(error);
}).finally(() => {
    console.log('the promise either resolved or rejected');
})



const promise05 = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true;
        if (!error) {
            resolve({ username: 'javascript', password: '123' })
        }
        else {
            reject('Error: JS IS    went wrong')
        }
    }, 5000)
})

async function consumepromise05() {
    try {
        const response = await promise05
        console.log(response);
    } catch (err) {
        console.log(err);
    }
}
consumepromise05()


//

async function getallusers() {
    try {
        const response = await fetch('https://api.github.com/users/uday778')
        const data = await response.json()
        console.log(data);
    } catch (err) {
        console.log("ERROR: ", err);
    }
}
getallusers()

fetch('https://api.github.com/users/uday778')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((err)=>{
    console.log(err);
})
