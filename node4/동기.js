const fs = require('fs');

const file = fs.readFileSync('text.txt');
console.log(file);
console.log(file.toString());
