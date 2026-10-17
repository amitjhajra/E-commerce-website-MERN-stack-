import express from 'express'
import cors from 'cors'
import 'dotenv/config' 
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/userRoutes.js';
import productRouter from './routes/productRoutes.js';
import cartRouter from './routes/cartRoutes.js';
import orderRouter from './routes/orderRoutes.js';


// App config

const app = express();
const port = process.env.PORT || 4000
connectDB();
connectCloudinary();

// middlewares
app.use(express.json());
app.use(cors());

// API end points 

app.use('/api/user',userRouter);
app.use('/api/product',productRouter);

app.get('/',(req,res)=>{
  res.send('API working');
});

// Orders end point 
app.use('/api',orderRouter);

app.use('/api/cart',cartRouter);

app.listen(port,()=> console.log("Server started on this port:"+port));

