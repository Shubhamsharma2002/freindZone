const express = require('express');
const router = express.Router();

const user_controller = require('../controller/user_c');
router.get('/profile', user_controller.profile);



module.exports = router;