<<<<<<< HEAD
let fs = require('fs');
let http = require('http');

http.createServer(function(request, response) {
    fs.readFile('HTMLPage.html', function(error, data) {
        response.writeHead(200, {'Content-Type' : 'text/html'});
        response.end(data);
    });
}).listen(52273, function() {
    console.log("Server Running at http://127.0.0.1:52273/");
=======
let fs = require('fs');
let http = require('http');

http.createServer(function(request, response) {
    fs.readFile('HTMLPage.html', function(error, data) {
        response.writeHead(200, {'Content-Type' : 'text/html'});
        response.end(data);
    });
}).listen(52273, function() {
    console.log("Server Running at http://127.0.0.1:52273/");
>>>>>>> c364415b9b99c3d6c2aac1705c0d6c37bbcbe0c4
})