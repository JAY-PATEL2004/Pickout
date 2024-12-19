const express = require("express");
const router = express.Router();
const ShopController =require("../controllers/ShopController");

router.get("/getshopdetails",ShopController.getshopdetails);
router.get("/Shopmenu",ShopController.Shopmenu);
router.get("/categorydish",ShopController.categorydish)
router.get("/shopmostsold",ShopController.MostSoldProducts);
router.get("/lowpricedish",ShopController.lowpricedish);
module.exports = router;