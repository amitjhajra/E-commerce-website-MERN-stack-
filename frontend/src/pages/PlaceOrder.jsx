import React, { useContext, useState } from 'react'
import Titile from '../components/Titile'
import CartTotal from '../components/CartTotal'
import { assets } from '../assets/assets'
import { ShopContext } from '../context/ShopContext'
import axios from 'axios'
import { toast } from 'react-toastify'

const PlaceOrder = () => {
  const [method, setmethod] = useState('cash'); 
  const {navigate, backendUrl , token , cartItems, getCartAmount, delivery_fee, products,setcartItems} =useContext(ShopContext);

  const [formData, setformData] = useState({
    firstName:'',
    lastName:'',
    email:'',
    street:'',
    city:'',
    state:'',
    pincode:'',
    country:'',
    phone:''
  })
  

const onChangeHandler =(event)=>{
  const name = event.target.name;
  const value = event.target.value;

  setformData(data =>({...data,[name]:value}))
}

const onSubmitHandler = async (e)=>{
  e.preventDefault();

  try {
    let orderItems = [];

    for(const items in cartItems){
      for(const item in cartItems[items]){
        if(cartItems[items][item] >0 ){
          const itemInfo = structuredClone(products.find(product => product._id === items))
          if(itemInfo){
            itemInfo.size =item;
            itemInfo.quantity= cartItems[items][item];
            orderItems.push(itemInfo);
          }
        }
      }
    }

    let orderData ={
      address:formData,
      items:orderItems,
      amount:getCartAmount()+delivery_fee

    }
    switch(method){
      // APi calls for cash on delivery order
      case 'cod':
        const response = await axios.post(backendUrl+'/api/order/place',orderData,{headers:{token}});

        if(response.data.success){
          setcartItems({});
          navigate('/orders');
        }else{
          toast.error(response.data.message);

        }
        break;
      default:
        break;
    }
  } catch (error) {
    console.log(error);
    toast.error(error.message);
    
  }


}

  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col sm:flex-row justify-between gap-14 pt-5 sm:pt-14 min-h-[80vh] border-t'>

      <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>

        <div className='text-xl sm:text-2xl my-3'>
          <Titile text1={'Delivery'} text2={'Information'}/>

        </div>

        <div className='flex gap-3'>
          <input
          onChange={onChangeHandler} name='firstName' value={formData.firstName}
          className='border border-gray-300 rounded py-1.5 px-3.5 w-full' 
          type="text" placeholder='First Name' />

          <input
          onChange={onChangeHandler} name='lastName' value={formData.lastName}
          className='border border-gray-300 rounded py-1.5 px-3.5 w-full' 
          type="text" placeholder='Last Name' />

        </div>
         <input
         onChange={onChangeHandler} name='email' value={formData.email}
         className='border border-gray-300 rounded py-1.5 px-3.5 w-full' 
          type="email" placeholder='email address' />

           <input required
           onChange={onChangeHandler} name='street' value={formData.street}
           className='border border-gray-300 rounded py-1.5 px-3.5 w-full' 
          type="text" placeholder='Street' />

        <div className='flex gap-3'>
          <input
          onChange={onChangeHandler} name='city' value={formData.city}
          className='border border-gray-300 rounded py-1.5 px-3.5 w-full' 
          type="text" placeholder='City' />

          <input
          onChange={onChangeHandler} name='state' value={formData.state}
          className='border border-gray-300 rounded py-1.5 px-3.5 w-full' 
          type="text" placeholder='State' />

        </div>

        <div className='flex gap-3'>
          <input required
          onChange={onChangeHandler} name='pincode' value={formData.pincode}
          className='border border-gray-300 rounded py-1.5 px-3.5 w-full' 
          type="number" placeholder='Pincode' />

          <input required
          onChange={onChangeHandler} name='country' value={formData.country}
          className='border border-gray-300 rounded py-1.5 px-3.5 w-full' 
          type="text" placeholder='Country' />

        </div>
         <input required
         onChange={onChangeHandler} name='phone' value={formData.phone}
         className='border border-gray-300 rounded py-1.5 px-3.5 w-full' 
          type="number" placeholder='Phone Number' />
        
      </div>



      {/* Right side div  */}

      <div className='mt-8 max-w-2/5'>

        <div className='mt-8 min-w-80'>

          <CartTotal/>

        </div>

        <div className='mt-12'>
          <Titile text1={'Payment'} text2={'Method'}/>

          <div className='flex gap-3 flex-col lg:flex-row flex-wrap'>


            {/* Single payment option div  */}
            <div onClick={()=> setmethod('gPay')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'gPay' ? 'bg-green-500' : ''}`}></p>
              <img className='h-10 mx-4' src={assets.google_pay} alt="" />

            </div>
            {/* -------------- */}
            <div onClick={()=> setmethod('phonePay')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'phonePay' ? 'bg-green-500' : ''}`}></p>
              <img className='h-10 mx-4' src={assets.phone_pay} alt="" />

            </div>
            {/* -------------- */}
            <div onClick={()=> setmethod('paytm')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'paytm' ? 'bg-green-500' : ''}`}></p>
              <img className='h-10 mx-4' src={assets.paytm} alt="" />

            </div>
            {/* ------------- */}
            <div onClick={()=> setmethod('card')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'card' ? 'bg-green-500' : ''}`}></p>
              <img className='h-10 mx-4' src={assets.cards} alt="" />

            </div>
            {/* --------------- */}
            <div onClick={()=> setmethod('cash')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'cash' ? 'bg-green-500' : ''}`}></p>
              <p className='text-gray-500 text-sm font-medium mx-4'>CASH ON DELIVERY</p>

            </div>

          </div>

          <div className='w-full text-end mt-8'>
            <button type='submit' className='bg-black text-white text-sm px-16 py-3'>Place Order</button>
          </div>

        </div>

      </div>
     
    </form>
  )
}

export default PlaceOrder
