

var fs = require("fs");
const path = require('path')
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


/**
 * [format]
 * dir>root
 * name>base
 */
let for_origin = { dir: '../ignored/git', base: 'foot.txt' }
let for_str = path.format(for_origin)
//console.log(for_str);

/**
 * [normalize]
 */
let nor_origin = '../a/b\c'
let nor_str = path.normalize(nor_origin)
//console.log(nor_str);
/**
 * [join]
 * 从右向左进行
 */
let join_str = path.join('dd/a', 'b', '../c')
//console.log(join_str);

/**
 * [dirname]
 * 默认会剔除第一个文件，不管是不是文件夹
 */
let dir_origin = '.././dd/a/b/c/'
let dir_str = path.dirname(dir_origin)
//console.log(dir_str);
/**
 * [abosolete]
 * '/xx'||c:为绝对路径
 */
let abo_origin = '/data/a'
let abo_rst = path.isAbsolute(abo_origin)
// console.log(abo_rst);

/**
 * [parse]
 * ret:{ root: 'C:',
  dir: 'C:',
  base: 'pathdir\file.txt',
  ext: '.txt',
  name: 'pathdir\file' }

 */
let par_origin = 'C:\path\dir\file.txt';
let par_rst = path.parse(par_origin)
//console.log(par_rst);


/**
 * [relative]
 * 返回从左向右绝对路径
 */
let r1_origin = '/data/orandea/impl/../aaa'
let r2_origin = '/data/orandea/impl/bbb'
let r3_origin = '/impl/bbb'
let relt_str = path.relative(r1_origin, r2_origin);
//console.log(relt_str);


/**
 * [resoleve]
 * 从右向左进行衔接，直到根目录为止
 * windows自动添加当前盘符
 */
let rs1_origin = '/begin/aaf/data'
let rs2_origin = '../data/a/c/b/bbbb'// 'data/orandea/impl/bbb'
let rels_str = path.resolve(rs1_origin, rs2_origin);
//console.log(rels_str);


//console.log(rels_str.split(path.sep``))
/**********************************************************************************************************/

// let str = path.parse('C:\path\dir\file.txt');


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