let express = require('express');
let app = express();

app.get('/', function(req, res) {
    res.send('<h1>HELLO!!</h1>');
});

app.get('/', function(req, res) {
    // res.send('<a href="/b">Go to A</a>');
    res.sendFile(_dirname + './public/main.html');
    console.log(_dirname);
})

app.listen('3000', function() {
    console.log("running");
})