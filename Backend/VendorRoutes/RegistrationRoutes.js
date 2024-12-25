const express = require('express');
const router = express.Router();
const RegistrationController = require("../VendorControllers/RegisterController");


router.post("/vendorinformation", RegistrationController.Takevendorinfo);
router.post("/auth",RegistrationController.login);

module.exports = router;
