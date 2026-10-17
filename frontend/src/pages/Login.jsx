import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext';
import axios from 'axios';
import { toast } from 'react-toastify';


const Login = () => {
  const [currentState, setcurrentState] = useState('Sign up');
  

  const {token,settoken,navigate,backendUrl}=useContext(ShopContext);


  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');

  const onSubmitHandler = async(event)=>{
    event.preventDefault();
    try {
      if(currentState === 'Sign up'){

        // For Sign up 

        const response = await axios.post(backendUrl + '/api/user/register' ,{name,email,password});

        if(response.data.success){
          const userToken=response.data.token;
          settoken(userToken);
          localStorage.setItem("token",userToken);
        }else{
          toast.error(response.data.message);
        }
      }else{
        // For login 

        const response = await axios.post(backendUrl+ '/api/user/login' ,{email,password});

        console.log(response.data);
        

        if(response.data.success){
          const userToken = response.data.token;

          settoken(userToken);
          localStorage.setItem('token',userToken);
        }else{
          toast.error(response.data.message);
        }

      } 
    } catch (error) {
      console.log(error);
      toast.error(response.data.message);
      
    }

  }

  useEffect(()=>{
    if(token){
      navigate('/');
    }
  },[token]);

  // useEffect(()=>{
  //    if(!token && localStorage.getItem("token")){
  //     settoken(localStorage.getItem("token"));
  //    }

  // },[]);


  return (
   <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>


    <div className='inline-flex items-center gap-2 mb-2 mt-10'>
      <p className='prata-regular text-3xl'> {currentState}</p>
      <hr  className='border-none h-[1.5px] w-8 bg-gray-800'/>

    </div>

    {currentState === 'Sign up' ?<input type="text" className='w-full px-3 py-2 border border-gray-800' placeholder='Name' required 
    onChange={(e)=>setname(e.target.value)}
    value={name}
    /> :''}


    <input type="email" className='w-full px-3 py-2 border border-gray-800' placeholder='Email' required 
    onChange={(e)=>setemail(e.target.value)}
    value={email}
    />

    <input type="password" className='w-full px-3 py-2 border border-gray-800' placeholder='Password' required 
    onChange={(e)=>setpassword(e.target.value)}
    value={password}
    />

    <div className='w-full flex justify-between text-sm mt-[-8px]'>
      <p className='cursor-pointer'>Forgot your password ?</p>
      {
        currentState === 'Login'?
        <p onClick={()=>setcurrentState('Sign up')} className='cursor-pointer'>Create Account</p>
        :<p onClick={()=>setcurrentState('Login')} className='cursor-pointer'>Login Here</p>
      }
    </div>

    <button className='bg-black text-white rounded px-7 py-3 hover:scale-105 active:bg-amber-300 transition-all ease-in-out'>{currentState === 'Login'? 'Login': 'Sign Up'}</button>
    
    


   </form>
  )
}

export default Login
