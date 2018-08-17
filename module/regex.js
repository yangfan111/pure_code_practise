


/*
    有则输出所有，没有则return
*/

function regexTest() {
    //正则快捷键 :最后一个字符的修饰符
    let rstr1 = 'ab*'; //表示a后面跟着0或若干个b
    let rstr2 = 'ab+'//表示a后面至少要有一个b
    let rstr3 = 'ab?';//表示a后面跟0个或者一个b
    let rstr4 = 'a?b+$';//表示【0~n】个a+【1~n】个b在末尾

    //* -> {0,} + -> {1,} ? -> {0,1}

    //正则修饰符
    let rstr5 = 'ab{2,6}'//{}表示重复次数，2~6个b 
    let rstr6 = 'ab*c' //正则表达式符号相连会报错
    let rstr7 = '(a|b)ef';
    let rstr8 = 'asdf.*sdfg'//中间有任意字符
    let rstr9 = '^.{3}$' //全字匹配
    let rstr10 = '[a-d]'//代表一个字符
    let rstr11 = '[^a-zA-Z]'//代码一个不希望出现的字符
    let srcStr = "abfffc";



    let matchRet = srcStr.match(rstr8);


    console.info(matchRet);

}
function ruleRegex(){
    let httpRegex = 'https?:\/\/.+$';
    let pswRegex = '^(\w){6,20}$';
    let srcStr = 'a1_';  //'https://172.15.12.3';
    let matchRet = srcStr.match(pswRegex);
  
    console.info(matchRet);
}
ruleRegex()






