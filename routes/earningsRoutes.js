const express = require("express");
const Earnings = require("../models/Earnings");

const router = express.Router();

// Fetch earnings for a user
router.get("/earnings/:userId", async (req, res) => {
  try {
    const { userId } = req.params;
    const earnings = await Earnings.find({ user: userId });
    res.status(200).json(earnings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
