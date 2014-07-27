'use strict';
/* unused: false */
/* global require, console, process */

var subdomain = require('express-subdomain'),
  express = require('express'),
  app = express(),
  router = express.Router();

// example.com
app.get('/', function(req, res) {
    res.send('Homepage');
});

//api specific routes
router.get('/', function(req, res) {
    res.send('Welcome to our API!');
});

router.get('/users', function(req, res) {
    res.json([
        { name: "Brian" }
    ]);
});

app.use(subdomain('api', router));
app.listen(80);