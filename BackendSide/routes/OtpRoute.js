const express = require('express');
const { sendOtp, checkOtp } = require('../controllers/OtpController');
const router = express.Router();

router.post('/sendOtp', sendOtp);
router.post('/checkOtp', checkOtp);

module.exports = router;