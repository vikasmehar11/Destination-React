const mongoose = require('mongoose');

const BookingModel = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    location: { type: String, required: true },
    date: { type: Date, required: true },
    duration: { type: Number, required: true, min: 3 },
    persons: { type: Number, required: true, min: 1 },
    price: { type: Number, required: true}
});

module.exports = mongoose.model('booking', BookingModel);
