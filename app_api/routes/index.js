const express = require("express");
const router = express.Router();
const jwt = require('express-jwt');
const auth = jwt({
    secret: process.env.JWT_SECRET,
    userProperty: 'payload'
});

const tripsController = require("../controllers/trips");
const authController = require("../controllers/authentication");

router
    .route('/login')
    .post(authController.login);

router
    .route('/login')
    .post(authController.register);

// Define route for our trips endpoint
router
    .route('/trips')
    .get(tripsController.tripsList)
    .post(auth.tripsController.tripsAddTrip); //POST Method Adds a Trip

// GET Method routes tripsFindByCode - requires parameter
router
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindByCode)
    .put(auth,tripsController.tripsUpdateTrip);
    
module.exports = router;