const express = require('express');
const { addVehicle } = require('../controllers/vehicleController');
const multer = require('multer');
const validateVehicle = require('../middlewares/validateVehicle'); // Import validation middleware for vehicle
const verifyToken = require('../middlewares/verifyToken')
const router = express.Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({ storage: storage });

router.post('/', verifyToken,upload.array('images'),validateVehicle, addVehicle);

module.exports = router;
