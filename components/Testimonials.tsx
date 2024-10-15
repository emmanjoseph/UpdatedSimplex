import React from 'react'
import { InfiniteMovingCards } from './ui/InfiniteMovingCards'
import { testimonials } from '@/app/Constants'

const Testimonials = () => {
  return (
    <div
    className='max-container padding-container py-10  my-0 md:my-5 flex flex-col gap-2 items-center overflow-hidden'
    >
        <h1 className='text-36-bold md:bold-40 '>Testimonials</h1>
        <p className="text-14-regular xl:text-16-regular  text-center py-2">Discover heartfelt accounts of joy and fulfillment from our esteemed clients</p>
      
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="normal"
      />
    </div>
  )
}

export default Testimonials


  