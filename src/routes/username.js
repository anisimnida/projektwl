const express = require('express');
const router = express.Router();
const usernameController = require('../controllers/username');

// GET /users/:username
router.get('/:username', usernameController.getUserByUsername);

// PUT /users/:username
router.put('/:username', usernameController.updateUsername);

// DELETE /users/:username
router.delete('/:username', usernameController.deleteUserByUsername);

module.exports = router;
