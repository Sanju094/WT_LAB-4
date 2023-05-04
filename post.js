http=require('http');

querystring = require('querystring');

var qs;

http.createServer(function(req,res){

var data1='';

req.on('data',function(chunk){

console.log(chunk);

data1+=chunk;

});

req.on('end',function(){qs=querystring.parse(data1);
console.log(qs);

fname=qs['fname']

lname=qs['lname']

id=qs['id']

em=qs['em']

res.write("hello"+fname+lname+id+em+"You have successfully registered your form")

res.end();

});

}).listen(3000); console.log('Server has Started.......');