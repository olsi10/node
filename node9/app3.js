const express = require('express');

const app = express();

app.use((req, res) => {
    const agent = req.header('User-Agent');
    const paraName = req.query.name;

    // 매개변수를 paraName에 넣음
    const browserChrome = 'Hello Chrome';
    const browserOthers = 'Hello Others';

    console.log(req.header);
    console.log(req.baseUrl);
    console.log(req.hostname);

    if(agent.toLowerCase().match(/chrome/)) {
        res.write(`<div><p>${browserChrome}</p></div>`);
    } else {
        res.write(`<div><p>${browserOthers}</p></div>`);
    }
    
    res.write(`<div><p>${agent}</p></div>`);
    res.write(`<div><p>${paraName}</p></div>`);
    res.end();
});

app.listen(3000,  () => {
    console.log("Server is running at http://127.0.0.1:3000")
})