const Router = require('express')
const router = new Router()
const BookingController = require('./../controllers/bookingController')
const authMiddleware = require('../middleware/authMiddleware')

router.post('/create', authMiddleware, BookingController.create)

// router.get('/user:id', authMiddleware, BookingController.getUserBookings)

module.exports = router
