
let start = Date.now()

console.log("begin")
setTimeout(() => {
  
    console.log('async date:%d', Date.now() - start)
},0);


for(var i=0;i<1000000000;i++){}
console.log('syncTime2 date:%d', Date.now() - start)
// setTimeout(function () {
//     console.log('timeout2 date:%d', Date.now() - start)
// }, 2000);
var str = ["s","d"]
