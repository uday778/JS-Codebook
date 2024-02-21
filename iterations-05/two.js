//for of    loop

// ["","",""]
// [{},{},{}]

const arr=[1,2,3,4,5]
for (const i of arr) {
    // console.log(i)
}

const greeting="hello world"
for (const greet of greeting) {
    // console.log(`each char is ${greet} `)
}


// maps
// Map objects are collections of key-value pairs. A key in the Map may only occur once; it is unique in the Map's collection.
const map=new Map()
map.set('IN',"India")
map.set('USA',"united states of america")
map.set('fr',"france")
map.set('IN',"India")

// console.log(map)

for (const [key,value] of map) {
    // console.log(key,':--',value)
}

const myobj={
    'game1':'NFS',
    'game2':'SPIDERMAN'
}
//for of loop
