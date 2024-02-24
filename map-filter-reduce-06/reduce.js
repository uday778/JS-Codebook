// const mynums=[1,2,3,4,5]
//         const mytotal=mynums.reduce((acc,currval)=>{},0)
// const mytotal=mynums.reduce((acc,currval)=>{
//     console.log(`acc: ${acc} and currval : ${currval}`)
//     return acc + currval
// },0)
// console.log(mytotal);

const shoppingcart=[
    {
        itemnanme:"js course",
        price:4999
    },
    {
        itemnanme:"python",
        price:3999
    },
    {
        itemnanme:"mobile dev",
        price:2999
    },
]

const pricetopay=shoppingcart.reduce((acc,item)=>{
    return acc+item.price;
},0)
console.log(pricetopay);