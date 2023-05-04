http=require('http');

url=require('url');

querystring = require('querystring');

function onRequest(req,res){

var path = url.parse(req.url).pathname;

var query =url.parse(req.url).query;

var fname = querystring.parse(query)["fname"];

var lname = querystring.parse(query)["lname"];

var id = querystring.parse(query)["id"];

var gen = querystring.parse(query)["gen"];

var em = querystring.parse(query)["em"];

res.write("hello"+fname+lname+id+em+"You have successfully registered your form")

res.end();

}

http.createServer(onRequest).listen(4001);

console.log('Server has Started.......');