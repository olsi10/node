const request = require('request');

const url = "https://www.youtube.com/";
request(url, (error, reponse, body) => {
    console.log(body);
})