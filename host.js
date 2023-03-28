let host = '10.96.124.134';
let port = 3000;
let server = http.createServer();

server.listen(port, host, '5000', function() {
    console.log("웹 서버 시작 : %s. %d", host, port);
})