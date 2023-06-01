const mysql = require('mysql');
const connection = mysql.createConnection({
    host : 'localhost',
    port: 3306,
    user : 'frog',
    password : '1234',
    database : 'mydb'
});

// 디비 연결 테스트
// connection.connect(function(err) {
//     if(err) {
//         console.error('mysql connection error');
//         console.error(err);
//         throw err;
//     } else {
//         console.log('연결에 성공하였습니다.');
//     }
// });

// users 테이블 데이터 출력
connection.connect();
connection.query("SELECT * FROM TestTable ORDER BY id DESC",
    (error, rows, field) => {
        if(error) throw error;
            console.log('TestTable INFO : ', rows);
});

connection.end();