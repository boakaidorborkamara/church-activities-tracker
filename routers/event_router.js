const express = require('express');
const eventController = require('../controller/eventsController');


const router = express.Router();



//get all event
router.get('/events', eventController.event_list);

//create a new event POST
router.post('/event/create', eventController.event_create_post);

//display details for a specific event
router.get('/event/:id', eventController.event_details)




module.exports = router;