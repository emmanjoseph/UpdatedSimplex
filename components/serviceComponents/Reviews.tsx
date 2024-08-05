import React from 'react'
import { testimonials } from '@/app/Constants'
import { InfiniteMovingCards } from '../ui/InfiniteMovingCards'

const Reviews = () => {
  return (
    <div
    className='max-container padding-container py-10 lg:py-24 my-0 md:my-5 flex flex-col gap-2'
    >
        <h1 className='bold-18'>Client reviews</h1>
        <InfiniteMovingCards
        items={testimonials}
        direction='right'
        speed='slow'
        />
    </div>

  )
}

export default Reviews