// node three.js

const myobj={
    js:'javascript',
    cpp:'c++',
    rb:'ruby',
    swift:'swift by apple'
}
for (const key in myobj) {
    // console.log(`${key} shortcut is for ${myobj[key]}`)
}

const program=["js","rb","py","java","cpp"]
for (const key in program) {
    // console.log(program[key])
}

// const map=new Map()
// map.set('IN',"India")
// map.set('USA',"united states of america")
// map.set('fr',"france")
// map.set('IN',"India")
// for (const key in map) {
//     console.log(map[key]);
// } //we cannot iterate on map