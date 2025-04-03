const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: './config/.env' });

const db = async () => {
    try {
        await mongoose.connect(`${process.env.DB_URL}`);
        console.log(`Connected to MongoDB at ${mongoose.connection.host}`);
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
        process.exit(1);
    }
}

module.exports = db;
