import React, { useState } from 'react'
import { assets } from '../assets/assets'
import axios from 'axios';
import { backendUrl } from '../App';
import { toast } from 'react-toastify';

const Add = ({token}) => {
  const [image1, setimage1] = useState(false);
  const [image2, setimage2] = useState(false);
  const [image3, setimage3] = useState(false);
  const [image4, setimage4] = useState(false);

  const [name, setname] = useState('');
  const [desc, setdesc] = useState('');
  const [price, setprice] = useState('');
  const [category, setcategory] = useState('men');
  const [subCategory, setsubCategory] = useState('topwear');

  const [bestseller, setbestseller] = useState(false);


  const [sizes, setsizes] = useState([]);


  const onSubmitHandler =async(e)=>{
    e.preventDefault();
    const toastId = toast.loading("Adding the Products please wait..");
    try {
      const formData = new FormData();
      formData.append("name",name);
      formData.append("desc",desc);
      formData.append("price",price);
      formData.append("category",category);
      formData.append("subCategory",subCategory);
      formData.append("bestseller",bestseller);
      formData.append("sizes",JSON.stringify(sizes));

      image1 && formData.append("image1",image1);
      image2 && formData.append("image2",image2);
      image3 && formData.append("image3",image3);
      image4 && formData.append("image4",image4);
      

      const response = await axios.post(backendUrl+'/api/product/add',formData,
       {
        headers:{token}
       }
      );

      if(response.data.success){
        toast.update(toastId,{
          render:response.data.message,
          type:"success",
          isLoading:false,
          autoClose:3000
        })
        setname('');
        setdesc('');
        setimage1(false);
        setimage2(false);
        setimage3(false);
        setimage4(false);
        setprice('');
        setsizes([]);
      }else{
        toast.update(toastId,{
          render:response.data.message,
          type:"error",
          isLoading:false,
          autoClose:3000
        })

      }
      


    } catch (error) {
      console.log(error);
      toast.error(error.message);
      
    }

  }



  return (
    <form  onSubmit={onSubmitHandler}
     className='flex flex-col w-full items-start gap-3 pr-3'>
      <div>
        <p className='mb-2'>Upload Image</p>


        <div className='flex flex-col sm:flex-row gap-2'>

          <label htmlFor="image1">
            <img src={!image1 ?assets.upload_image :URL.createObjectURL(image1)} alt="" 
            className='w-[250px] h-[250px] object-cover mb-3' />


            <input type="file" id='image1' hidden onChange={(e)=>setimage1(e.target.files[0])} />
          </label>

          <label htmlFor="image2">
            <img src={!image2 ?assets.upload_image :URL.createObjectURL(image2)} alt="" 
            className='w-[250px] h-[250px] object-cover mb-3' />
            <input type="file" id='image2' hidden onChange={(e)=>setimage2(e.target.files[0])}  />

          </label>
          <label htmlFor="image3">

            <img src={!image3 ?assets.upload_image :URL.createObjectURL(image3)} alt=""
            className='w-[250px] h-[200px] object-cover mb-3'/>
            <input type="file" id='image3' hidden  onChange={(e)=>setimage3(e.target.files[0])}  />
          </label>
          <label htmlFor="image4">
            <img src={!image4 ?assets.upload_image :URL.createObjectURL(image4)}
           
            alt="" className='w-[250px] h-[250px] mb-3 object-cover'/>
            <input type="file" id='image4' hidden  onChange={(e)=>setimage4(e.target.files[0])} />
          </label>



        </div>
      </div>

      <div className='w-full'>
        <p className='mb-2'>Product Name</p>
        <input type="text" placeholder='Type here' required 
        onChange={(e)=>setname(e.target.value)} value={name}
        className='w-full max-w-[500px] px-3 py-2'
        /> 
      </div>
      <div className='w-full'>
        <p className='mb-2'>Product Description</p>
        <textarea type="text"
        onChange={(e)=>setdesc(e.target.value)} 
        value={desc}
        placeholder='Description here' required 
        className='w-full max-w-[500px] px-3 py-2'
        /> 
      </div>  

      <div className='flex flex-col sm:flex-row gap-2w-full sm:gap-8'>
        <div>
          <p className='mb-2'>Product Category </p>
          <select onChange={(e)=>setcategory(e.target.value)}  className='w-full px-3 py-2' >
            <option value="men">Men</option>
            <option value="women">Women</option>
            <option value="kids">Kids</option>
          </select>
        </div>
        <div>
          <p className='mb-2'>Sub-Category </p>
          <select
           onChange={(e)=>setsubCategory(e.target.value)}
          className='w-full px-3 py-2'  >
            <option value="topwear">TopWear</option>
            <option value="bottomwear">BottomWear</option>
            <option value="winterwear">Winterwear</option>
          </select>
        </div>

        <div>
          <p className='mb-2'>Product Price</p>
          <input type="number"
          onChange={(e)=>setprice(e.target.value)} value={price}
           className='w-full px-3 py-2 sm:w-[120px]'
          placeholder='$25' />
        </div>



      </div>

      <div>
        <p className='mb-2'>Product Sizes</p>
        <div className='flex gap-3'>

          <div onClick={(e)=>setsizes(prev=>prev.includes('S')?prev.filter(item => item !== 'S') :[...prev,'S'])}>


            <p className={`${sizes.includes('S') ? "bg-pink-300"  :"bg-slate-200" } px-3 py-1 cursor-pointer`}>S</p>
          </div>

          <div  onClick={(e)=>setsizes(prev=>prev.includes('M')?prev.filter(item => item !== 'M') :[...prev,'M'])}>
            <p className={`${sizes.includes('M') ? "bg-pink-300" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>M</p>
          </div>

          <div  onClick={(e)=>setsizes(prev=>prev.includes('L')?prev.filter(item => item !== 'L') :[...prev,'L'])}>
            <p className={`${sizes.includes('L')?"bg-pink-300":"bg-slate-200"} px-3 py-1 cursor-pointer`}>L</p>
          </div>

          <div  onClick={(e)=>setsizes(prev=>prev.includes('XL')?prev.filter(item => item !== 'XL') :[...prev,'XL'])}>
            <p className={`${sizes.includes('XL')?"bg-pink-300":"bg-slate-200"} px-3 py-1 cursor-pointer`}>XL</p>
          </div>

        </div>
      </div>

      <div className='flex gap-2 mt-2'>
        <input
        onChange={()=>setbestseller(prev=> !prev)} checked={bestseller}
        type="checkbox" id='bestseller' />
        <label
        className='cursor-pointer'
        htmlFor="bestseller">Add to BestSeller</label>
      </div>


      <button type='submit'
       className='w-28 px-3 py-2 mt-3 bg-black text-white rounded'
      >Add</button>


    </form>
  )
}

export default Add
