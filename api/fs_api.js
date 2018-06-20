


const fs = require('fs')
const pathStr = 'C:/id_rsa.pub'

// 创建buff 对象,一次性返回buffer数组
// let fileBuffer = fs.readFileSync(new mURL('file:///C:/id_rsa.pub'));

// //创建fs.readsteam 流对象  继承自eventEmitter,可以在内部添加监听者
// let readSteam = fs.createReadStream(pathStr)
// let writeSteam = fs.createWriteStream(pathStr)


1
// //添加文件观察,继承自eventEmitter
// let fsWachter = fs.watch(pathStr, { encoding: 'utf8' }, (eventType, filename) => {
//     if (filename) {
//         console.log(filename);
//         // Prints: <Buffer ...>
//     }
// })
// //获取文件信息
// let stats = fs.stats(pathStr)
// //@params: path,写入模式，回调函数
// fs.access(pathStr, 'wx', (err, fd) => {

// })



/*
    ---------------------------------------------------------------------------------------
    ---------------------------------------------------------------------------------------
    ---------------------------------------------------------------------------------------
    ---------------------------------------------------------------------------------------
    -----------------------------缓存直接操作文件模块 --------------------------------------
    ---------------------------------------------------------------------------------------
    ---------------------------------------------------------------------------------------
    ---------------------------------------------------------------------------------------
    ---------------------------------------------------------------------------------------
*/

//缓存直接操作文件模块
class FSDirectFunctionMarket {
    Default() {
        //尝试访问文件,默认为fs.constants.F_OK
        fs.access(pathStr, fs.constants.F_OK, (err) => { })
        /*打开文件夹并执行相关操作  
 @return [fd] - 通过 fs.open() 方法返回的文件描述符。
 @param  [flags]文件操作模式 r+读写模式 rs同步读取模式 a追加模式,a+以读取和追加的模式 ,如果不存在则创建并打开文件 [mod]文件创建权限，默认为666,
*/
        fs.open(pathStr, 'r', (err, fd) => {
            if (err) {
                if (err.code == 'ENOENT') {
                    return
                }
            }
            console.log(fd)

        })

        //获取文件相关状态@return 返回文件信息json
        fs.stat(pathStr, (err, stat) => {
            console.info(stat)
        })
        /*
        异步读取操作
        @return       返回buffer结束索引值,对应到buf解析 ,与fs,open一起使用
        @param buffer       自定义接收缓存区
        @param fd           文件标识符
        @param offset       缓存区开始写入的位置
        @param length       文件的读取长度
        @param position     文件开始阅读的位置
        @return bytesRead   read结尾位置(标记endIndx的buffer区域)
        @return buffer      read的缓存区域（buff实际的写入buffer部分引用）
        */
        let buf = new Buffer(1024)
        let fd = 0
        fs.read(fd, buf, 0, buf.length, 0, (err, bytes) => {
            if (err) {
                console.log(err)
            }
            if (bytes > 0) {
                console.log(buf.slice(0, bytes).toString())
            }
        })

        /*
        异步写入操作
        @return 返回buffer结束索引值,对应到buf解析 ,与fs,open一起使用
        @param  strring:用写入的字符串
        @param fd 文件标识符文件标识符
        @return writen 写入的字符长度
        @return writenBuffer 写入时的buffer
        */
        fs.write(fd, new Buffer('write something'), (err, writen, writenBuffer) => {
            if (err) { 
                console.error('write file error:%s', err)
                return
            }

            //  let nowBuffer = fileBuffer.slice(0, writen)
            console.log('write file content :%s', writenBuffer.toString())
        })

        //关闭文件标识符
        fs.close(fd, (err) => {
            if (err) {
                console.error('write file error:%s', err)
                return
            }
        })
        /*
        直接写入字符串
        @fsFlags:文件操作标记 默认为'a'没有会创建之 'a+'并且可读 ,'x'如果路径存在则会失败
        @mode :默认666
        */
        fs.appendFile(pathStr, "data to append", 'a')
    }
}
/*


     ----------------------------- fs文件操作实例 -----------------------------

*/
class FSUtilFunctionMarket {
   static Default()
    {
        //创建一个带前缀的唯一文件夹,/foo-：自定义前缀
        fs.mkdtemp('F:/Proj_test/foo-',(err,folder)=>
            {console.log(folder)})
    }
}
class FSOpertationSet {
    //操作入口
    OperateFile(filePath, opCall) {

        fs.open(filePath, 'r+', (err, fd) => {
            if (err) {
                console.error('open file error:%s', err)
                return
            }
            console.info('open file sucess,fd:%d', fd)
            opCall(fd)
            fs.close(fd, (err) => { })
        })

    }
    //读取文件
    ReadFileDirectly(fd) {

        let buffer = new Buffer(1024)
        fs.read(fd, buffer, 1, buffer.length - 1, 0, (err, endIndx, readenBuffer) => {

            if (err) {
                console.error('read file error:%s', err)
                return
            }
            //      let sliceBuffer = buffer.slice(0,endIndx)

            if ((readenBuffer && readenBuffer.length > 0))
                console.log('read file content :%s', readenBuffer.toString())
            else
                console.log('read empty file')
            fs.close(fd, (err) => {
                if (err) {
                    console.error(err)
                    return
                }
                console.log('close file')
            })

        })
    }
    //写入文件
    WriteFileDirectly_buffer(fd) {
        let buffer = new Buffer('write something')
        fs.write(fd, buffer, 1, buffer.length - 1, 20, (err, writen, currBuffer) => {
            if (err) {
                err.code
                console.error('write file error:%s', err)
                return
            }
            console.log(writen)
            console.log('file content :%s', currBuffer.toString())
            if (buffer == currBuffer) {
                console.log("aaaaaaaaaaaaaaa")
            }
            fs.closeSync(fd)
        })
    }
}



let filePath = 'E:/IO.txt'
FSUtilFunctionMarket.Default()