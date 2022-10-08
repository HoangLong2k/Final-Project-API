const express = require('express');
const router = express.Router();

const adminCtrl = require('./adminController');

router.post('', adminCtrl.getData);

module.exports = router;