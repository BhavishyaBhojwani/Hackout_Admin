const express = require('express');
const router = express.Router();
const signupController = new (require('../controllers/signup_c'));
const loginController = new (require('../controllers/login_c')); // Import the new Login controller

router.post('/signup', function(req, res){
    signupController.createUser(req, res);
});

router.post('/login', function(req, res) {
    loginController.loginUser(req, res); // Use the loginUser method
});

router.post('/forgetpassword');

module.exports = router;
