import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import Bestseller from '../components/Bestseller'
import OurPolicy from '../components/OurPolicy'
import NewsLetterBox from '../components/NewsLetterBox'

const Home = () => {
  return (
    <div className='mb-12'>
      <Hero/>
      <LatestCollection/>
      <Bestseller/>
      <OurPolicy/>
      <NewsLetterBox/>
    </div>
  )
}

export default Home
