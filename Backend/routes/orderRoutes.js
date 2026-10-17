import express from 'express'
import { placeOrder,placeOrderGooglePay,placeOrderPaytm,allOrder,userOrders,updateStatus } from '../controllers/orderController.js'
import adminAuth from '../middleware/adminAuth.js'
import authUser from '../middleware/auth.js'

const orderRouter = express.Router();

// Admin routes 
orderRouter.post('list',adminAuth,allOrder);
orderRouter.post('status',adminAuth,updateStatus);


// Payment Features 
orderRouter.post('/place',authUser,placeOrder); 
orderRouter.post('/googlepay',authUser,placeOrderGooglePay); 
orderRouter.post('/payrhm',authUser,placeOrderGooglePay); 


// User features 

orderRouter.post('/userorders',authUser,userOrders);

export default orderRouter;