const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const otpSchema = new Schema({
    email: {
        type: String,
        required: true,
    },
    otp: {
        type: String,
        required: true,
    },
});

// Create and export Otp model
const Otp = mongoose.model('Otp', otpSchema);
module.exports = Otp;