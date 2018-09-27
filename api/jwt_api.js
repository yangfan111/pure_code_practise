var jwt=require('jsonwebtoken');


 function gen(sercetKey)
{
    var jwtToken = jwt.sign({exp:Date.now()+3000},sercetKey);
    console.log(jwtToken);
    return jwtToken;
}
function verify(jwtToken,sercetKey)
{
    jwt.verify(jwtToken,sercetKey,function(err,decode)
{
    if(err)
    {
        console.info(err);
        return;
    }
    console.log(decode);
    

})
}
var token= gen('mk');
verify(token,'mk');





































