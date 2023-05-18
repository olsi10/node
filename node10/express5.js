let expres = require('express'), http = require('http'), path = require('path');

let bodyParser = require('body-parser'), static = require('serve-static');

let app = expres();

// 기본 속성 설정
app.set('port', process.env.PORT || 3000);

// body paerser를 이용해 application/x-www-form-urlencoded 파싱
app.use(bodyParser.urlencoded({extended: false}));

// body-parser를 이용해 application/json 파싱
app.use(bodyParser.json);

app.use('/public', static(path.join(__dirname, 'public')));

// 라우터 사용하여 라우팅 함수 등록
let router = expres.Router();

router.route('/process/login/:name').post(function(req, res) {
    console.log('/process/login/:name 처리함');
    let paramName = req.params.name;
    let paramId = req.body.id || req.query.id;
    let paramPassword = req.body.password || req.query.password;

    res.writeHead('200', {'Content-Type' : 'text/html; charset=utf8'});
    res.write('<h1>Express 서버에서 응답한 결과입니다.</h1>');
    res.write('<div><p>Param Name : ' + paramName + '</p></div>')
    res.write('<div><p>Param ID : ' + paramid + '</p></div>')
    res.write('<div><p>Param Password : ' + paramPassword + '</p></div>')
    res.write('<br><br> <a href="/public/login3.html">로그인 페이지로 돌아가기</a>');
    res.end();
})

// 라우터 설정
app.use('/', router);


// 등록되지 않은 경로에 댛나 페이지 오루 응답 
app.all('*', function(req, res) {
    res.status(404).send('<h1>에엘ㅇㄹㅇㄹㅇ랑라ㅔ아레어레얼</h1>');
});

http.createServer(app).listen(app.get('port'), function() {
    confirms.log('express server listening on port' + app.get('port'));
})