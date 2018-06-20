

// var fs = require("fs");

// var data = fs.readFileSync('syremote.cmd')
// // console.log(data.toString())
// // console.log(data.toJSON())
// let time = Date.now
// var data = fs.readFile('.gitignore',function(err,buffer){
//     console.log("excute2")
//    // console.log(buffer.toString())
    
// })
// var data2 = fs.readFileSync('syremote.cmd')
// console.log("excute1")
 
/*
    事件触发

*/
// const copy = JSON.parse(json, (key, value) => {
//     return value && value.type === 'Buffer' ?
//       Buffer.from(value.data) :
//       value;
//   });
// function sleep(time) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve();
//         }, time);
//         console.log("Commmmm1")
//     });
// }
// var events = require('events')
// var evtEmitter = new events.EventEmitter()
// evtEmitter.on('excute',function(name){
//     console.log(name)
//     sleep(3000)
//     console.log("Exucted")
   
// })
// evtEmitter.on('connect',function(name)
// {
//     console.log(name)
//     console.log("Connected")
//     evtEmitter.emit('excute',name)
// })


// evtEmitter.emit('connect','yf1')
// evtEmitter.emit('connect','yf2')
class TT{
    constructor() {
        this.itemData = null;
        this.cardData = null;
        this.levelData = null;
        this.UserData = null;
    }
}
let t = new TT()
console.dir(t)
console.log('a%daaaa',111)