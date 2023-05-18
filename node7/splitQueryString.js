<<<<<<< HEAD
let http = require('http');
let url = require('url');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  let q = url.parse(req.url, true).query;
  let txt = q.year + " " + q.month;
  console.log(txt);
  res.end(txt);
=======
let http = require('http');
let url = require('url');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  let q = url.parse(req.url, true).query;
  let txt = q.year + " " + q.month;
  console.log(txt);
  res.end(txt);
>>>>>>> c364415b9b99c3d6c2aac1705c0d6c37bbcbe0c4
}).listen(3000);