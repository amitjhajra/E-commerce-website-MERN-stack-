import React from 'react'
import { NavLink } from 'react-router-dom'
import {Plus,List,ShoppingCartPlus} from 'lucide-react'

const Sidebar1 = () => {
  return (
   <div className='w-[18%] min-h-screen border-r-2'>
      <div className='flex flex-col gap-4 pt-6 pl-[20%] text-[15px]'>

        <NavLink className='flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 whitespace-nowrap rounded-2xl rounded-r-none' to={'/add'}>
        
        <Plus size={32} />
        <p className='hidden md:block text-gray-600 italic'>Add Items </p>
        </NavLink>
        
        <NavLink className='flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-2xl rounded-r-none whitespace-nowrap' to={'/list'}>
        
        <List size={22} />
        <p className='hidden md:block text-gray-600 italic'>List Items </p>
        </NavLink>

        <NavLink className='flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-2xl whitespace-nowrap rounded-r-none' to={'/orders'}>
        
      <ShoppingCartPlus size={22}/>
        <p className='hidden md:block text-gray-600 italic'>Orders </p>
        </NavLink>
        

      </div>
    </div>
  )
}

export default Sidebar1
