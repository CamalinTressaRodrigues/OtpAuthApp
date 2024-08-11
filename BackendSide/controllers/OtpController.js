const Otp = require('../models/otp');
const nodemailer = require('nodemailer');

//creating random otp
const generateOtp = () => Math.floor(100000 + Math.random() * 900000).toString();

const sendOtp = async (req, res) => {
  try {
    const { email } = req.body;  // Receiver's email obtained from the frontend
    const otp = generateOtp();

    // Save OTP to the database
    const newOtp = new Otp({ email, otp });
    await newOtp.save();

    // Create a transporter using Ethereal
    const transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      auth: {
        user: 'thelma53@ethereal.email', 
        pass: '1stFbJKqCmpKhZa2X4',      
      },
    });

    // Email options
    const mailOptions = {
      from: '"Camalin" <camalintressa1215@gmail.com>', 
      to: email,          // Receiver's email provided by the frontend
      subject: 'OTP Code',
      text: `Your OTP code is ${otp}`,  // Plain text version
      html: `<p>Your OTP code is <b>${otp}</b></p>`,  // HTML version
    };

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return res.status(500).json({ message: 'Error sending OTP', error });
      }
      console.log('Email sent: ', info.messageId);
      console.log('Preview URL: ', nodemailer.getTestMessageUrl(info)); 
      res.status(200).json({ message: 'OTP sent successfully' });
    });
  } catch (error) {
    return res.status(500).json({ message: 'Server error', error });
  }
};


//to check if otp is correct
const checkOtp = async (req, res) => {
  const { email, otp } = req.body;
  const otpRecord = await Otp.findOne({ email, otp });

  if (otpRecord) {
    return res.status(200).json({ message: 'OTP verified successfully' });
  } else {
    return res.status(400).json({ message: 'Invalid OTP' });
  }
};

module.exports = { sendOtp, checkOtp };
