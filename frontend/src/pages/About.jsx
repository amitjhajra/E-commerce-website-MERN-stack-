import React from 'react'
import Titile from '../components/Titile'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const About = () => {
  return (
    <div>
     <div className='text-2xl text-center pt-8 border-t'>
      <Titile text1={'About'} text2={'Us'}/>
     </div>

     <div className='my-10 flex flex-col md:flex-row gap-16'>
      <img className='w-full md:max-w-[450px]' src={assets.about_page} alt="about_img" />
      <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>

         <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis, accusamus.</p>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam sapiente debitis voluptates!</p>

         <b className='text-gray-500'>Our mission</b>
         <p>Our Mission Lorem ipsum, dolor sit amet consectetur adipisicing elit.
         </p>


      </div>
      

     </div>
     <div className='text-4xl py-4'>
      <Titile text1={'WHY'} text2={'CHOOSE US'}/>
     </div>

     <div className='flex flex-col md:flex-row text-sm mb-20'>

     <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
      <b>Quality Assurance :</b>
      <p className='text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, quisquam.</p>
     </div>

     <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
      <b>Quality Assurance :</b>
      <p className='text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, quisquam.</p>
     </div>

     <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
      <b>Quality Assurance :</b>
      <p className='text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, quisquam.</p>
     </div>


     </div>

     <NewsLetterBox/>

    

     
    </div>
  )
}

export default About
