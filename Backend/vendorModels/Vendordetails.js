
const client = require('../config/db');

const selectVendorWhere = async (field, value) => {
  const result = await client.query(`
      SELECT * FROM restaurent
      WHERE ${field} = $1;
  `, [value]);
  return result.rows;
};
const Takevendorinfo = async (restaurantname, address, location, phone_no, owner, password, no_of_cook, rating, image_url, payment_url,ownerEmail,openingHours,closingHours) => {



  try {
    // Call the database to insert vendor info
    await client.query(
      `
        INSERT INTO restaurent (
          password,
          name,
          owner,
          phone_no,
          no_of_cook,
          location,
          address,
          rating,
          image_url,
          payment_url,
          owneremail,
          opening_hour,
          closing_hour
        )
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)
      `,
      [
        password,            // Password provided by the frontend
        restaurantname,      // Restaurant name from the frontend
        owner,               // Owner's name from the frontend
        phone_no,            // Phone number from the frontend
        no_of_cook,          // Number of cooks from the frontend
        location,            // Location from the frontend
        address,             // Address from the frontend
        rating,              // Rating from the frontend
        image_url,           // Image URL from the frontend
        payment_url, 
        ownerEmail,
        openingHours,
        closingHours        // Payment URL from the frontend
      ]
    );

    
  } catch (error) {
    console.error("Error:", error);

   
  }
};

module.exports = { Takevendorinfo ,selectVendorWhere};
