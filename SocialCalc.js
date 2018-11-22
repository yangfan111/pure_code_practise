// "use strict";
// Object.defineProperty(exports, "__esModule", { value: true });
// const think_game_1 = require("think-game");
// class GameErrorCode {
// }
// GameErrorCode.ERROR_UNIMPLEMENTED = [1001, think_game_1._("ERROR_UNIMPLEMENTED")];
// exports.GameErrorCode = GameErrorCode;
// //# sourceMappingURL=GameErrorCode.js.map
// let strr = "ddd"
// console.log(strr.toUpperCase())
// console.info(GameErrorCode.ERROR_UNIMPLEMENTED)
// let strr = "dds__d_ffdsfg_dfsg"
// let b = strr.replace(/_/g,'!')
// console.log( b)


/*
const AveragePay =6000;//杭州市平均工资
const LowYears =10;//低缴费年龄
const HighYears =25;//高缴费年龄
const PersonalConst =139;//杭州缴费参数
const LowPayRefer =3000;//最低缴费
const HighPayRefer = 3000;//杭州最高缴费
base pension=> 1575.0000000000002
persional pension=> 725.1798561151079
approximate pension=> 2300.179856115108
---------------------result:2300---------------------


const AveragePay =6000;//杭州市平均工资
const LowYears =20;//低缴费年龄
const HighYears =15;//高缴费年龄
const PersonalConst =139;//杭州缴费参数
const LowPayRefer =3000;//最低缴费
const HighPayRefer = 15000;//杭州最高缴费

base pension=> 2775
persional pension=> 2382.73381294964
approximate pension=> 5157.73381294964
---------------------result:5157---------------------



const AveragePay =6000;//杭州市平均工资
const LowYears =25;//低缴费年龄
const HighYears =10;//高缴费年龄
const PersonalConst =139;//杭州缴费参数
const LowPayRefer =3000;//最低缴费
const HighPayRefer = 15000;//杭州最高缴费

base pension=> 2175
persional pension=> 1553.9568345323742
approximate pension=> 3728.956834532374
---------------------result:3728---------------------
[*******1000块********25年*******cashAll: 3813.392348620919]



*/
const AveragePay =6000;//杭州市平均工资
const LowYears =25;//低缴费年龄
const HighYears =10;//高缴费年龄
const PersonalConst =139;//杭州缴费参数
const LowPayRefer =3000;//最低缴费
const HighPayRefer = 15000;//杭州最高缴费

const CacheYears = 30;//存期
const PeriodCash = 1000;//每月存款
const CashStealRate =  0.01;//存款扣除
const IncreaseRate = 0.06;//利息
const CashIncreased = true;//利滚利
const ReceiveCash = 5000;//每月领取




class Social{
    constructor(lowWages,howWages)
    {
        this.lowWages = lowWages;
        this.howWages = howWages;
    }
    //计算金额
    calcCachedMoney(cashIncreased,year,cash,rate)
    {
      
        year = year||CacheYears;
        cash = cash ||PeriodCash;
        cash*=(1-CashStealRate);
        rate = rate ||IncreaseRate;
        let accCash =0;
        for(let i=0;i<year;i++)
        {
            accCash += Math.floor(accCash*rate);
            accCash+=cash*12;
            console.log('accCash:'+accCash+'||rate:'+Math.floor(accCash*rate));
            

        }

        return accCash;
    }
    calcConsumedMoney(leftCash)
    {
        let accYear =0;
        while(leftCash>0)
        {
            ++accYear;
           
            leftCash-=ReceiveCash*12;
            console.log('cash consume----:'+leftCash);
            leftCash += Math.floor(leftCash*IncreaseRate);
            if(leftCash<10000)
            {
                console.log('left cash:'+leftCash);
                break;
            }
        }
        console.log(accYear);
        return accYear;
    }
    printCachedMoney(cashIncreased,year,cash,rate)
    {
        const cashAll = this.calcCachedMoney(cashIncreased,year,cash,rate);
        console.log('cash accumulated:',cashAll);
       let consumeYear = this.calcConsumedMoney(cashAll);
       console.log('cash consume:',consumeYear);
    }
     calcPension()
    {
        console.log('base pension=>',this.__calcBasePension());
        console.log('persional pension=>',this.__calcPersonalPension())
        return this.__calcBasePension()+this.__calcPersonalPension();
    }
    printPension(){
        console.log('approximate pension=>',this.calcPension());
    }
    get ExponentPesion()
    {
        return (LowYears*this.lowWages+HighYears*this.howWages)/(LowYears+HighYears);
    }
    __calcBasePension()
    {
        return (LowYears+HighYears)*0.01*(this.ExponentPesion+AveragePay)/2
    }
    __calcPersonalPension(){
        return 12*(LowYears*this.lowWages+HighYears*this.howWages)*0.08/PersonalConst;
    }
}
function MakeSocial(){
    
    return new Social(LowPayRefer,HighPayRefer);
}

const socialInst = MakeSocial();
socialInst.printPension();
socialInst.printCachedMoney(CashIncreased);