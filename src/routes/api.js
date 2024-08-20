const express = require('express');
const routerAPI = express.Router();
const {getUsersAPI, 
    postCreateUserAPI, 
    putUpdateUserAPI, 
    deleteUsersAPI, 
    postUploadSingleFileAPI, 
    postUploadMutipleFilesAPI} = require('../controllers/apiController.js');


const {postCreateCustomers, 
    postCreateArrayCustomers, 
    getAllCustomers, 
    updateCustomers, 
    deleteCustomers,
    postDeleteArrayCustomers} = require('../controllers/customersController.js');

routerAPI.get('/users', getUsersAPI);
routerAPI.post('/users', postCreateUserAPI);
routerAPI.put('/users', putUpdateUserAPI);
routerAPI.delete('/users', deleteUsersAPI);

routerAPI.post('/file', postUploadSingleFileAPI);
routerAPI.post('/files', postUploadMutipleFilesAPI);
routerAPI.post('/files', postUploadMutipleFilesAPI);

routerAPI.post('/customers', postCreateCustomers);
routerAPI.post('/customers-many', postCreateArrayCustomers);
routerAPI.get('/customers', getAllCustomers);
routerAPI.put('/customers', updateCustomers);
routerAPI.delete('/customers', deleteCustomers);
routerAPI.delete('/customers-many', postDeleteArrayCustomers);

routerAPI.get('/info', (req, res) => {
    console.log(">>> check query: ", req.query);
    res.status(200).json({
        data: req.query
    });
});
routerAPI.get('/info/:name/:address', (req, res) => {
    console.log(">>> check params: ", req.params);
    res.status(200).json({
        data: req.params
    });
});

module.exports = routerAPI;