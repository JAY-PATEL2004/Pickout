const express = require("express");
const router = express.Router();
const authController = require("../controllers/authcontroller");

// Login route for customers
router.post("/login", authController.login);

module.exports = router;
