const client = require('../config/db');

// Select all users (customers and vendors)
const selectAll = async () => {
    const result = await client.query(`
        SELECT * FROM users;
    `);
    return result.rows;
}

// Select user by a specific field (e.g., email or phone)
const selectWhere = async (field, value) => {
    const result = await client.query(`
        SELECT * FROM users
        WHERE ${field} = $1;
    `, [value]);
    return result.rows;
}

// Insert a new user (customer or vendor)
const insert = async (name, email, mobile, password, role) => {
    try {
        await client.query(`
            INSERT INTO users (name, email, phone, password, role)
            VALUES ($1, $2, $3, $4, $5);
        `, [name, email, mobile, password, role]);
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

module.exports = { selectAll, selectWhere, insert, insertVendor };
