const express = require('express');
const roleController = require('../controller/roleController');
const router = express.Router();


router.get('/roles', roleController.role_list);


module.exports = router;