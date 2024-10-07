const Vehicle = require('../models/Vehicle');

exports.createVehicleEntry = async (vehicleData) => {
    const vehicle = new Vehicle(vehicleData);
    await vehicle.save();
    return vehicle;
};
