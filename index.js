var http = require('http');
var url = require("url");
var fs = require('fs');


var server = http.createServer(function(req, res) {
  var pathname = url.parse(req.url).pathname;
  if ('/' == pathname) {
    if (req.method === 'GET') {

      require('./public/login.js');

      //html表示
     fs.readFile('index.html', 'UTF-8', function(err, data){
     res.writeHead(200, {'Content-Type': 'text/html'});
     res.end(data);
   });
 }
 }
});

server.listen(5000, function () {
  console.log('listening on port 5000');
});
