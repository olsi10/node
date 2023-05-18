const express = require('express');
const app = express();

app.use(express.urlencoded({extended : false}));
app.use(express.json());

app.get('/', (req, res) => {
    res.send(`
    <form action='/' method='post'>
        <input type='submit' name='position' value='문과생' />
        <input type='submit' name='position' value='이과생' />
    </form>
    `);
});

app.post('/', (req, res) => {
    const {
        body: {position}, // 전달받은 값ㄷ이 postion하나
    } = req;
    res.send(
        `<script>
        alert('${position}');
        window.location.href = "/";
        </script>`
    );
    });


app.listen('3000', () => {
    console.log("server running...");
})