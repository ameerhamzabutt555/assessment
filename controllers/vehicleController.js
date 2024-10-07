const { createVehicleEntry } = require('../services/vehicleService');

exports.addVehicle = async (req, res, next) => {
    try {
        const { carModel, price, phone, city, userId } = req.body;
        const images = req.files.map(file => `/${file.path}`);
        const vehicle = await createVehicleEntry({ carModel, price, phone, city, images, userId });
        res.status(201).json(vehicle);
    } catch (error) {
        next(error);
    }
};
