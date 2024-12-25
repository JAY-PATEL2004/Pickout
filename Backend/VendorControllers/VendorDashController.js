const vendor = require('../vendorModels/VendorDashboard');

const getneworderdetails=async (req,res)=>{
  
      const {vendor_id} = req.body;
    
      // Check for missing required fields
      if (!vendor_id) {
        return res.status(400).json({ 
          message: "Missing required fields: restaurantname, address, location, phone_no, or owner" 
        });
      }
    
      try {
        // Call the Postvendor function to insert data into the database
        console.log(vendor_id);
        const resutl =await vendor.getneworderdetails(vendor_id);
        
        // Send success response
        return res.status(201).json(resutl);
      } catch (error) {
        console.error("Error:", error);
    
        // Send error response
        return res.status(500).json({ 
          error: "Internal error", 
          details: error.message 
        });
      }
   
      
    
   
   
}
const vendoracceptorder=async (req,res)=>{
  
    const {order_id,settime} = req.body;
  
    // Check for missing required fields
    if (!order_id||!settime) {
      return res.status(400).json({ 
        message: "Missing required fields: restaurantname, address, location, phone_no, or owner" 
      });
    }
  
    try {
      // Call the Postvendor function to insert data into the database
      console.log(order_id);
    await vendor.vendoracceptorder(order_id,settime);
      
      // Send success response
      return res.status(201).json({message:"Accepted"});
    } catch (error) {
      console.error("Error:", error);
  
      // Send error response
      return res.status(500).json({ 
        error: "Internal error", 
        details: error.message 
      });
    }
 
    
  
 
 
}
const vendorPreparedorder=async (req,res)=>{
  
    const {order_id} = req.body;
  
    // Check for missing required fields
    if (!order_id) {
      return res.status(400).json({ 
        message: "Missing required fields: restaurantname, address, location, phone_no, or owner" 
      });
    }
  
    try {
      // Call the Postvendor function to insert data into the database
      console.log(order_id);
    await vendor.vendorpreparedorder(order_id);
      
      // Send success response
      return res.status(201).json({message:"Prepared"});
    } catch (error) {
      console.error("Error:", error);
  
      // Send error response
      return res.status(500).json({ 
        error: "Internal error", 
        details: error.message 
      });
    }
 
    
  
 
 
}
const orderconatindishes=async (req,res)=>{
  
    const {order_id} = req.body;
  
    // Check for missing required fields
    if (!order_id) {
      return res.status(400).json({ 
        message: "Missing required fields: restaurantname, address, location, phone_no, or owner" 
      });
    }
  
    try {
      // Call the Postvendor function to insert data into the database
      console.log(order_id);
      const resutl =await vendor.orderconatindishes(order_id);
      
      // Send success response
      return res.status(201).json(resutl);
    } catch (error) {
      console.error("Error:", error);
  
      // Send error response
      return res.status(500).json({ 
        error: "Internal error", 
        details: error.message 
      });
    }
 
    
  
 
 
}
module.exports = {getneworderdetails,vendoracceptorder,vendorPreparedorder}