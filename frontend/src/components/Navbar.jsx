import React, { useContext, useState } from 'react'
import {assets} from '../assets/assets.js'
import { Link, useNavigate, NavLink } from 'react-router-dom'
import sonic_logo from '../assets/sonic_logo.png'
import {Search} from 'lucide-react'
import {UserShield} from 'lucide-react'
import {ShoppingBag} from 'lucide-react'
import {Menu} from 'lucide-react'
import {ChevronLeft} from 'lucide-react'
import { ShopContext } from '../context/ShopContext.jsx'

const Navbar = () => {
  const navigate = useNavigate();
  const [visible, setvisible] = useState(false);

  const {setshowSearch,getCartCount,token, settoken ,setcartItems} = useContext(ShopContext);
  
 const logout =()=>{
  navigate('/login');
  localStorage.removeItem('token');
  settoken('');
  setcartItems({});
 }

  return (
    <div className='flex items-center justify-between py-5 font-medium'>

      <Link to={'/'}><img src={sonic_logo} alt="logo_image" className='w-44'/></Link>

      <ul className='hidden sm:flex gap-5 text-sm  text-gray-700'>

        <NavLink to={'/'} className='flex flex-col items-center gap-1 hover:scale-110'>
          <p>Home</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>

        <NavLink to={'/collection'} className='flex flex-col items-center gap-1 hover:scale-110'>
          <p>Collection</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>

        <NavLink to={'/about'} className='flex flex-col items-center gap-1 hover:scale-110'>
          <p>About</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>


        <NavLink to={'/contact'} className='flex flex-col items-center gap-1 hover:scale-110'>
          <p>Contact</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        
      </ul>

      <div className='flex items-center gap-6'>
       
       <Search onClick={()=>setshowSearch(true)} className='cursor-pointer' />
        
        <div className='group relative'>

          {/* <img src="" alt="profile icon" /> */}
          
          <UserShield onClick={()=>token? null :navigate('/login')}/>
         
          {/* DropDown menu  */}
          {/* here adding the token && means if token available then this div will be shown  */}
          {token && 
          <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
            <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-400 rounded-2xl'>
              <p className='cursor-pointer hover:text-black'>My Profile</p>
              <p className='cursor-pointer hover:text-black'
              onClick={()=>navigate('/orders')}
              >Orders</p>
              <p className='cursor-pointer hover:text-black'
              onClick={logout}
              >Logout</p>
            </div>
          </div>}

        </div>
        <Link to={'/cart'} className='relative'>
          {/* cart icon */}
          <ShoppingBag />
          <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-taupe-100 aspect-square rounded-full text-[8px]'>{getCartCount()}</p>

        </Link>

        <Menu className='cursor-pointer sm:hidden' onClick={()=>setvisible(true)}/>

      </div>

      {/* Sidebar div  */}

      <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all z-50 ${visible? 'w-full':"w-0"}`}>
        <div className='flex flex-col text-gray-600'>
          <div onClick={()=> setvisible(false)} className='flex items-center p-3 cursor-pointer'>
            <ChevronLeft />
            <p>Back</p>
          </div>

          <NavLink onClick={()=>setvisible(false)} className='py-2 pl-6 border' to={'/'}>Home</NavLink>
          <NavLink onClick={()=>setvisible(false)} className='py-2 pl-6 border' to={'/collection'}>Collection</NavLink>
          <NavLink onClick={()=>setvisible(false)} className='py-2 pl-6 border' to={'/about'}>About</NavLink>
          <NavLink onClick={()=>setvisible(false)} className='py-2 pl-6 border' to={'/orders'}>Orders</NavLink>
          <NavLink onClick={()=>setvisible(false)} className='py-2 pl-6 border' to={'/contact'}>Contact us</NavLink>

        </div>

      </div>
      
    </div>
  )
}

export default Navbar