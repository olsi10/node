let products = [
    {name: '바나나', price: 1200},
    {name: '사과', price: 2000},
    {name: '배', price: 3000},
    {name: '엉덩이', price: 700},
]

function printProducts(product) {
    console.log(`${product.name}의 가격은 ${product.price}입니다.`);
}

for(let product of products) {
    printProducts(product);
}