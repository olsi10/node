const http = require('http');
const fs = require('fs');
const els = require('ejs');

http.createServer(function(req, res) {
    fs.readFile('ejsPage.ejs', 'utf8', function(error, data) {
        res.writeHead(200, {'Content-Type' : 'text/html'});
        res.end(ejs.render(data));
    });
}).listen(8085, function() {
    console.log("Server Open")
})