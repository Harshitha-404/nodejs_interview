const express = require("express");
const dotenv = require("dotenv").config();
const connectdb = require("./db/connect");
const Restaurant = require("./routes/restaurantRoute");
const app = express();

app.use(express.json());
connectdb();
app.use("/api/v1", Restaurant);
app.listen(process.env.PORT, () => {
  console.log(`Connected to ${process.env.PORT}`);
});
