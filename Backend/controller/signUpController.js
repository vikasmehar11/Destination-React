const DestinationModel = require('../models/Destination');
const bcrypt = require('bcryptjs');

const signUpController = async (req, res) => {
    try {
        const { username, email, password, confirmpassword } = req.body;

        if (!username || !email || !password || !confirmpassword) {
            return res.status(400).json({
                message: 'All fields are required.',
                status: false,
            });
        }

        if (password !== confirmpassword) {
            return res.status(400).json({
                message: 'Passwords do not match.',
                status: false,
            });
        }

        const existingPerson = await DestinationModel.findOne({ email });
        if (existingPerson) {
            return res.status(400).json({
                message: 'User already exists with this email.',
                status: false,
            });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const user = new DestinationModel({
            username,
            email,
            password: hashedPassword
        });

        await user.save();

        res.status(201).json({
            message: 'User created successfully.',
            status: true,
            user
        });
        
    } catch (error) {
        console.error('Error during signup:', error);
        return res.status(500).json({
            message: 'An error occurred during signup.',
            status: false,
        });
    }
};

module.exports = signUpController;
