const express = require('express');
const router = express.Router();
const { addUser, assignRole, getUsers } = require('../controllers/userController');
const { isAdmin, isManager } = require('../middleware/authMiddleware');

// Admin can add new team members
router.post('/', isAdmin, addUser);

// Admin can assign roles to team members
router.put('/:id/role', isAdmin, assignRole);

// Manager can view team members
router.get('/', isManager, getUsers);

module.exports = router;