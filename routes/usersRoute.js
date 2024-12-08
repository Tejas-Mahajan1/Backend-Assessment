const express = require("express");
const User = require("../models/User");

const router = express.Router();

// Create User Route
// POST /api/users
// Creates a new user with optional referral connection
router.post("/users", async (req, res) => {
  try {
    // Extract user data from request body
    const { username, email, parentId } = req.body;
    
    // Create new user instance
    const user = new User({ username, email });

    // Handle referral logic
    if (parentId) {
      // Find the parent user
      const parent = await User.findById(parentId);
      
      // Check if parent exists and hasn't exceeded max referrals (8)
      if (parent && parent.referrals.length < 8) {
        // Set parent reference
        user.parent = parentId;
        // Add new user to parent's referrals
        parent.referrals.push(user._id);
        // Save parent updates
        await parent.save();
      }
    }

    // Save the new user
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
