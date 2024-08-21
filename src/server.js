
require('dotenv').config();
const configViewEngine = require('./configuration/viewEngine.js')
const webRoutes = require('./routes/web.js')
const apiroutes = require('./routes/api.js')
const express = require('express');
const mongoose = require('mongoose');
const fileUpload = require('express-fileupload');

const connection = require('./configuration/database.js')
const { MongoClient } = require('mongodb');

const app = express();
const port = process.env.PORT || 8081;
const hostname = process.env.HOST_NAME;

// config file upload
app.use(fileUpload());

//config res.body
app.use(express.json());
app.use(express.urlencoded({extended: true}))

//config template engine
configViewEngine(app);

//declare route
app.use('/',webRoutes);
app.use('/v1/api/',apiroutes);


(async() => {
    try{
        //test connection
        //using mongoose
        // await connection();

        // using mongodb driver
        // Connection URL
        const url = process.env.DB_HOST_WITH_DRIVER;
        const client = new MongoClient(url);

        // Database Name
        const dbName = process.env.DB_NAME;

        await client.connect();
        console.log('Connected successfully to server');
        const db = client.db(dbName);
        const collection = db.collection('customers');

        // await collection.insertOne({
        //     "name": "Khoa"
        // })
        // collection.insertOne({"address": "hcm", email: "khoanguyenduc99@gmail.com"});
        // collection.insertOne({array: [1,2,3]});
        const a = await collection.findOne({address: "dalat"});
        console.log(">>> find data: ", a);
        app.listen(port,hostname, () => {
            console.log(`Backend zero app listening on port ${port}`);
        })
    }
    catch (error){
        console.log("Error connect to database");
    }
})()

