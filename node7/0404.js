// const userList = [
//     {name: "hong", age: 40, address: "서울시"},
//     {name: "kim", age: 80, address: "경기도"},
//     {name: "kwang", age: 20, address: "경상북도"},
// ]

// const fs = require('fs');
// fs.writeFile('./list.json', JSON.stringify(userList), function (error) {
//     console.log("저장 완료");
// });

// 위에 작성해서 생성된 파일 list.json을 읽어오는 코드

const fs = require('fs');

fs.readFile('./list.json', (err, data) => {
    if(err) {
        console.log("데이터를 읽을 수 없음");
    }
    else {
        const json = JSON.parse(data.toString());
        for(let i = 0; i < json.length; i++) {
            console.log(`이름 ${json[i].name} | 나이 ${json[i].age} | 주소 ${json[i].address}`);
        }
    }
});