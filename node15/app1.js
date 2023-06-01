const mysql = require('mysql');
const connection = mysql.createConnection({
    host : 'localhost',
    port: 3306,
    user : 'frog',
    password : '1234',
    database : 'mydb'
});

connection.connect(function(err) {
    if(err) {
        console.log('디비 연결 에러');
        console.error(err);
        throw err;
    } else {
        console.log('디비 연결 성공');
    }

    connection.query('SELECT * FROM TestTable ORDER BY id DESC',
        (error, rows, field) => {
            if(error) throw error;
            console.log('TestTable INFO : ', rows);
        }
    )

    connection.end();
})