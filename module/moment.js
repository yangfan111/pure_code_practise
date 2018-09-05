const mmt =require('moment');
/**
 * [valueof]
 * 返回时间戳
 */
let mmtNow = mmt();
let mmtBeforeVar=mmt(Date.now()-600000);
let svalof = mmtNow.valueOf();
//console.log(svalof);
/**
 * [format]
*/
let fmtStr= mmtNow.format('YYYY-MM-DD-HH-mm');
//console.log(fmtStr);
/**
 * [from]
 * 返回笼统时间
 * suffix:是否带有前缀 in 10 minutes/10 minutes
 */
let fromStr =mmtNow.from(mmtBeforeVar,false);
console.log(fromStr);
/**
 * [diff]
 * 返回精确时间
 * return Number
 */
let span = mmt(Date.now()).diff(mmtBeforeVar,'d');
console.log(span)

/**
 * [hour,week,second]
 * 单独获取时间变量
 * weekday:2,month:7,hour:13,sec:29
 */
let  weekday = mmtNow.weekday();
let  hour = mmtNow.hour();
let  month = mmtNow.month();
let  second = mmtNow.second();
console.log('weekday:%s,month:%s,hour:%s,sec:%s',weekday,month,hour,second);

/**
 * [toArray,toISOString,isAfter,toObject,isBetween,isSameOrAfter]
 * [ 2018, 7, 28, 13, 28, 12, 446 ]
 * 2018-08-28T05:28:53.194Z
 * { years: 2018,
  months: 7,
  date: 28,
  hours: 13,
  minutes: 43,
  seconds: 18,
  milliseconds: 826 }
 */
let tmArrs = mmtBeforeVar.toArray();
let tmStr = mmtBeforeVar.toISOString();
let isAftessr = mmtNow.isAfter(Date.now());
console.log(tmStr)
/**
 * [utcOffset,isUTC,max,min]
 * ret:480
 */
let utcOf =mmtNow.utcOffset()
//mmtNow.max(mmt());
console.log(mmtNow.toObject())
console.log(utcOf)

/**
 * [add,substrict]
 * 当前对象增加或减少
 * amount:增加值  DurationInputArg1
 * unit:增加单位 DurationInputArg2
 */
let t = mmtNow.add(20,'hour');
console.log(t.diff(mmt(),'day'));


