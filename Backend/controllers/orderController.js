

// Placing oders using COD method 

import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";

const placeOrder = async(req,res)=>{
  try {
    const {userId,items,amount, address} = req.body;

    const orderData = {
      userId,
      items,
      address,
      amount,
      paymentMethod:"COD",
      payment:false,
      date:Date.now()
    }

    const newOrder = new orderModel(orderData);
    await newOrder.save();

    await userModel.findByIdAndUpdate(userId,{cartData:{}});

    res.json({
      success:true,message:"Order Placed"
    })

  } catch (error) {
    console.log(error);
    res.json({success:false,message:error.message});
    
  }
  
}
// Placing oders using Google pay  method 

const placeOrderGooglePay = async(req,res)=>{

}
// Placing oders using Paytm method 

const placeOrderPaytm = async(req,res)=>{

}


// All orders data for admin panel 
const allOrder= async(req,res)=>{

}

// USer orders for frontend 
const userOrders= async(req,res)=>{
  try {
    const {userId} =req.body;
    const orders = await orderModel.find({userId});
    res.json({success:true,orders});

  } catch (error) {
    console.log(error);
    res.json({success:false,message:error.message});
    
  }

}


// Update status 
const updateStatus = async(req,res)=>{

}

export {placeOrder,placeOrderGooglePay,placeOrderPaytm,allOrder,userOrders,updateStatus};