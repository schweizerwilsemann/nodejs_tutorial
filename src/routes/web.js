const express = require('express');
const router = express.Router();
const {getHomePage, getABC, getFromNew} = require('../controllers/homeController.js')

router.get('/', getHomePage);
  
router.get('/abc', getABC);
  
router.get('/hellofromnew', getFromNew);

module.exports = router;