const mongoose = require('mongoose');

const vehicleSchema = new mongoose.Schema({
    carModel: { type: String, required: true, minlength: 3 },
    price: { type: Number, required: true },
    phone: { type: String, required: true, length: 11 },
    city: { type: String, required: true },
    images: [{ type: String }],
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
}, { timestamps: true });

module.exports = mongoose.model('Vehicle', vehicleSchema);
