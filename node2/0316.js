// const num = [];
// num.push(1);
// num.push(2);
// num.push(3);


// for(let i of num) {
//     console.log(num[i - 1]);
// }

// for(let i = 0; i < num.length; i++) {
//     console.log(num[i]);
// }

// 자바스크립트 오브젝트 노테이션
// 제이슨은 키와 값, 쌍으로 표현

// const user = {};
// user.name = '엉덩이';
// user.age = 30;

// console.log(user);

// const user2 = {
//     name:'엉덩이',
//     age:30
// };


// console.log(user2);
// console.log(`나의 이름은 ${user2.name}\n나이는${user2.age}\n학교는${user2.school}`);

// const userer = 'age';
// console.log(user2[userer]);

// process 현재 동작중인 프로세스 실행에 대한 정보를 다루는 객체
// env 환경변수 정보
// require() 모듈 로딩 #include, import
// export 모듈을 다루는 객체

// console의 주요 메소드
// console.dir(object) 객체 속성 출력
// console.time(id) 실행 시간 측정 시작
// console.timeEnd(id) 실행 시간 측정 끝

// // PROCESS

// console.log(process.env); // 컴퓨터 환경 관련 정보를 가진 아키텍쳐
// console.log('========================================');
// console.log(process.arch); // 프로세서의 아키텍쳐
// console.log('========================================');
// console.log(process.uptime()); // 현재 프로그램이 실행된 시간
// console.log('========================================');
// // console.log(process.memoryUseage()); // 메모리 사용 정보를 가진 객체
// console.log(process.version); // Node.js 버전
// console.log('========================================');
// console.log(process.versions); // Node.js 버전
// console.log('========================================');

// // CONSOLE

// console.log("Number : %d + %d = %d", 1, 2, 1 + 2);
// console.log("String %s", 'Hello, world');
// console.log("JSON %j", {name:'node.js'});
// console.log("String 1", "String 2");

// function hello1() {
//     console.log('hello');
// }
// hello1();

// const hello2 = () => {
//     console.log('hello');
// }
// hello2();

// let hello3 = (a, b) => {
//     return console.log(a + b);
// }
// hello3(10, 10);

// // 화살표 함수 변경 ------------------------

// let sum = (a, b) => {
//     return console.log(a + b);
// }
// sum(10, 20);

// const human =[
//     {name:'yo', age:30, score:100},
//     {name:'bro', age:26, score:85},
//     {name:'sub', age:22, score:31},
// ];

// const getScore = (score) => {
//     if(score >= 90) {
//         return 'A';
//     } else if(score >= 80) {
//         return 'B';
//     } else if(score >= 70) {
//         return 'C';
//     } else {
//         return 'F';
//     }
// }

// human.forEach((human) => { // human 안에 json 객체를 하나하나
//     const result = `name: ${human.name}\nscore: ${getScore(human.score)}`;
//     console.log(result);
// })

// // 함수 선언식
// function a(me) {
//     console.log(me)
// }

// // 함수 표현식
// const b = function() {
//     console.log('welcome');
// }

// // 함수를 선언하고 ()를ㅇ 붙이지 않고 변수에 항ㄹ달하는 해당 변수는 function이 됨
// const pm = a; // 변수 pm은 함수 a

