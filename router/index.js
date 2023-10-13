const express = require('express');
const router = express.Router();
const homeController = require('../controller/home_c');
console.log('router is fine bro!!...(:-(:-....!!');

router.get('/' , homeController.home);
router.use('/', require('./user_r'));

module.exports = router;
