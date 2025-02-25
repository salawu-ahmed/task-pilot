const express = require('express');
const { registerUser, login } = require('../controllers/user.controllers');

const router = express.Router()

router.post('/registerUser', registerUser)
router.post('/login', login)


module.exports = router