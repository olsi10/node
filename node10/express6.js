let express = require('express');
let static = require('serve-static');

let app = express();

app.use(express.static(__dirname  + '/public')); // 루트로 public 파일 접근 가능
app.use(function (req, res) {
    //응답
    res.writeHead(200, {'Content-Type' : 'text/html'});
    res.end('<img src="/boop.jpg" width:"100%" />');
})

app.listen('3000', function() {
    console.log('suerver is running');
});