// 모듈 추출
// query 속성을 써서 요청 매개변수 추출
// 사용자 요청에서 name, region 추출
let express = require('express');

// 서버 생성
let app = express();

// 미들웨어 설정
app.use(function (req, res, next) {
    // 변수 선언
    let name = req.query.name;
    let region = req.query.region;

    // 응답
    res.send('<h1>' + name + '-' + region + '</h1>');
});

// 서버 실행
app.listen(3000, function() {
    console.log("Server running at http://127.0.0.1:3000");
    
});