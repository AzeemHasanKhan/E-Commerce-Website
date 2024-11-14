import express from 'express';
import cors from 'cors';
import "dotenv/config"
import connectDB from './config/mongodb.js';
import userRouter from './routes/userRoute.js';
import productRouter from './routes/productRoute.js';
import connectCloudinary from "./config/cloudinary.js"
import cartRouter from './routes/cartRoute.js';
import orderRouter from "./routes/orderRoute.js"

//app config
const app = express();
const port = process.env.PORT || 4000
connectDB();
connectCloudinary();


//middleware
app.use(express.json());
app.use(cors());

// api ecd points
app.use("/api/user",userRouter);
app.use("/api/product",productRouter);
app.use("/api/cart",cartRouter);
app.use("/api/order",orderRouter);

//api end points
app.get("/",(req,res)=>{
    res.send("Hello from the backend!");
})

app.listen(port,()=>{
    console.log("server started on port"+port);
    
})