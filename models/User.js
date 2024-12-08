const mongoose = require("mongoose");

// User Schema Definition
const userSchema = new mongoose.Schema({
  // Username field - required string
  username: { 
    type: String, 
    required: true 
  },
  
  // Email field - required and unique string
  email: { 
    type: String, 
    required: true, 
    unique: true 
  },
  
  // Referrals array - stores ObjectIds of directly referred users
  // Maximum of 8 referrals allowed per user
  referrals: [{ 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "User" 
  }],
  
  // Parent reference - stores ObjectId of user who referred this user
  // Used for tracking MLM hierarchy
  parent: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "User" 
  },
});

module.exports = mongoose.model("User", userSchema);
