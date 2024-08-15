
import FeaturedServices from '@/components/FeaturedServices'
import Footer from '@/components/Footer'

import Hero from '@/components/Hero'
import Intro from '@/components/Intro'
// import Navbar from '@/components/Navbar'
import { Newsletter } from '@/components/Newsletter'
import Testimonials from '@/components/Testimonials'
import React from 'react'

const page = () => {
  return (
    <div>
      <Hero/>
      <Intro />
    <FeaturedServices/>
      {/* <Newsletter/> */}
      <Testimonials/>
      <Footer/>
    </div>
  )
}

export default page
