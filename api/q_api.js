let fs = require('fs')
const zlib = require('zlib')

var Q = require('q')



//定义代理返回项
function DeclarePromiseSelection() {
    const deferObject = Q.defer()
    fs.readFile('F:\\Proj_test\\Proj_testssss.txt', 'utf-8', (err, text) => {

        if (err) {
            deferObject.reject(new Error(err));
        }
        else {
            deferObject.resolve(text)
        }
    })
    return deferObject.promise
}
/*
* 定义代理内容
*/
function DeclarePromiseContent() {
    //定义init代理的执行内容
    const promiseLayer2 = ReadMyFile().then((fulfillText) => { console.log("come in layer1"); console.log(fulfillText) },
        (rejectErr) => { console.log("err"); console.error(rejectErr) })
    //定义promiseLayer2代理的执行内容
    const promiseLayer3 = promiseLayer2.then((fulfillText) => { console.log("come in layer2"); console.log(fulfillText) },
        (rejectErr) => { console.log("err"); console.error(rejectErr) })
    //定义promiseLayer3代理的执行内容
    promiseLayer3.then((fulfillText) => { console.log("come in layer3"); console.log(fulfillText) },
        (rejectErr) => { console.log("err"); console.error(rejectErr) })
}

//产生一个promise并执行成功
function CreateQPromise() {
    const q_promise = Q(22)
    return q_promise.then((resolve) => { console.log(resolve) })
}
//通过遍历数组递归执行promise
class PromiseArrayLink {
    Pfunc1(params) {
        console.log('layer1')
    }
    Pfunc2(params) {
        console.log('layer2')
    }
    Pfunc3(params) {
        console.log('layer3')
    }
    static LinkPromiseNode() {
        let linkInst = new PromiseNodeLink()
        //通过遍历数组递归执行promise,更换执行函数不更换promise·
        var pfuncSet = [linkInst.Pfunc1, linkInst.Pfunc2, linkInst.Pfunc3]
        // let linkInst = new PromiseNodeLink()
        let qpromise = CreateQPromise()
        pfuncSet.forEach((func) => {
            qpromise = qpromise.then(func)
        })


    }
    //比较叼的写法
    static LinkPromiseNode_short() {

        let linkInst = new PromiseNodeLink()
        //通过遍历数组递归执行promise,更换执行函数不更换promise·
        var pfuncSet = [linkInst.Pfunc1, linkInst.Pfunc2, linkInst.Pfunc3]
        // let linkInst = new PromiseNodeLink()
        let qpromise = CreateQPromise()
        pfuncSet.reduce((qpromise, current) => { qpromise = qpromise.then(current) }, CreateQPromise())
    }

}

class PromiseSetLink{
    PromiseSelection(fileName)
    {
        var defer = Q.defer()
        fs.access(fileName,(err,data)=>{
            if(err)
                defer.reject(err)
            else {
                console.log(data)
                defer.resolve(data)
                
            }
                
        })
        return defer.promise
    }
    //顺序操作
    OrderLink()
    {
        this.PromiseSelection('1').then(this.PromiseSelection('2'))
    }
    //并行操作
    ParallelLink()
    {
        //只要有一个reject立即返回
        Q.all([this.PromiseSelection('1'),this.PromiseSelection('2')])
        //等所有状态全都完成后
        Q.allSettled([this.PromiseSelection('1'),this.PromiseSelection('2')])
        //结束链，抛异常
        Q(1).done()

    }
}