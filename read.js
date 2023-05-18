// let fs = require('fs');
let http = require('http');
let port = 3000;
let server = http.createServer();

// 웹서버 시작으로 3000번 포트에서 대기하도록 합니다.
server.listen(port, function() {
    console.log("웹 서버 시작 : %d", port);
})

// http.createServer(function(request, reponse) {
//     // HTML 파일 읽기
//     fs.readFile()
// })