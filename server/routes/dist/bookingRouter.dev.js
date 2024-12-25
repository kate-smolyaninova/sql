"use strict";

var Router = require('express');

var router = new Router();

var BookingController = require('./../controllers/bookingController');

var authMiddleware = require('../middleware/authMiddleware');

router.post('/create', authMiddleware, BookingController.create); // router.get('/user:id', authMiddleware, BookingController.getUserBookings)

module.exports = router;