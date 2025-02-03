const express = require('express');
const { registerUser, login } = require('../controllers/UserController');

const router = express.Router()

router.post('/registerUser', registerUser)
router.get('/login', login)

module.exports = router