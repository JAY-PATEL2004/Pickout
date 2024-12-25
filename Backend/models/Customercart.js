const client = require('../config/db');

const AddtoCart = async(cust_id,dish_id,rest_id,var_id,quantity)=>{
    try {
        await client.query(`
          INSERT INTO  cart(cust_id,dish_id,rest_id,var_id,quantity)
          VALUES ($1, $2, $3, $4 ,$5)
        `, [cust_id,dish_id,rest_id,var_id,quantity]); 
      } catch (err) {
        console.log(err.message);
        throw new Error("Database operation failed"); 
      }

}
const deleteIteam = async(cust_id,rest_id,dish_id)=>{
    try{
        await client.query(`
          DELETE FROM cart 
          WHERE cust_id = $1 AND rest_id = $2 And dish_id= $3
        `, [cust_id,rest_id,dish_id]);
      }catch(err){
        console.log(err.message);
    
      }
}
const getcart = async (cust_id)=>{
    try{
      const result =await client.query(`
      SELECT d.name,d.image_url,d.description,r.name,r.location,c2.quantity,m.price
FROM Cart c2
JOIN Customer c ON c.id = c2.cust_id
JOIN Restaurent r ON r.id = c2.rest_id
	 Join menu m on m.rest_id= r.id 
JOIN Dish d ON d.id =m.dish_id and d.id = c2.dish_id
JOIN Variant v ON v.var_id = c2.var_id AND v.dish_id = c2.dish_id AND v.rest_id = c2.rest_id
WHERE c2.cust_id = $










=1;

        `, [cust_id]);
        return result.rows;
      }catch(err){
        console.log(err.message);
    
      }
}
module.exports={AddtoCart,deleteIteam,getcart}