const mongoose = require("mongoose");

const earningsSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  transactionAmount: { type: Number, required: true },
  earnings: { type: Number, required: true },
  sourceUser: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, // User who triggered the earning
  level: { type: Number, required: true }, // Level 1 or 2
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Earnings", earningsSchema);
