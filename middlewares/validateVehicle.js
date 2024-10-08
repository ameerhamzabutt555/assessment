// middlewares/validateVehicle.js

const validateVehicle = (req, res, next) => {
    const { carModel, price,userId, phone, maxPictures } = req.body;
    const pictures = req.files; // Assuming pictures are uploaded via 'req.files'

    // Validate car carModel
    if (!carModel || carModel.length < 3) {
        return res.status(400).json({ message: 'Car model must be at least 3 characters long.' });
    }

    // Validate price
    if (!price || price <= 0) {
        return res.status(400).json({ message: 'Please add the price.' });
    }
    // Validate price
    if (!userId || userId <= 0) {
        return res.status(400).json({ message: 'Please add userId.' });
    }


    // Validate phone number (exactly 11 characters)
    const phoneRegex = /^\d{11}$/;
    if (!phone || !phoneRegex.test(phone)) {
        return res.status(400).json({ message: 'Phone number must be exactly 11 digits.' });
    }

    // Validate max number of pictures (between 1 and 10)
    if (!pictures || pictures < 1 || pictures > 10) {
        return res.status(400).json({ message: 'Max number of pictures must be between 1 and 10.' });
    }

    next();
};

module.exports = validateVehicle;
