// 

//node interview-obj-mathpi.js

// console.log(Math.PI);
// Math.PI=5
// console.log(Math.PI);// not overwritted to 5

// const descriptor=Object.getOwnPropertyDescriptor(Math,"PI")
// console.log(descriptor);

const myobj={
    name:'uday kumar',
    price:250,
    isavailable:true,

    orderchai:function(){
        console.log('chai nahi bani');
    }
}
console.log(Object.getOwnPropertyDescriptor(myobj,'name'))
Object.defineProperty(myobj,'name',{
    // Writable : false,
    Enumerable:true,
})
console.log(Object.getOwnPropertyDescriptor(myobj,'name'));

for (let [key,value] of Object.entries(myobj)) {
    if(typeof value !='function'){
        console.log(`${key} :${value}`);
    }
    
}



