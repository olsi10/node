const fs = require('fs');

fs.readFile('txt.txt', (error, file) => {
    console.log(file);
    console.log(file.toString());
});