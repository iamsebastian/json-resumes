'use strict';
/* global require, console, process */

var http = require('http'),
  fs = require('fs');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});
  
  fs.readFile('cv.json', 'UTF-8', function (err,data) {
    if (err) {
      return console.log(err);
    }
    var obj = JSON.parse(data);
      res.write(JSON.stringify(obj));
      res.end();
  });
}).listen(process.env.PORT || 80);