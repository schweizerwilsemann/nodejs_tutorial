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
const configViewEngine = require('./configuration/viewEngine.js')
const webRoutes = require('./routes/web.js')
const express = require('express');

const connection = require('./configuration/database.js')

const app = express();
const port = process.env.PORT || 8081;
const hostname = process.env.HOST_NAME;

//config template engine
configViewEngine(app);

//declare route
app.use('/',webRoutes);


connection.query(
    'SELECT * FROM Users',
    function(err, results, fields){
        console.log(">>>results = ",results);
        console.log(">>>fields = ", fields);
    }
);

app.listen(port,hostname, () => {
    console.log(`Example app listening on port ${port}`);
})