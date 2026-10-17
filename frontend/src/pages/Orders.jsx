import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Titile from '../components/Titile';
import axios from 'axios';

const Orders = () => {

  const {backendUrl,token,products,currency}= useContext(ShopContext);
  const [orderData, setorderData] = useState([]);

  const loadOrderData = async ()=>{
    try {
      if(!token){
        return null;
      }

      const response = axios.post(backendUrl +'/api/userOrders',{},{headers:{token}});

     if((await response).data.success){
      let allOrdersItem =[];
      response.data.orders.map((order)=>{
        order.items.map((item))
      })
     }
      
      
    } catch (error) {
      
    }
  }
  useEffect(()=>{
    loadOrderData();
  },[token]);
  
  return (
    <div className='border-t pt-16'>

      <div className='text-2xl'>

        <Titile text1={"MY"} text2={"Orders"}/>

      </div>

      <div className=''>
        {
          orderData.map((item,index)=>(
            <div key={index} className='py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-5'>

              <div className='flex items-start gap-6 text-sm'>

                <img className='w-16 sm:w-20' src={item.image[0]} alt="" />

                <div>
                  <p className='sm:text-base font-medium'>{item.name}</p>
                  <div className='flex item-center gap-3 mt-2 text-base text-gray-600'>
                    <p className='text-lg'>{currency}{item.price}</p>
                    <p>Quantity :1/</p>

                    <p>Size:M</p>
                  </div>
                  <p className='mt-3'>Date: <span className='text-gray-400'> 28 sept 2026</span></p>
                </div>


              </div>

              <div className='md:w-1/2 flex justify-between'>

              <div className='flex items-center gap-2'>
                <p className='min-w-2 h-2 rounded-full bg-green-500'></p>
                <p className='md:text-base text-sm'>Ready to Ship</p>

              </div>
              <button className='border px-4 py-2 text-sm font-medium rounded-2xl'>Track Order</button>

              </div>

            </div>
          ))
        }

      </div>
      
    </div>
  )
}

export default Orders
