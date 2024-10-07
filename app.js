const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();  // Keep only this one line

const users = require('./routes/userRoutes');
const vehicles = require('./routes/vehicleRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads')); // Serve uploaded images

// Connect to MongoDB
mongoose.connect(process.env.DB_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error(err));

// Define routes
app.use('/users', users);
app.use('/vehicles', vehicles);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
