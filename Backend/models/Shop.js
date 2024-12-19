const client = require('../config/db');
const getshopdetails =async(rest_id)=>{

 try { 
    await client.query(`
         SELECT 
    name AS restaurant_name,
    location AS restaurant_location
FROM 
    Restaurent
WHERE 
    id = {$1};

        `, [rest_id]); 
      } catch (err) {
        console.log(err.message);
        throw new Error("Database operation failed"); 
      }
}
const Shopmenu = async(rest_id)=>{
    try{
        await client.query( `SELECT DISTINCT c.category
FROM Menu m
JOIN Dish d ON m.dish_id = d.id
JOIN Category c ON d.cat_id = c.id
WHERE m.rest_id = $1;

`,[rest_id]);
    }
    catch (err) {
        console.log(err.message);
        throw new Error("Database operation failed"); 
      }
}
const categorydish = async(cat_id)=>{
   try{ await client.query(`
        SELECT d.name AS dish_name, 
       d.description, 
       d.cooking, 
       d.veg, 
       d.image_url, 
       m.price, 
       d.rating
FROM Dish d
JOIN Category c ON d.cat_id = c.id
JOIN Menu m ON m.dish_id = d.id
WHERE d.cat_id = <cat_id>;

        `,[cat_id]); }catch (err) {
            console.log(err.message);
            throw new Error("Database operation failed"); 
          }
}
const MostSoldProducts = async(rest_id)=>{
    try{
        await client.query( `SELECT d.name AS dish_name, 
       SUM(od.quantity) AS total_sold, 
       m.price
FROM OrderedDish od
JOIN Dish d ON od.dish_id = d.id
JOIN Menu m ON m.dish_id = d.id AND m.rest_id = od.rest_id
WHERE od.rest_id = $1
GROUP BY d.id, m.price
ORDER BY total_sold DESC
LIMIT 100;
 `,[rest_id]);

    }
    catch (err) {
        console.log(err.message);
        throw new Error("Database operation failed"); 
      }
}
const lowpricedish=async(rest_id)=>{
    try{
        await client.query(`
            `);
    }catch (err) {
        console.log(err.message);
        throw new Error("Database operation failed"); 
      }
}
module.exports={getshopdetails,categorydish,Shopmenu,MostSoldProducts,lowpricedish}
