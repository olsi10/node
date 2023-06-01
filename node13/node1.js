const express = require('express');
const session = require('express-session');

let app = express();

app.use(session({
    secret: 'secret key',
    resave: false,
    saveUninitialized: true,
}));

app.use(function(req, res) { });

app.listen(3000, function() {
    console.log('server running 3000');
})