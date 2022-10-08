const express = require("express");
const router = express.Router();

const RegistrationCtrl = require("./registrationController");

router.post("", RegistrationCtrl.saveData);

module.exports = router;
