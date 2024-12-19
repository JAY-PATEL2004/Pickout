const express = require("express");
const router = express.Router();
const orderController =require("../controllers/orderController");

router.post("/placeorder",orderController.placeorder);
router.get("/orderdetail",orderController.getorderdetails);
router.get ("/Status&timetoprepare",orderController.gettimetoprepare);
module.exports = router;