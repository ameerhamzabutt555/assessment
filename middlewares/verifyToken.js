const tokenUtils = require('../utils/tokenUtils');


const verifyToken = (req, res, next) => {
    const token = req.headers['authorization'];

    if (!token) {
        return res.status(403).json({ message: 'No token provided' });
    }

    // Extract token from "Bearer <token>" format
    const result = tokenUtils.verifyToken(token.split(" ")[1]);

    if (result.success) {
        req.user = result.decoded; // Attach decoded token data to request
        next(); // Proceed to the next middleware or route handler
    } else {
        return res.status(401).json({ message: result.message });
    }
};

module.exports = verifyToken;
