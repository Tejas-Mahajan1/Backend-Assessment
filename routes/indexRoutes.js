const express = require("express");
const router = express.Router();

// Base route handler
// Returns a welcome message for the API
router.get("/", (req, res) => {
    res.json({
        status: "success",
        message: "Welcome to the API",
    });
});

// Health check endpoint
// Used for monitoring and ensuring the API is running
router.get("/health", (req, res) => {
    res.status(200).json({
        status: "success",
        message: "Server is healthy",
    });
});

// 404 Handler
// Catches all undefined routes and returns a 404 error
router.all("*", (req, res) => {
    res.status(404).json({
        status: "error",
        message: "Route not found",
    });
});

module.exports = router;
