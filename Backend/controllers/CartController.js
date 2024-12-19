const { request } = require('express');
const UserCart = require('../models/Customercart');

const AddtoCart = async( req , res)=>{
    const {cust_id,dish_id,rest_id,var_id,quantity} = req.body;

    if(!cust_id||!rest_id||!dish_id||!var_id||!quantity){
        return res. status(400).json({ message: "Missing required fields: user_id, product_id, or desired_price" });
    }

  try{
    await UserCart.AddtoCart(cust_id,dish_id,rest_id,var_id,quantity);
    return res.status(200).json({message: "Succesfully add to cart"});
  }catch(error){
    console.error("Error adding product to wishlist:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
const DeletIteamCart =async (req,res)=>{
    const {cust_id,rest_id,dish_id}= req.body;
  if (!cust_id || !rest_id || !dish_id ) {
    return res.status(400).json({ message: "Missing required fields: user_id, product_id, or desired_price" });
  }
  try {
    // Call the function to add to wishlist
    await UserCart.deleteIteam( cust_id,rest_id,dish_id);
    return res.status(200).json({ message: "Successfully delete to Wishlist" });
  } catch (error) {
    console.error("Error adding product to wishlist:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
const getcart=async(req ,res) => {
    const {cust_id}= req.body;
    if (!cust_id ) {
      return res.status(400).json({ message: "Missing required fields: user_id, product_id, or desired_price" });
    }
    try {
      // Call the function to add to wishlist
      const dishes=await UserCart.getcart(cust_id);
      return res.status(200).json(dishes);
    } catch (error) {
      console.error("Error adding product to wishlist:", error);
      return res.status(500).json({ error: "Internal server error" });
    }
}

module.exports={AddtoCart,DeletIteamCart,getcart}