const express = require('express');
const { login, verifyToken } = require('../controllers/userController');
const validateLogin = require('../middlewares/validateLogin'); // Import validation middleware for login

const router = express.Router();

router.post('/login', validateLogin, login);
router.get('/verifyToken/:token', verifyToken);

module.exports = router;
