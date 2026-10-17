import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import star_image from '../assets/yellow_star.jpg';
import dullstar_image from '../assets/dull_star.png';
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {
  const {productId} = useParams();
  const {products, currency, addToCart} = useContext(ShopContext);

  const [productData, setproductData] = useState(false);

  const [image, setimage] = useState('');

  const [size, setsize] = useState('');

  const fetchProductData = () => {
    const foundProduct = products.find(
      (item) => item._id === productId
    );

    if (foundProduct) {
      setproductData(foundProduct);
      setimage(foundProduct.image?.[0] || '');
    }
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);


  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      {/* Product data  */}

      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row justify-between'>
        {/* product images */}

        <div className='flex flex-1 flex-col-reverse gap-13 sm:flex-row w-3/4'>

        <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-center w-2/10'>

          {
            productData.image?.map((item, index) => (
              <img
                src={item}
                key={index}
                alt=""
                className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer'
                onClick={() => setimage(item)}
              />
            ))
          }
        </div>

        {/* Main image  */}

        <div className='w-full sm:w-[80%]'>
          <img src={image} alt="main image " />
        </div>
        </div>


        {/* -------------------ProductInfo  ----------*/}

        <div className='flex-1 '>
          <h1 className='font-medium'>{productData.name}</h1>

          <div className='flex items-center gap-1 mt-2'>
            <img src={star_image} alt="" className="w-5" />

            <img src={star_image} alt="" className="w-5" />

            <img src={star_image} alt="" className="w-5" />

            <img src={dullstar_image} alt="" className="w-5" />

            <p className='pl-2'>(222)</p>
          </div>

          <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
          <p className='mt-5 text-gray-500 md:w-4/5'>{productData.desc}</p>

          <div className='flex flex-col gap-4 my-8'> 
            <p>Select size</p>
             <div className='flex gap-2'>
              {productData.sizes.map((item, index) => (
                <button
                  className={`rounded bg-gray-400 p-3 hover:scale-105 ${item === size ? 'border-3 border-red-500-200' : ''}`}
                  onClick={() => setsize(item)}
                  key={index}
                >
                  {item}
                </button>
              ))}
             </div>
          </div>


          <button
            className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700'
            onClick={() => addToCart(productData._id, size)}
          >
            ADD TO CART
          </button>

          <hr className='mt-8 sm:w-4/5'/>

          <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
            <p>100% orignal Product</p>
            <p>Cash on delivery available</p>
            <p>Easy and return exchange policy within 7 days</p>
          </div>
        </div>

      </div>

       {/* Description & review Section  */}

        <div className='mt-20'>
          <div className='flex '>
            <b className='border px-5 py-3 text-sm'>Description</b>
            <p className='border px-5 py-2 text-sm'>Reviews (122)</p>
          </div>

          <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, sint esse ipsam sed tempora nobis quasi explicabo alias laborum sunt?</p>

            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia, quia!</p>
          </div>

        </div>

        {/* Display related products  */}
        <RelatedProducts category={productData.category} subCategory={productData.subCategory}/>

    </div>

  ) : <div className='opacity-0'> </div>
}

export default Product