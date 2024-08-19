const express = require('express');
const routerAPI = express.Router();
const {getUsersAPI, postCreateUserAPI, putUpdateUserAPI, deleteUsersAPI, postUploadSingleFileAPI, postUploadMutipleFilesAPI} = require('../controllers/apiController.js');


routerAPI.get('/users', getUsersAPI);

routerAPI.post('/users', postCreateUserAPI);

routerAPI.put('/users', putUpdateUserAPI);

routerAPI.delete('/users', deleteUsersAPI);

routerAPI.post('/file', postUploadSingleFileAPI);

routerAPI.post('/files', postUploadMutipleFilesAPI);

module.exports = routerAPI;