var fs = require('fs')

var arr = [1, 2, 3, 4]
var arr2 = [5, 7, 8]
arr = arr.concat(arr2)
class Example{
    constructor()
    {
        this.a = 1
        this.b = 2
    }
     Aa(params) {
        
    }
    Ab(params) {
        
    }
}
//console.log(arr)
// var的有效范围是函数，而let 和 const是块
function FuncScope() {
    let id = 1
    if (id == 1) {
        var id2 = 0
    }
    console.log(id2)

}
const luke = 'new player'

//使用轻度定义代替重度
const item = {} // new Object()

const obj = {
    id: 5,

    abc: 4,
    ['abc']: 90 //{['abc'] } = {'abc'}  === obj.abc  
}
//console.log(obj.abc)

function getKey(k) {
    return `keyNamed${k}`
}
//object-shorthand
const walker = 'walker'
const walkerObj = { walker, 'abc': 11 }

//quote-props 
const ab =
    {
        'foo': 2//bad 
    }
//Object.prototype: console.log
const has = Object.prototype.hasOwnProperty
//console.log(has.call(null,"key"))

//object操作
const original = { a: 1, b: 2 };

var newSet = Object.assign({}, original, { c: 4 })

//使用protoType调用之
const hasOne = Object.prototype.hasOwnProperty
//hasOne.call(null,hasOne)

/*

数组操作：reduce(accu,curr,index,arr)
         map (x)
         filter
         Array.from(oriArr,mapFunc)
         splice 
         unshift/shift
         reduceRight
         


*/






// object destructuring
function getFullName({ firstName, lastName }) {
    return `${firstName} ${lastName}`;
}

//多项输出
function mulOutputFunction(sth) {
    var left = 1
    var right = 2
    return { left, right }
}
//直接执行的函数
(function Immediator() { console.log("111") }());
//多参数
function concactAll(...args) {
    return args.join(';')
}
//使用default args 
function defaultArgs(opts = {}) {

}
//log展开项、展开数组
function spreadAll()
{
    let ex = new Example()
    console.log(...[1,2,3,4])
}

// good
class Jedi {
    jump() {
      this.jumping = true;
      return this;
    }
  
    setHeight(height) {
      this.height = height;
      return this;
    }
  }
// import 缩进
  import {
    longNameA,
    longNameB,
    longNameC,
    longNameD,
    longNameE,
  } from 'path';
// number 使用，parseInt做基数
const val = Number(inputValue);
const val2 = parseInt(inputValue, 10);
//导出时类或类实例用大写，其他小写
//缩写首字母用大写
//全大写表示常量不会改变
//执行函数
function Excute() {
    const {left,right} = mulOutputFunction()
    let cset = concactAll()
    spreadAll()
  
    const lk = new Jedi();
  
    lk.jump()
      .setHeight(20);
  
}




Excute()


