/*
尽量使用高阶函数代替低阶
Use map() / every() / filter() / find() / findIndex() / reduce() / some() / ... to iterate over arrays, 
and Object.keys() / Object.values() / Object.entries() to produce arrays so you can iterate over objects.

    数组操作：reduce(accu,curr,index,arr)
         map (x)
         filter
         Array.from(oriArr,mapFunc)
         splice 
         unshift/shift
         reduceRight

*/

const arrayNo = [1, 2, 3, 4, 5, 6]
//遍历并返回新数组
newOne = arrayNo.map((x) => { x = x + 1; return x })
function MapFunc(x) {
    return x + 1 
}
//total里返回上一个的值，sum返回总值
const sum = numbers.reduce((total, num) =>{return(total + num)}, 0);
sum === 15;
//拼接数组 || 移除特定pos及以上项目
acopy.splice(0, 0, 2);

//better:复制数组结构
//数组括号层打开状态
let arrayCopy = [...arrayNo]

//数组创建 
let acopy = Array.from(arrayNo)
//创建，map合并操作 
const baz = Array.from(arrayNo, MapFunc);
console.info(baz)

//FixMe excute
