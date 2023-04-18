// 모듈 추출
let express = require('express');

// 서버 생성
let app = express();

// 미들웨어 설정
app.use(function (req, res) {
    //User-agent 속성 추출
    let agent = req.header('User-Agent');
    console.log(req.headers);
    console.log(agent);

    // 응답
    // 상태 코드만 보낼 때에는 sendStatus 메서드 사용
    res.sendStatus(200);
})

// 서버 실행
app.listen(3000, function() {
    console.log("Server running at http://127.0.0.1:3000");
});