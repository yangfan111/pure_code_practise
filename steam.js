

var fs = require("fs");
var zlib = require('zlib')
var rsteam = fs.createReadStream('.gitignore')
var data = ''
rsteam.on('data',function(chunk){data = data+chunk 
console.log("Commmmm")
console.log(chunk)
console.log(data)
console.log("Commmmm")})
console.log('----------------------')
rsteam.on('end',function(){console.log(data)})
console.log('----------------------2')
fs.createReadStream('input.txt')
  .pipe(zlib.createGzip()) //添加到zip内存--添加到stream
  .pipe(fs.createWriteStream('input.txt.gz'));
//var data = fs.readFileSync('syremote.cmd')
//  console.log(data.toJSON())
// console.log(data.toJSON().toString())
// data.on('end',function(){})

// let time = Date.now
// var data = fs.readFile('.gitignore',function(err,buffer){
//     console.log("excute2")
//    // console.log(buffer.toString())
    
// })
// var data2 = fs.readFileSync('syremote.cmd')
// console.log("excute1")
// var buffer =  Buffer.from('.gitignore','utf8')
// console.log(buffer)
// console.log(buffer.toString())