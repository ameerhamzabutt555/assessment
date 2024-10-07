const express = require('express');
const { login } = require('../controllers/userController');
const validateLogin = require('../middlewares/validateLogin'); // Import validation middleware for login

const router = express.Router();

router.post('/login', validateLogin, login);

module.exports = router;
