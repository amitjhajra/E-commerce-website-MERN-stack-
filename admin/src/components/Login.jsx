import React, { useState } from 'react'
import axios from 'axios'
import { backendUrl } from '../App';
import { toast } from 'react-toastify';



const Login = ({settoken}) => {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  

 const  onSubmitHandler = async(e) =>{
  
  try {
    e.preventDefault();
    // console.log(email,password);
    const response = await axios.post(backendUrl+'/api/user/admin' ,{email,password});
    if(response.data.success){
      settoken(response.data.token)

    }else{
      toast.error(response.data.message);
    }
    
    
  } catch (error) {
    console.log(error);
    toast.error(error.message);
    
    
  }

 }
  return (
    <div className='min-h-screen flex items-center justify-center w-full'> 
       <div className='bg-white shadow-md rounded-lg px-8 py-6 max-w-md'> 
         <h1 className='text-2xl font-bold mb-4'>Admin Panel</h1>

         <form onSubmit={onSubmitHandler}>
          <div className='mb-3 min-w-72'>
            <p className='text-sm font-medium text-gray-700 mb-2'>Email Address</p>
            <input type="email" placeholder='your@email.com' required
            onChange={(e)=>setemail(e.target.value)}
            value={email}
            className='rounded w-full px-3 py-2 border border-gray-600 outline-none' />
          </div>
          <div className='mb-3 min-w-72'>
            <p className='text-sm font-medium text-gray-700 mb-2'>Password</p>
            <input type="password" placeholder='Enter Your Password' required
            onChange={(e)=>setpassword(e.target.value)} 
            value={password}
            className='rounded w-full px-3 py-2 border border-gray-600 outline-none'/>
          </div>

          <button 
           className='w-full mt-2 py-2 px-4 text-white bg-black rounded-2xl active:scale-110 transition-transform'
          type='submit'>Login</button>
         </form>
       </div>
    </div>
  )
}

export default Login
