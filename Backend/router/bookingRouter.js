const express = require('express');
const authMiddleware = require('../middleware/authMiddleware');
const { createBooking, getAllBookings, getBookingById, deleteBooking } = require('../controller/bookingController');
const router = express.Router();

router.post('/booking', createBooking);
router.get('/booking',authMiddleware, getAllBookings);
router.get('/booking/:id',authMiddleware, getBookingById);
router.delete('/booking/:id', deleteBooking);

module.exports = router;