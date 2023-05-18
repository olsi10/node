let express = require('express');
let app = express();

// 미들웨어 설정
app.use(function(req, res, next) {
    //데이터 추가
    req.number = 52;
    res.number = 273;
    next();
});

app.use(function(req, res, next) {
    // 응답
    res.send('<h1>' + req.number + ':' + res.number +'</h1>');
})

// 서버 생성
app.listen(3000, function() {
    console.log("suerver running");
})