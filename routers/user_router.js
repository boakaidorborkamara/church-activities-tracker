const express = require('express');
const userController = require('../controller/userController');


const router = express.Router();



//get all users
router.get('/users', userController.user_list);

//create a new user POST
router.post('/user/create', userController.user_create_post);

//display details for a specific user
router.get('/user/:id', userController.user_details)




module.exports = router;