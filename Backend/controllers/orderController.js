const { request } = require('express');
const order = require('../models/Order');
const placeorder= async(req ,res)=>{
    const{rest_id}=req.body;
    if(!rest_id){
        return res. status(400).json({ message: "Missing required fields: rest_id" });
    }
    try{
        const shopdetails= await Shop.getshopdetails(rest_id);
        return res.status(200).json(shopdetails);
    }catch (error) {
        console.error("Error :", error);
        return res.status(500).json({ error: "Internal server error" });
      }

}