const client = require('../config/db');

// Select all customers
const selectAllCustomers = async () => {
    const result = await client.query(`
        SELECT * FROM Customer;
    `);
    return result.rows;
};

// Select customer by a specific field (e.g., email or phone_no)
const selectCustomerWhere = async (field, value) => {
    const result = await client.query(`
        SELECT * FROM Customer
        WHERE ${field} = $1;
    `, [value]);
    return result.rows;
};

// Insert a new customer
const insertCustomer = async (name, email, phone_no, password, address, image_url) => {
    try {
        const res = await client.query(`
            INSERT INTO Customer (name, email, phone_no, password, address, image_url)
            VALUES ($1, $2, $3, $4, $5, $6) returning id;
        `, [name, email, phone_no, password, address, image_url]);
        return res.rows[0];
    } catch (err) {
        console.log(err.message);
    }
};
// Insert a new vendor
const insertVendor = async (userId, locationId, foodCategory) => {
    try {
        await client.query(`
            INSERT INTO vendors (user_id, location_id, food_category)
            VALUES ($1, $2, $3);
        `, [userId, locationId, foodCategory]);
    } catch (err) {
        console.log(err.message);
    }
};

module.exports = { selectCustomerWhere, selectAllCustomers, insertCustomer, insertVendor };
