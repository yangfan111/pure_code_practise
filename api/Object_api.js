class CA
{
   BB (){
    
  }
  constructor()
  {
    this.a =5;
  }

  static BA(){}
}
let o = {};
 //Object.defineProperty(o, "a", { value : 1 });
// Object.defineProperty(o, "b", { value : 2, enumerable:false });
// Object.defineProperty(o, "c", { value : 3 }); // enumerable defaults to false
//o.a = 2; // 如果使用直接赋值的方式创建对象的属性，则这个属性的enumerable为true
o.a =2;
o.a =5
console.log(o.a);  
// console.log(o.d)
for (var i in o) {    
  console.log(i);  
}
//Object.defineProperty(inst,'AA')

  //   constructor() {
      
  //       this.b =1;
  //       this.a =1;
  //   };
  // AA(){};


// CA.ttt = function(){}

// let tttt  = new Function();
// tttt.lettt = function()
// {}
let ca =new CA();
let t =Object.getOwnPropertyNames(CA);
console.log(t)



class TA{
  constructor()
  {
    this.a =1;
    this.b =2;
  }
}
class TB extends TA{
  constructor()
  {
    super()
    this.c =1;
    this.d =2;
  }
}
let arr = []
var toString = Object.prototype.toString;
var v = toString.call(arr)
console.log(v);
// let ss = Object.entries(new TB())
// let ks = Object.getOwnPropertyNames(new TB())
// console.log(ks)
//console.log(ca.con1structor === CA)
// class CB extends CA
// {
  
//   constructor() {
//     super();
//     this.c =1;
// }
//  BB(){}
// }
// function ABC(){
  // [ 'length',
  // 'name',
  // 'prototype',
  // 'assign',
  // 'getOwnPropertyDescriptor',
  // 'getOwnPropertyDescriptors',
  // 'getOwnPropertyNames',
  // 'getOwnPropertySymbols',
  // 'is',
  // 'preventExtensions',
  // 'seal',
  // 'create',
  // 'defineProperties',
  // 'defineProperty',
  // 'freeze',
  // 'getPrototypeOf',
  // 'setPrototypeOf',
  // 'isExtensible',
  // 'isFrozen',
  // 'isSealed',
  // 'keys',
  // 'entries',
  // 'values' ]
  // [ 'constructor',
  // '__defineGetter__',
  // '__defineSetter__',
  // 'hasOwnProperty',
  // '__lookupGetter__',
  // '__lookupSetter__',
  // 'isPrototypeOf',
  // 'propertyIsEnumerable',
  // 'toString',
  // 'valueOf',
  // '__proto__',
  // 'toLocaleString' ]
// }
// function Person() {}
// Person.prototype.name = 'Zaxlct';
// Person.prototype.age  = 28;
// Person.prototype.job  = 'Software Engineer';
// Person.prototype.sayName = function() {
//   alert(this.name);
// }

// let pp = new Object();
// let tt = new pp();
// console.log(typeof(tt))
// console.log(typeof(pp))

// let abc = new Person();
// console.log(typeof(abc))

//  console.log(typeof(CB));
//  console.log(typeof(bb.__proto__.__proto__));
// // let tt =new Object();
// // console.info(Object);

// console.log(typeof 1); //function 
