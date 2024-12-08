const Earnings = require("../models/Earnings");
const User = require("../models/User");

const calculateAndDistributeEarnings = async (sourceUserId, transactionAmount) => {
  if (transactionAmount < 1000) return; // Ignore if below threshold

  const sourceUser = await User.findById(sourceUserId).populate("parent");
  if (!sourceUser || !sourceUser.parent) return; // No parent to reward

  const parentUser = sourceUser.parent;

  // Level 1 earnings (5%)
  const level1Earnings = transactionAmount * 0.05;
  await new Earnings({
    user: parentUser._id,
    transactionAmount,
    earnings: level1Earnings,
    sourceUser: sourceUser._id,
    level: 1,
  }).save();

  // Level 2 earnings (1%)
  if (parentUser.parent) {
    const level2Earnings = transactionAmount * 0.01;
    await new Earnings({
      user: parentUser.parent._id,
      transactionAmount,
      earnings: level2Earnings,
      sourceUser: sourceUser._id,
      level: 2,
    }).save();
  }
};

module.exports = { calculateAndDistributeEarnings };
