let fs = require('fs');

let data = fs.readdirSync("./package.json", 'utf8');
console.log(data);