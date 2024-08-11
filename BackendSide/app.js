const express = require('express');
const app = express();
const morgan = require('morgan');
app.use(morgan('dev'));
const path = require('path');
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
// cors error solveing during deployment
app.use(cors({
    origin: ['https://otp-auth-app-client.vercel.app/otp'],
    credentials: true,
    methods: ['POST', 'GET', 'PATCH', 'DELETE']
}));


//deployment
app.use(express.static(path.join(__dirname, 'dist')));

// Anything that doesn't match the above, send back index.html
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

//server on port 3000
app.listen(process.env.PORT, () => {
    console.log(`server is listening on PORT ${process.env.PORT}`);
})