const express = require('express');
const churchController = require('../controller/chruchController');


const router = express.Router();



//get all churches
router.get('/church', churchController.getChurch);


module.exports = router;