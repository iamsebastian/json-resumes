'use strict';
/* global require, console, module */

var fs = require('fs'),
    html = require('./jsonresume-theme-sebastianblei/index');

var _export = function() {
  var json = JSON.parse(fs.readFileSync(__dirname + '/resume.json', 'utf8'));

  fs.writeFile(__dirname + '/resume.html', html.render(json), function(err){
    if(err === null) {
      console.log('Resume as HTML exported.');
    }
  });
};

_export();