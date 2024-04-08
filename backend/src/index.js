const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
const port = process.env.PORT || 3000;
const dbUrl = process.env.DB_URL;
const dbName = process.env.DB_NAME;
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");
const stripeRoute = require("./routes/stripe");
const cors = require("cors");

mongoose.connect(`${dbUrl}/${dbName}`)
.then(() => console.log("Connected to MongoDB"))
.catch((err) => console.log(err));

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);
 app.use("/api/checkout", stripeRoute);
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    });