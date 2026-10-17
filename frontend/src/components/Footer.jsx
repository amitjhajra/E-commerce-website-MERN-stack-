import React from 'react'
import {assets} from '../assets/assets.js'

const Footer = () => {
  return (
    <div>
      
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm items-center' >
          
          <div>
            <img src={assets.sonic_logo} alt="assets logo" className='w-3/6'/>
            <p className='w-full md:w-2/3 text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus, voluptatum.</p>
          </div>

          <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600'>

              <li>Home</li>
              <li>About us</li>
              <li>Delivery</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>

            <ul className='flex flex-col gap-1 text-gray-600'>
              <li>+1-212-456-7589</li>
              <li>amitjhajra012@gmail.com</li>
            </ul>
          </div>

          



      </div>
      <div>
            <hr />
            <p className='py-5 text-sm text-center'>COPYRIGHT 2024 SONIC_STORE@.com</p>
          </div>
    </div>
  )
}

export default Footer
