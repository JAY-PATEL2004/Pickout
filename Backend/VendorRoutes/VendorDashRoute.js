const express = require('express');
const router = express.Router();
const DashBoard = require("../VendorControllers/VendorDashController");


router.get("/neworder", DashBoard.getneworderdetails);
router.post("/Accepted",DashBoard.vendoracceptorder);
router.post("/Prepared",DashBoard.vendorPreparedorder)

module.exports = router;
