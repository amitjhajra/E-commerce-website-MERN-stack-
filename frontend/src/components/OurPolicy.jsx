import React from 'react'
import {assets} from '../assets/assets.js'

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-center gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700 items-center'>

      <div>
        <img src={assets.exchange} alt="exchange icon" className='w-18 m-auto mb-5' />
 
        <p className='font-semibold'>Easy Exchange policy</p>


        <p className='text-gray-400'>We offer hassle free exchange</p>
      </div>

      <div>
        <img src={assets.return_policy} alt="exchange icon" className='w-18 m-auto mb-5' />

        <p className='font-semibold'>7 Days Return Policy</p>


        <p className='text-gray-400'>We provide 7 days free return policy</p>
      </div>
      

      <div>
        <img src={assets.customer_support} alt="exchange icon" className='w-18 m-auto mb-5' />

        <p className='font-semibold'>Best Customer Support</p>


        <p className='text-gray-400'>We provide 24*7 customer support</p>
      </div>
      
    </div>
  )
}

export default OurPolicy
