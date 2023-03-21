//modules.js: 생성할 모듈 파일. 모듈을 생성할 때 exports 사용
//절대값을 구하는 메서드
// exports.abs = function(number) {
//     if(0 < number) {
//       return number;
//     }else {
//       return -number;
//     }
//   };
//   //원의 넓이를 구하는 메서드
//   exports.circleArea = function(radius) {
//     return radius * radius * Math.PI;
//   };

// function plus(a, b) {
//     return a + b;
// }

// function minus(a, b) {
//     return a - b;
// }

// const p = plus; // 변수에 함수 지정가능 , () 안 붙이고

// console.log("typeof plus %s", typeof plus);
// console.log("typeof plus %s", typeof p);
// console.log("10 + 20 = %d", p(10, 20));

// // 함수를 파라미터로 받는 함수
// function cal(a, b, func) {
//     return func(a, b);
// }

// console.log(cal(10, 20, minus));
// console.log(cal(10, 20, plus));

// const sum = (a, b) => {
//     const result = a + b;
//     return `결과는 ${result}입니다.`;
// }

// const result = sum(10, 20);
// console.log(result);

// const stdList = [
//     {name : 'yo', age:10, math: 84, eng: 66},
//     {name: 'bro', age: 20, math:50, eng:70},
//     {name: 'yoyo', age:33, math:65, eng:99},
// ];

// const plus = (a, b) => a + b;
// stdList.forEach(student =>
//     console.log('%s total : %d', student.name, plus(student.math, student.eng)));

// console.log('------------------');

// stdList.forEach((student) => {
//     console.log('%s total: %d', student.name, plus(student.math, student.eng));
// })