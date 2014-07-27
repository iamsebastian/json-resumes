/*var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.type('text/plain');
  res.send('i am a beautiful butterfly');
});

app.listen(process.env.PORT || 4730);*/

var http = require('http'),
	fs = require('fs');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});
    // res.set({
    //   'Content-Type' : 'application/json',
    //   'charset' : 'utf-8'
    // });
    
    fs.readFile('cv.json', 'UTF-8', function (err,data) {
	  if (err) {
	    return console.log(err);
	  }
	  var obj = JSON.parse(data);
	  // console.log(obj);
      res.write(JSON.stringify(obj));
      res.end();
	});
}).listen(process.env.PORT || 8080);