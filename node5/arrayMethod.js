let array = [{
    name: '고구마',
    price: 1000
},  {
    name: '감자',
    price: 2000
},  {
    name: '바나나',
    price: 3000
}];

let poped = array.pop();
console.log("배열에서 꺼낸 요소");
console.log(poped);
// console.log(array.pop());
// console.log(array.pop());
console.log("pop 메소드 호출 후")
console.log(array);

array.push(poped);
array.push({
    name: '사과',
    price: 4000
});

console.log(array);