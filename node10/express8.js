let express = require('express');
let morgan = require('morgan');
let app = express();

app.use(morgan(':method + :date'));
app.use(function (req, res) {
    res.send('<h1>express Basic</h1>');
});

// 서버를 실행합니다.
app.listen(3000, function() {
    console.log('server running');
})