// const EventEmitter = require('events');

// class MyEmitter extends EventEmitter {}
// const myEmitter = new MyEmitter();
// myEmitter.on('error', (err) => {
//     console.error('whoops! there was an error');
//   });

// myEmitter.emit('error', new Error('whoops!'));
// Throws and crashes Node.js
//const fs = require('fs')
//const { Console } = require('console');
//console.error(new Error('whoops'));
//console.error(new Error('whoops'));
console.log('hello %s','world');
// const output = fs.createWriteStream('f:/stdout.log');
// const errorOutput = fs.createWriteStream('f:/stderr.log');
// custom simple logger
// const logger = new Console({ stdout: output, stderr: errorOutput });
// // use it like console
// const count = 5;
// logger.log('count: %d', count);
//console.assert(false, 'Whoops %s work', 'didn\'t')

const os = require('os');
//时间,计数器
console.profile('100-elements');
for (let i = 0; i < 100000; i++) {}
console.profileEnd('100-elements');
// prints 100-elements: 225.438ms
//console.log('%o',os.cpus());
console.log(os.freemem());

console.log('%o',os.networkInterfaces());
