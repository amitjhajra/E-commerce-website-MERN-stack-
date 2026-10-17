import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { X } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const SearchBar = () => {
  const {search, setsearch,showSearch, setshowSearch} =useContext(ShopContext);
  const [visible, setvisible] = useState(false);

 const location = useLocation();

 useEffect(()=>{
  if(location.pathname.includes('collection')){
    setvisible(true);
  }
  else{
    setvisible(false);
  }

 },[location]);


  return showSearch&& visible ? (

    <div className='border-t border-b text-center flex items-center justify-center'>

      <div className='inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2'>

      <input type="text" 
      value={search}
      onChange={(e)=>setsearch(e.target.value)}
      placeholder='Search' className='flex-1 outline-none bg-inherit text-sm' />
      
      
      
      </div>

      <div>
        <X className='inline cursor-pointer' onClick={()=>setshowSearch(false)}/>
      </div>
     
    </div>
  ):null
}

export default SearchBar
