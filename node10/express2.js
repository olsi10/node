let express = require('express');
let app = express();

app.get('/a', function(req, res) {
    res.send('<a href="/b">Go to B</a>');
    res.sendFile(_dirname + './public/a.html');
});

app.get('/b', function(req, res) {
    res.send('<a href="/a">Go to A</a>');
    // res.sendFile(_dirname + './public/b.html');
});

app.all('*', function(req, res) { // 전
    res.status(404).send('<h1>ERORR - 페이지 업지롱</h1>');
});

// 서버 실행
app.listen('3000', function() {
    console.log('running 3000');
})