import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import {ChevronRight} from 'lucide-react'
import Titile from "../components/Titile";
import ProductItem from "../components/ProductItem";

const Collection = () => {
  const { products,search,showSearch } = useContext(ShopContext);
  const [showFilter, setshowFilter] = useState(false);
  const [filterProducts, setfilterProducts] = useState([]);

   const [category, setcategory] = useState([]);

  const [subCategory, setSubCategory] = useState([]);

  const [sortType, setsortType] = useState('relevant');

  const toggleCategory =(e)=>{
    if(category.includes(e.target.value)){
      setcategory(prev=>prev.filter(item=> item != e.target.value))
    }else{
      setcategory(prev => [...prev,e.target.value]);
    }
  }
  const toggleSubCategory =(e)=>{
    if(subCategory.includes(e.target.value)){
      setSubCategory(prev=>prev.filter(item=> item != e.target.value))
    }else{
      setSubCategory(prev => [...prev,e.target.value]);
    }
  }


  const sortProduct=()=>{
    let fpCopy = filterProducts.slice();

    switch(sortType){
      case "low-high":
        setfilterProducts(fpCopy.sort((a,b)=>(a.price- b.price)));
        break;
      case 'high-low':
        setfilterProducts(fpCopy.sort((a,b)=>(b.price - a.price)));
        break;
      
      default:
        applyFilter();
    }
  }


  useEffect(()=>{
    setfilterProducts(products);

  },[]);


  

  const applyFilter =()=>{
    let productsCopy = products.slice();

    if(showSearch && search ){
      productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
    }

    if(category.length>0){
      productsCopy = productsCopy.filter(item=> category.includes(item.category));
    }
    if(subCategory.length >0 ){
      productsCopy = productsCopy.filter(item=>subCategory.includes(item.subCategory));
    }
    setfilterProducts(productsCopy);
    
    
  }

  useEffect(()=>{
    applyFilter();

  },[category,subCategory,search, showSearch,products]);


  useEffect(()=>{
    sortProduct();
  },[sortType]);
 




  return (
    <div className="flex flex-col sm:flex-row gap-1 border-t sm:gap-10">
      {/* Filter options  */}

      <div className="min-w-60">
        <p onClick={()=>setshowFilter(!showFilter)} className="my-2 text-xl flex items-center cursor-pointer gap-2">
          Filters
          <ChevronRight className={`h-3 sm:hidden ${showFilter?'rotate-90' :''}`} />
        </p>
        {/* Category Filter  */}

        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? "" : "hidden"} sm:block`}
        >
          <p className="mb-3 text-sm font-medium">CATEGORIES</p>

          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input type="checkbox" className="w-3" value={"Men"} onChange={toggleCategory} />
              Men
            </p>
            <p className="flex gap-2">
              <input type="checkbox" className="w-3" value={"Women"} onChange={toggleCategory} />
              Women
            </p>
            <p className="flex gap-2">
              <input type="checkbox" className="w-3" value={"Kids"} onChange={toggleCategory} />
              Kids
            </p>
          </div>
        </div>

        {/* SubCategories  */}
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? "" : "hidden"} sm:block`}
        >
          <p className="mb-3 text-sm font-medium">TYPE</p>

          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input type="checkbox" className="w-3" value={"Topwear"}  onChange={toggleSubCategory}/>
              Topwear
            </p>
            <p className="flex gap-2">
              <input type="checkbox" className="w-3" value={"Bottomwear"} onChange={toggleSubCategory} />
              Bottomwear
            </p>
            <p className="flex gap-2">
              <input type="checkbox" className="w-3" value={"Winterwear"} onChange={toggleSubCategory} />
              Winterwear
            </p>
          </div>
        </div>
      </div>


      {/* RightSide  */}
      
      <div className="flex-1 mt-3">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Titile text1={'ALL'} text2={'COLLECTIONS-'} />

          {/* Product sort  */}

          <select className="border-2 border-gray-500 text-sm px-2 rounded" id="" onChange={(e)=>setsortType(e.target.value)}>
          <option value="relavent">Sort by: Relevant</option>
          <option value="low-high">Sort by: Low-high</option>
          <option value="high-low">Sort by: High-Low</option>
 

          </select>

        </div>

        {/* Map Products  */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">

          {filterProducts.map((item,index)=>{
            
            return (
            <ProductItem key={item._id} name={item.name} id={item._id} price={item.price} image={item.image}/>
          );

          })}

        </div>
      </div>


    </div>
  );
};

export default Collection;
