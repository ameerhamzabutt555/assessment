const { loginUser, verifyTokenService } = require('../services/userService');

exports.login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const result = await loginUser(email, password);
        if (result.success) {
            return res.status(200).json({ message: 'Login successful', token: result.token });
        }
        return res.status(401).json({ message: 'Invalid credentials' });
    } catch (error) {
        next(error);
    }
};

exports.verifyToken = async (req, res, next) => {
    try {
        const result = await verifyTokenService(req.params.token);
        if (result.success) {
            return res.status(200).json({ message: 'Token Validated successful', data: result });
        }
        return res.status(401).json({ message: 'Invalid credentials' });
    } catch (error) {
        next(error);
    }
};
