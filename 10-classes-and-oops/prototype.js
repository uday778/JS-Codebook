// let name='uday     '
// console.log(name.length);
// console.log(name.trueLength);



let myheros=['thor','spyderman']
let heropower={
    thor:'hammer',
    soiderman:'sling',
    getspiderpower:function(){
        console.log(`spidy power is ${this.spiderman}`);
    }
}
Object.prototype.uday=function(){
    // console.log(`uday present in all objects`);
}
Array.prototype.arjun=function(){
    // console.log(`arjun present in arrays and say hello`);
}
// heropower.uday()
myheros.uday()
myheros.arjun()
// heropower.arjun()//heropwers is object but arjun() belongs to only Array



/////inheritance .////

const user={
    name:'johnny sins',
    email:'johnny@gmail.com'
}


const teacher={
    makevideo:true,

}
const teachingSupoort={
    isAvailable:false,
}
const TASupport={
    makeassignment:'JS assignment',fullTime:true,
    __proto__:teachingSupoort //outdated approach
}
teacher.__proto__=user

//modern syntax
Object.setPrototypeOf(teachingSupoort,teacher)



let anotherusername='aravind        '
String.prototype.trueLength=function(){
    console.log(`${this}`);
    // console.log(`${this.name}`);
    console.log(`true length is :${this.trim().length}`);

}
anotherusername.trueLength()
"uday kumar".trueLength();
"rishi".trueLength();
"iceTea".trueLength();
