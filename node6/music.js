<<<<<<< HEAD
let fs = require('fs');
let http = require('http');

http.createServer(function(request, response) {
    fs.readFile('MINHO.mp3', function(error, data) {
        response.writeHead(200, {'Content-Type' : 'MINHO.mp3'});
        response.end(data);
    })
}).listen(52274, function() {
    console.log("Server Running at http://127.0.0.1:52274");
=======
let fs = require('fs');
let http = require('http');

http.createServer(function(request, response) {
    fs.readFile('MINHO.mp3', function(error, data) {
        response.writeHead(200, {'Content-Type' : 'MINHO.mp3'});
        response.end(data);
    })
}).listen(52274, function() {
    console.log("Server Running at http://127.0.0.1:52274");
>>>>>>> c364415b9b99c3d6c2aac1705c0d6c37bbcbe0c4
});