
require('dotenv').config();
const configViewEngine = require('./configuration/viewEngine.js')
const webRoutes = require('./routes/web.js')
const express = require('express');
const mongoose = require('mongoose');

const connection = require('./configuration/database.js')

const app = express();
const port = process.env.PORT || 8081;
const hostname = process.env.HOST_NAME;



//config res.body
app.use(express.json());
app.use(express.urlencoded({extended: true}))

//config template engine
configViewEngine(app);

//declare route
app.use('/',webRoutes);


(async() => {
    try{
        //test connection
        await connection();
        app.listen(port,hostname, () => {
            console.log(`Backend zero app listening on port ${port}`);
        })
    }
    catch (error){
        console.log("Error connect to database");
    }
})()

