var http = require('http');
var path = require('path');
var fs = require('fs');
var express = require('express');
var app = express();

app.use(express.static('26.png'+'/public'));

http.createServer(function (req, res) {
  fs.readFile('index.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080);
