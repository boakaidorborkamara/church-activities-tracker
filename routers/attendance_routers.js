const express = require('express');
const churchController = require('../controller/chruchController');


const router = express.Router();



//get all churches
router.get('/attendance', churchController.church_list);


//create a new book POST
router.post('/attendance/create', churchController.church_create_post);


//display details for a specific route
router.get('/attendance/:id', churchController.church_detail)




module.exports = router;