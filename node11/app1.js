const express = require('express');
const bodyparser = require('body-parser');

const app = express();

app.use(bodyparser.urlencoded({ extended : false }));

app.use(bodyparser.json());

app.use(express.static(__dirname + '/login'));

app.use((req, res) => {
    const userId = req.body.userId || req.query.userId;
    const userPs = req.body.userps || req.query.userPs;

    res.writeHead('200', { 'Content-Type' : 'text/html; charset=utf8'});
    res.write('<h1>Login의 id, pw 결과</h1>');
    res.write(`<div><p>${userId}</p></div>`);
    res.write(`<div><p>${userPs}</p></div>`);
    res.end(JSON.stringify(req.body, null, 2));
});

app.listen('3000', () => {
    console.log('server running');
})