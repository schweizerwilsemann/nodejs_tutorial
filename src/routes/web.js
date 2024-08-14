const express = require('express');
const router = express.Router();
const {getHomePage, getABC, getFromNew, postCreateUser} = require('../controllers/homeController.js')

router.get('/', getHomePage);
  
router.get('/abc', getABC);
  
router.get('/hellofromnew', getFromNew);

router.post('/create-user', postCreateUser);

module.exports = router;