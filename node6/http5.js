const { Socket } = require('dgram');
let fs = require('fs');
let http = require('http');
let server = http.createServer();

let port = 3005;

// 웹 서버 오픈
server.listen(port, function() {
    console.log("웹 서버가 시작되었습니다. : %d", port); 
});

// 클라이언트 연결 이벤트 처리
server.on('connection', function(socket) {
    console.log("클라이언트 접속 : %s %d", socket.remoteAddress, socket.remotePort);
})

server.on('request', function(req, res) {
    console.log("클라이언트 요청이 들어왔습니다.");

    res.writeHead(200, { "Content-Type" : "text/html; charset=utf-8"});
    res.write('<!DOCTYPE html>');
    res.write("<html>");
    res.write("<head>");
    res.write("<title>응답 페이지</title>");
    res.write("<body>");
    res.write("<h1>Node.js 응답 페이지</h1>");
    res.write("</body>");
    res.write("</html>");
    res.end();
})
