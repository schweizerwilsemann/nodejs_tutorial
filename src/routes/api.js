const express = require('express');
const routerAPI = express.Router();
const {getUsersAPI, postCreateUserAPI, putUpdateUserAPI, deleteUsersAPI, postUploadSingleFileAPI, postUploadMutipleFilesAPI} = require('../controllers/apiController.js');
const {postCreateCustomers, postCreateArrayCustomers, getAllCustomers, updateCustomers} = require('../controllers/customersController.js');

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

module.exports = routerAPI;