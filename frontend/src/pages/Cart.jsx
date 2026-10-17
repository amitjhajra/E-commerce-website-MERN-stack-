import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Titile from '../components/Titile';
import { Trash } from 'lucide-react';
import CartTotal from '../components/CartTotal';

const Cart = () => {
  const {products,currency,cartItems,updateQuantity,navigate} = useContext(ShopContext);

  const [cartData, setcartData] = useState([]);

  useEffect(()=>{
     const tempData =[];
     for(const items in cartItems){
      for(const item in cartItems[items]){
        if(cartItems[items][item]>0){
          tempData.push({
            id:items,
            size:item,
            quantity:cartItems[items][item]
          })
        }
      }
     }
     setcartData(tempData);
     
  },[cartItems]);


  return (
    <div className='border-t pt-14'>

      <div className='text-2xl mb-3'>
        <Titile text1={'YOUR'} text2={'CART'}/>

      </div>

      <div className=''>
        {
          cartData.map((item,index)=>{
            const productData = products.find((product)=> product._id === item.id);

            return (
              <div key={index} className='py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4'> 

              <div className='flex items-start gap-6'>
                <img className='w-16 sm:w-20' src={productData.image[0]} alt="" />
                <div>
                  <p className='text-xs sm:text-lg font-medium'>{productData.name}</p>

                  <div className='flex items-center gap-5 mt-2'>
                    <p>{currency}{productData.price}</p>
                    <p className='px-2 sm:px-3 sm:py-1 border bg-slate-50 rounded-2xl'>{item.size}</p>
                  </div>
                </div>

              </div>


              <input onChange={(e)=> e.target.value==='' || e.target.value === '0' ?null:updateQuantity(item.id,item.size,Number(e.target.value))} type="number" min={1} defaultValue={item.quantity} 
              className='border max-w-10 sm:max-w-20 px-2 appearance-auto' />

              <Trash onClick={()=>updateQuantity(item.id,item.size,0)} className='w-5 cursor-pointer' />

              

              </div>
            )
          })
        }
      </div>
      <div className='flex justify-end my-20'>
        <div className='w-full sm:w-[450px]'>
          <CartTotal/>
          <div className='w-full text-end'>
            <button onClick={()=>navigate('/place-order')}
             className='bg-black text-white text-sm m-5 px-5 py-2' >Place Order</button>
          </div>
        </div>
      </div>
    
    </div>
  )
}

export default Cart
