const { request } = require('express');
const Shop = require('../models/Shop');
const getshopdetails= async(req ,res)=>{
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
const Shopmenu= async(req ,res)=>{
    const{rest_id}=req.body;
    if(!rest_id){
        return res. status(400).json({ message: "Missing required fields: rest_id" });
    }
    try{
        const categorys= await Shop.Shopmenu(rest_id);
        return res.status(200).json(categorys);
    }catch (error) {
        console.error("Error :", error);
        return res.status(500).json({ error: "Internal server error" });
      }

}
const categorydish= async(req ,res)=>{
    const{rest_id}=req.body;
    if(!rest_id){
        return res. status(400).json({ message: "Missing required fields: rest_id" });
    }
    try{
        const Dishes= await Shop.categorydish(rest_id);
        return res.status(200).json(Dishes);
    }catch (error) {
        console.error("Error :", error);
        return res.status(500).json({ error: "Internal server error" });
      }

}
const MostSoldProducts= async(req ,res)=>{
    const{rest_id}=req.body;
    if(!rest_id){
        return res. status(400).json({ message: "Missing required fields: rest_id" });
    }
    try{
        const Mostsolddish= await Shop.MostSoldProducts(rest_id);
        return res.status(200).json(Mostsolddish);
    }catch (error) {
        console.error("Error :", error);
        return res.status(500).json({ error: "Internal server error" });
      }

}
const lowpricedish= async(req ,res)=>{
    const{rest_id}=req.body;
    if(!rest_id){
        return res. status(400).json({ message: "Missing required fields: rest_id" });
    }
    try{
        const lowpricedish= await Shop.lowpricedish(rest_id);
        return res.status(200).json(lowpricedish);
    }catch (error) {
        console.error("Error :", error);
        return res.status(500).json({ error: "Internal server error" });
      }

}
module.exports={getshopdetails,Shopmenu,categorydish,MostSoldProducts,lowpricedish}