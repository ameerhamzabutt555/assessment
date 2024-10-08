const express = require('express');
const { addVehicle } = require('../controllers/vehicleController');
const multer = require('multer');
const validateVehicle = require('../middlewares/validateVehicle'); // Import validation middleware for vehicle
const verifyToken = require('../middlewares/verifyToken')
const router = express.Router();
const fs = require('fs');
const path = require('path');


// Ensure the 'uploads' directory exists
const uploadDir = path.join(__dirname, '../uploads');
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}


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
