// const http = require('http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) =>{
//     res.statusCode  = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Hello World \n I am Khoa ');
// });

// server.listen(port, hostname, () => {
//     console.log(`Server running as http://${hostname}:${port}/`);
// });
require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 8081;
const path = require('path');
const hostname = process.env.HOST_NAME;

console.log(">>> check env: ", process.env); 
//configuration template engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  res.send('Hello World');
})

app.get('/abc', function (req, res) {
    res.send('Check abc');
})

app.get('/hellofromnew', function (req, res) {
    res.render('sample.ejs');
})  
app.listen(port,hostname, () => {
    console.log(`Example app listening on port ${port}`);
})