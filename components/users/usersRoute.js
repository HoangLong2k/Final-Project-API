const express = require("express");
const router = express.Router();

const userCtrl = require("./usersController");

router.post("/signup", userCtrl.signUp);
router.post("/login", userCtrl.signIn);

module.exports = router;