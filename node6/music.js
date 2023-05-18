let fs = require('fs');
let http = require('http');

http.createServer(function(request, response) {
    fs.readFile('MINHO.mp3', function(error, data) {
        response.writeHead(200, {'Content-Type' : 'MINHO.mp3'});
        response.end(data);
    })
}).listen(52274, function() {
    console.log("Server Running at http://127.0.0.1:52274");
});