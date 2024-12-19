const express = require("express");
const router = express.Router();
const CartController =require("../controllers/CartController");

router.post("/AddtoCart",CartController.AddtoCart);
router.delete("/Deleteiteam",CartController.DeletIteamCart);
router.get("/yourcart",CartController.getcart);
module.exports = router;