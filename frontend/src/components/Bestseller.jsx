import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Titile from './Titile';
import ProductItem from './ProductItem';

const Bestseller = () => {
  const {products} =useContext(ShopContext);
  const [bestSeller, setbestSeller] = useState([]);


  useEffect(()=>{
    const bestProduct =products.filter((item)=>(item.bestSeller));
    setbestSeller(bestProduct.slice(0,5));

  },[products]);
  return (
    <div className='my-10'>

      <div className='text-center text-3xl py-8'>
        <Titile text1 ={"BEST"} text2 ={"SELLER"}/>

        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id voluptatum sint libero laudantium totam?</p>
      </div>

      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>

        {bestSeller.map((item,index)=>(
          <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
        ))}


      </div>
      
    </div>
  )
}

export default Bestseller
