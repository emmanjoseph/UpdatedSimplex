
import { FeaturedServices } from '@/components/FeaturedServices'
import { FeaturesSectionDemo } from '@/components/Features'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Intro from '@/components/Intro'
import { Newsletter } from '@/components/Newsletter'
import Testimonials from '@/components/Testimonials'
import React from 'react'

const page = () => {
  return (
    <div>
      <Hero/>
      <Intro />
      <FeaturedServices/>
    <FeaturesSectionDemo/>
      <Testimonials/>
      {/* <Newsletter/> */}
      <Footer/>
    </div>
  )
}

export default page
