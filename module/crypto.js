const crypto = require('crypto');
//选取哈希算法列表
const  hashMathNames = crypto.getHashes();

function getHashDigest(hashMathName)
{
    let hashObj = crypto.createHash(hashMathName);
    hashObj.update('datasdjflsdjflsdjflsdfjlsdjglsdjflsjdlfjlsjgflsjglsjdflsdjflsdjf');
    const hashCode = hashObj.digest('hex');
    console.log(`[${hashMathName}]:${hashCode}`);
}
function getHMacDigest(hashMathName,privateKey)
{
    let hashObj = crypto.createHmac(hashMathName,privateKey);
    hashObj.update('datasdjflsdjflsdjflsdfjlsdjglsdjflsjdlfjlsjgflsjglsjdflsdjflsdjf');
    const hashCode = hashObj.digest('hex');
    console.log(`[${hashMathName}]:${hashCode}`);
}
/**
 * 输出加密明文 参数：math 
 */
function consoleHashCode()
{
    hashMathNames.forEach(element => {
        getHashDigest(element);
    });
}
/**
 *输出加密明文 参数：math,key 
 */
function consoleHMacCode()
{
    hashMathNames.forEach(element => {
        getHMacDigest(element,'abc');
    });
}
consoleHMacCode();
