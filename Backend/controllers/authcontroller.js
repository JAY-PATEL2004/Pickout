const User = require('../models/Users');
const jwt = require('jsonwebtoken');

const login = async (req, res) => {
  const { email, password } = req.body;
  console.log(req.body);

  try {
    const user = await User.selectCustomerWhere('email', email);
    if (user.length === 0) return res.status(400).json({ message: 'Email does not exist' });

    if (user[0].password !== password)
      return res.status(401).json({ message: 'Wrong password' });

    const accessToken = jwt.sign(
      {
        name: user[0].name,
        email,
        customer_id: user[0].id,
        phone_no: user[0].phone_no,
        address: user[0].address,
        imageurl: user[0].image_url,
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

const register = async (req, res) => {
  const {name, email, phone_no, password, address, image_url} = req.query;
  console.log(req.query);
  const id = await User.insert(name, email, phone_no, password, address, image_url);
  res.status(200).json({ id });
};

module.exports = { login, register };
