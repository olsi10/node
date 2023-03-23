const url = require('url');

const parseObj = url.parse("https://www.hanbit.co.kt/store/books/look.php?p_code=B4250257160");
console.log(parseObj);

// url 모듈 갖고 와서 parse() 메소드 사용
// url 정보를 객체로 가져와서 분석

fs.readFileSync(파일_이름) // 동기적으로 파일 읽기
fs.readFile(파일_이름, 콜백_함수) // 비동기적으로 파일 읽기