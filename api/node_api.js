import { Stream } from 'stream';

const fs = require('fs')
const path = require('path')

let stm = fs.createReadStream('F:/Proj_test/Proj_testssss.txt')

//合并多个map
function CombineMap(maps)
{
    let ret = new Map()
    for(let map of maps)
    {
        for(let [k,v] of map.entries()){
            ret.set(k,v)
        }
    }
}
//枚举值写法
var EnumDeclare;
(function (EnumDeclare) {
    EnumDeclare[EnumDeclare["Reward"] = 1] = "Reward";
    EnumDeclare[EnumDeclare["Exp"] = 2] = "Exp";
})(EnumDeclare = exports.EnumDeclare || (exports.EnumDeclare = {}));

//try mk dir
function TryToMakeDir(dirpath)
{
    let list = [dirpath];
    while (true) {
        if (list.length == 0)
            break;
        let dir = list.pop();
        if (!fs.existsSync(dir)) {
            let parent = path.dirname(dir);
            if (fs.existsSync(parent)) {
                fs.mkdirSync(dir);
            }
            else {
                list.push(dir);
                list.push(parent);
            }
        }
    }
}
function getTimeString(date) {
   return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
}