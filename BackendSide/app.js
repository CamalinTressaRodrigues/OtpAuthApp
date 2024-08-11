const express = require('express');
const app = express();
const morgan = require('morgan');
app.use(morgan('dev'));
// const path = require('path');
require('dotenv').config();
const cors = require('cors');
const bodyParser = require('body-parser');
app.use(cors());
require('./db/mongoDb');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


//routes
const otpRoutes = require('./routes/OtpRoute');

app.use('/otp', otpRoutes);


//server on port 3000
app.listen(process.env.PORT, () => {
    console.log(`server is listening on PORT ${process.env.PORT}`);
})