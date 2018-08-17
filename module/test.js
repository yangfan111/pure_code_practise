var fs = require('fs');
console.log('begin');

let buffers = fs.readFile('f:\\output.log',(err,data)=>{
    console.log(data);

});


console.log('end');