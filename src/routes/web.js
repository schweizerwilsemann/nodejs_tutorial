const express = require('express');
const router = express.Router();
const {getHomePage, getABC, getFromNew, postCreateUser, getCreatePage, getUpdatePage, postUpdateUser, postHandleRemoveUser, postDeleteUser} = require('../controllers/homeController.js');

router.get('/', getHomePage);
  
router.get('/abc', getABC);
  
router.get('/hellofromnew', getFromNew);

router.get('/create', getCreatePage);

router.get('/update/:id', getUpdatePage);

router.post('/create-user', postCreateUser);

router.post('/update-user', postUpdateUser);

router.post('/delete-user/:id', postDeleteUser);

router.post('/delete-user', postHandleRemoveUser);

module.exports = router;