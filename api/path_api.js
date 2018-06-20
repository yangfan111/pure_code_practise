

var fs = require("fs");
const path = require('path')
var zlib = require('zlib')
//var rsteam = fs.createReadStream('.gitignore')
var data = ''
//rsteam.on('data',function(chunk){data = data+chunk 
// console.log("Commmmm")
// console.log(chunk)
// console.log(data)
// console.log("Commmmm")})
// console.log('----------------------')
// rsteam.on('end',function(){console.log(data)})
// console.log('----------------------2')
// fs.createReadStream('input.txt')
//   .pipe(zlib.createGzip())
//   .pipe(fs.createWriteStream('input.txt.gz'));
//var data = fs.readFileSync('syremote.cmd')
//  console.log(data.toJSON())
//  console.log(data.toString())
 //console.info(data)



/*************************************************path*************************************************/
/**********************************************************************************************************/
 //format
let for_origin = {dir:'../ignored/git',base:'foot.txt'}
let for_str = path.format(for_origin)


//normalize
let nor_origin = '../a/b\c'
let nor_str = path.normalize(nor_origin)

//join

let join_str = path.join('dd/a','b','c')

// dirname

let dir_origin = '.././dd/a/b/c'
let dir_str = path.dirname(dir_origin)


//abosolete
let abo_origin = 'c:/data/a'
let abo_rst = path.isAbsolute(abo_origin)

//parse

let par_origin =  'sdfasgsfsgsfsdf;;;;'//.././home/user/dir/file'
let par_rst = path.parse(par_origin)


//relatviecc
let r1_origin = '/data/orandea/impl/../aaa'
let r2_origin =  '/data/orandea/impl/bbb'
let r3_origin =  '/impl/bbb'
let relt_str = path.relative(r1_origin, r2_origin);
// Returns: '../../impl/bbb'


//resoleve
let rs1_origin = '/begin/aaf/data'
let rs2_origin =  './data/a/c/b/bbbb'// 'data/orandea/impl/bbb'
let rels_str = path.resolve(rs1_origin,  rs2_origin);



//console.log(rels_str.split(path.sep``))
/**********************************************************************************************************/

// let str = path.parse('C:\path\dir\file.txt');

 console.log(par_rst)
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