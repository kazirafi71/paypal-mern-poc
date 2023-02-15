const express = require("express");
const app = express();
var bodyParser = require("body-parser");
const mongoose = require("mongoose");
const { DB_URL } = require("./config/config");
const cors = require("cors");

// parse application/x-www-form-urlencoded
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

//routes

app.use("/payment", require("./routes/payment.routes"));

//database and server

const PORT = process.env.PORT || 5000;

mongoose.connect(DB_URL, () => {
  console.log("Database connected");
});
app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
