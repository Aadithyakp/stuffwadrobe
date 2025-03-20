const express = require("express");
const app = express();
const mongoose = require("mongoose");
const userRouter = require("./routes/user")
const productRouter = require("./routes/product")
const cartRouter = require("./routes/cart");
const orderRouter = require("./routes/order");
const authRoute = require("../Backend/routes/auth")
const dotenv = require("dotenv");
const cors = require('cors');
dotenv.config();

mongoose.connect(process.env.MONGO_URL).then(()=>console.log("DB connection successful")).catch((err)=>{
    console.log(err)
})
app.use(cors());
app.use(express.json()); //Enbales to send json objs

app.use("/api/auth", authRoute);
app.use("/api/users",userRouter);
app.use("/api/products",productRouter);
app.use("/api/carts", cartRouter);
app.use("/api/orders", orderRouter);

app.listen(5000,()=>{
    console.log("Server running in port 5000")
})