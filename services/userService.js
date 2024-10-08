const User = require('../models/User');
const tokenUtils = require('../utils/tokenUtils');

// Function to log in user and generate JWT token
exports.loginUser = async (email, password) => {
    const user = await User.findOne({ email, password });
    
    if (user) {
        // Generate JWT token using tokenUtils
        const token = tokenUtils.generateToken({ userId: user._id, email: user.email });
        return { 
            success: true, 
            token: token // Return the generated JWT token
        };
    }

    return { success: false, message: 'Invalid email or password' };
};


// Function to log in user and generate JWT token
exports.verifyTokenService = async (token) => {
    if (token) {
        const decodedToken = tokenUtils.verifyToken(token); // Use a different variable name
        return { 
            success: true, 
            token: decodedToken // Return the verified JWT token
        };
    }

    return { success: false, message: 'Please Provide Token.' };
};
