const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoute = require("./routes/user")

dotenv.config();

//mongodb configuration
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB Connection Successfull!"))
  .catch((err) => {
    console.log(err);
  });

app.use(express.json());
app.use("/test", userRoute);

app.listen(process.env.PORT || 5000, () => {
    console.log('backend server is running!');

});