const client = require('../config/db');

const getneworderdetails = async (vendor_id) => {
  const result = await client.query(`
      SELECT 
    order_id,
    order_amount,
    payment_method,
    order_time,
    timer
FROM Orders
WHERE rest_id = $1
  AND (status = 'Pending' OR status IS NULL);

  `, [vendor_id]);
  return result.rows;
};
const vendoracceptorder = async (order_id,settime) => {
 await client.query(`
        UPDATE Orders
SET status = 'Accepted', 
    prep_time = $1 -- or set a specific time if you prefer
WHERE order_id = $2;

  
    `, [settime,order_id]);
  
  };
  const vendorpreparedorder = async (order_id) => {
    await client.query(`
           UPDATE Orders
   SET status = 'Prepared', 
       -- or set a specific time if you prefer
   WHERE order_id = $1;
   
     
       `, [order_id]);
     
     };
     const orderconatindishes = async (order_id) => {
        const result = await client.query(`
           SELECT 
    o.order_id,
    o.order_time,
    o.status,
    o.order_amount,
    o.payment_method,
    o.timer,
    c.email AS customer_email,
    c.phone_no AS customer_contact,
    c.address AS customer_address,
    r.name AS restaurant_name,
    r.address AS restaurant_address,
    od.quantity AS item_quantity,
    d.name AS dish_name,
    od.quantity * m.price AS subtotal,
    r.rating AS restaurant_rating,
    o.bill AS total_amount,
    o.prep_time AS expected_prep_time
FROM Orders o
JOIN Customer c ON o.cust_id = c.id
JOIN Restaurent r ON o.rest_id = r.id
JOIN OrderedDish od ON o.order_id = od.order_id AND o.cust_id = od.cust_id AND o.rest_id = od.rest_id
JOIN Dish d ON od.dish_id = d.id
JOIN Menu m ON d.id = m.dish_id AND o.rest_id = m.rest_id
WHERE o.order_id = $1; -- Replace $1 with the actual order_id when executing

      
        `, [order_id]);
        return result.rows;
      };
module.exports={getneworderdetails,vendoracceptorder,vendorpreparedorder,orderconatindishes}