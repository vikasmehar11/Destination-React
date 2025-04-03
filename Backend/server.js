const express = require('express')
const app = express()
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const dotenv = require('dotenv')
const morgan = require('morgan')
const cors = require('cors')
const db = require('./utils/db')
const corsOptions = {
  origin: 'https://destination-react-frontend.vercel.app', 
  credentials: true, 
};

db()
dotenv.config({path: './config/.env'})
app.use(express.json())
app.use(morgan('tiny'))
app.use(cors(corsOptions))

app.use('/destination', require('./router/destinationRouter'))
app.use('/destination', require('./router/bookingRouter'));

app.listen(`${process.env.PORT || 5000}`, () => {
    console.log(`Server running on port ${process.env.PORT}`)  
})
