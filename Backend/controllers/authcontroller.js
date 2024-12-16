const User = require("../models/Users");
const jwt = require("jsonwebtoken");
  
const login = async (req, res) => {
  const { email, password } = req.body;
  console.log(req.body);
  const user = await User.selectWhere("email", email);
  if (user == "") return res.status(400).json({ message: "email not exists" });
  console.log(user);

  if (user[0].password != password)
    return res.status(401).json({ message: "Wrong pasword" });

  const accessToken = jwt.sign(
    {
      name: user[0].name,
      email,
      user_id: user[0].user_id,
      mobile: user[0].mobile,
      password: user[0].password,
    },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: "15m" }
  );
  res.status(200).json({ accessToken });
};

const register = async (req, res) => {
  const {name, email, phone_no, password, address, image_url} = req.query;
  console.log(req.query);
  const id = await User.insert(name, email, phone_no, password, address, image_url);
  res.status(200).json({ id });
};

module.exports = { login, register };
