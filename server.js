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

const express = require('express')
const app = express()
const port = 3000

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/abc', function (req, res) {
    res.send('Check abc')
})

app.get('/hellofromnew', function (req, res) {
    res.send('<h1>Hello from new</h1>')
})  
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})