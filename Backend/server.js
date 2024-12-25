const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use("/auth", require("./routes/authRoute"));
app.use("/Cart", require("./routes/Cart"));
app.use("/Shop",require("./routes/Shoproutes"));
//app.use("/Order",require("./routes/OrderRoutes.js"));
app.use("/VRegistration",require("./VendorRoutes/RegistrationRoutes"));
app.use("/Vneworder",require("./VendorRoutes/VendorDashRoute"));
// Routes
app.get('/', (req, res) => {
    
  res.send('Backend is running!');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
