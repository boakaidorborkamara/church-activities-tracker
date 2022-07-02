const express = require('express');
const attendanceController = require('../controller/attendance_controller');


const router = express.Router();



//get all attendance
router.get('/attendance', attendanceController.attendance_list)


//create a new attendance POST
router.post('/attendance/create', attendanceController.attendance_create_post);


//display details for a specific attendance
router.get('/attendance/:id', attendanceController.attendance_details)




module.exports = router;