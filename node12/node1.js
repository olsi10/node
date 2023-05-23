const express = require('express');
const app = express();
const port = process.env.PORT || 3000

let cookieParser = require('cookie-parser');
app.use(cookieParser('secret'));

// 쿠키 옵션 설정
// 웹서버를 통해서 쿠키 접근
// 쿠키 수명을 밀리초로 설정
// 쿠키 암호화
const cookieConfig = {
    httpOnly : true,
    maxAge : 1000000,
    signed : true,
};

app.get('/setcookie', function(req, res) {
    res.cookie('cookieName', 'cookieValue', cookieConfig)
    res.cookie('user', {
        name: 'bts',
        data: 100
    });
    res.redirect('/getcookie');
})

app.get('/getcookie', function(req, res) {
    res.send(req.cookies);
});

app.get('/', function(req, res) {
    res.send('<h1>Express Simple Server!</h1>');
});

app.listen(port, () => {
    console.log("server is running...");
});