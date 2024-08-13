const path = require('path');
const express = require('express');

const configViewEngine = (app) => {
    // console.log(">>> check env: ", process.env); 
//configuration template engine
    app.set('views', path.join('./src', 'views'));
    app.set('view engine', 'ejs');
    //configuration static file
    app.use(express.static(path.join('./src', 'public')));
}

module.exports = configViewEngine;