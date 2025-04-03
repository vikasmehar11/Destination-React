const DestinationModel = require('../models/Destination')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const logInController = async (req, res) =>  {

    try {
        const user = await DestinationModel.findOne({email: req.body.email})

        if(!user){
            return res.status(404).json({
                message: 'User not found',
                status: false
            })
        }
        const isPasswordValid = await bcrypt.compare(req.body.password, user.password)

        if(!isPasswordValid){
            return res.status(401).json({
                message: 'Invalid credentials',
                status: false
            })
        }
        const token = jwt.sign({ id: user._id }, process.env.DESTINATION_TOKEN, { expiresIn: '1h' });

        return res.json({
            message: 'Login successful',
            status: true,
            token
        })

    } catch (error) {
        console.log("Exception Raised", error.message)
        return res.status(500).json({
            message: 'An error occurred in login',
            status: false
        })  }
    }

module.exports = logInController