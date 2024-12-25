const vendor = require('../vendorModels/Vendordetails');  // Corrected the import to match where the Postvendor function is defined
const jwt = require('jsonwebtoken');
const login = async (req, res) => {
  const { owneremail, password } = req.body;
  console.log(req.body);

  try {
    const Vendor = await vendor.selectVendorWhere('owneremail',owneremail);
    if (Vendor.length === 0) return res.status(400).json({ message: 'Email does not exist' });

    if (Vendor[0].password !== password)
      return res.status(401).json({ message: 'Wrong password' });

    const accessToken = jwt.sign(
      {
        name: Vendor[0].name,
        owneremail,
        ownername: Vendor[0].owner,
        vendor_id: Vendor[0].id,
        phone_no: Vendor[0].phone_no,
        address: Vendor[0].address,
        imageurl: Vendor[0].image_url,
        location: Vendor[0].location,
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: '15m' }
    );
    res.status(200).json({ accessToken });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

const Takevendorinfo = async (req, res) => {
  const { restaurantname, address, location, phone_no, owner, password, no_of_cook, rating, image_url, payment_url,ownerEmail,openingHours,closingHours } = req.body;

  // Check for missing required fields
  if (!restaurantname || !address || !location || !phone_no || !owner ||!ownerEmail || !password) {
    return res.status(400).json({ 
      message: "Missing required fields: restaurantname, address, location, phone_no, or owner" 
    });
  }

  try {
    // Call the Postvendor function to insert data into the database
    console.log(ownerEmail);
    await vendor.Takevendorinfo(restaurantname, address, location, phone_no, owner, password, no_of_cook, rating, image_url, payment_url,ownerEmail,openingHours,closingHours);
    
    // Send success response
    return res.status(201).json({ 
      message: "Vendor information added successfully" 
    });
  } catch (error) {
    console.error("Error:", error);

    // Send error response
    return res.status(500).json({ 
      error: "Internal error", 
      details: error.message 
    });
  }
};

module.exports = { Takevendorinfo ,login};
