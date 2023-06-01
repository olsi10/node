













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

        // 테이블 삽입
        let insertData = [3454, 'park'];
        let insertQ = "INSERT INTO TestTable values(0000, '뜬')";
        connection.query(insertQ, function(err) {
            console.log("INSERT SUCCESS")
        })

        // 테이블 업데이트
        let sql = "UPDATE TestTable SET name=? WHERE id=?";
        let updateData = ["뜬뜬뜬", 0];
        connection.query(sql, updateData, function(error) {
            console.log("수정완료");
        })

        // 테이블 삭제
        let sql2 = "DELETE FROM TestTable WHERE id = 3434";
        connection.query(sql2, function(error) {
            console.log("삭제 성공");
        })
    }

    let q = "SELECT * FROM TestTable"
    connection.query(q, function(err, rows) {
        for(let obj of rows) {
            console.log('id : ', obj.id);
            console.log('name : ', obj.name);
        }}
    )

    connection.end();
})