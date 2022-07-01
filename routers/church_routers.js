const express = require('express');
const churchController = require('../controller/chruchController');


const router = express.Router();



//get all churches
router.get('/churches', churchController.church_list);


module.exports = router;