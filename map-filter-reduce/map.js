const mynums=[1,2,3,4,5,6,7,8,9,10]
// const newnums= mynums.map((num)=>num+10)
const newnums=mynums
.map((num)=>num*10)
.map((newnum)=>newnum+1)
.filter((num)=>num>=40)
console.log(newnums);