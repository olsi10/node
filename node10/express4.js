let express = require('express');
let app = express();

app.get('/users/:user/:usersId/:bookId', function(req, res) {
    // let users = req.params.user;
    // let user = req.params.usersId;
    // let book = req.params.bookId;
    // res.send('<h1>' + users + "유저명" + user + book + ' Page</h1>');
    res.send(req.params);
});

app.listen('3000', function(req, res) {
    console.log("running")
})