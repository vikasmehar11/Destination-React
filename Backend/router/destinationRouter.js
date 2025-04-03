const express=  require('express');
const signUpController = require('../controller/signUpController');
const logInController = require('../controller/logInController');

const router = express.Router();

router.post('/signup', signUpController)
router.post('/login', logInController)

module.exports = router

