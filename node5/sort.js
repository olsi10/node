let arrA = ['고구마', '감자', '바나나'];
let arrB = [{
    name: '고구마',
    price: 1000
}, {
    name: '감자',
    price: 500
}, {
    name: '바나나',
    price: 300
}];

arrA.sort();
console.log(arrA);
console.log(arrA.reverse())

console.log();

arrB.sort((itemA, itemB) => {
    if(itemA.name < itemB.name) {
        return -1;
    }
    else if(itemA.name > itemB.name) {
        return 1;
    }
    else {
        return 0;
    }
});

console.log("객체 내부 문자열로 정렬");
console.log(arrB);