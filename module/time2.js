const moment =require('moment');
let mmtBeforeVar=moment(Date.now()-6000);
let isAftessr = mmtBeforeVar.isSame(Date.now(),'h');
moment.updateLocale();
console.info(moment.locales());

moment().format('L')     // 20/08/2018
moment().format('l');    // 20/8/2018
moment().format('LL');   // 20 August 2018
moment().format('ll');   // 20 Aug 2018
moment().format('LLL');  // 20 August 2018 6:27 PM
moment().format('lll');  // 20 Aug 2018 6:27 PM
moment().format('LLLL'); // Monday, 20 August 2018 6:27 PM
moment().format('llll'); // Mon, 20 Aug 2018 6:27 PM
moment("20111031", "YYYYMMDD").fromNow(); // 7 年前
moment("20120620", "YYYYMMDD").fromNow(); // 6 年前
moment().startOf('day').fromNow();        // 18 小时前
moment().endOf('day').fromNow();          // 6 小时内
moment().startOf('hour').fromNow();       // 25 分钟前
