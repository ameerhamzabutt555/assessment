const jwt = require('jsonwebtoken');

// Secret key (make sure to store it in an environment variable)
const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret_key';

// Function to generate JWT token
exports.generateToken = (payload) => {
    return jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' });
};

// Function to verify JWT token
exports.verifyToken = (token) => {
    try {
        return { success: true, decoded: jwt.verify(token, JWT_SECRET) };
    } catch (error) {
        return { success: false, message: 'Invalid or expired token' };
    }
};
