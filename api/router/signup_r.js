const express = require('express');
const router = express.Router();
const signupController =new (require('../controllers/signup_c'));

router.post('/signup', function(req, res){
    signupController.createUser(req, res);
});


router.post('/login');
router.post('/forgetpassword');

module.exports = router;
