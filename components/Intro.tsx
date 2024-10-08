'use client'
import React from 'react'
import { motion } from 'framer-motion'

const Intro = () => {
  return (
    <section className='max-container padding-container mt-3'>
      
      <div className='flex flex-col justify-center lg:items-center'>
        <div className='flex items-center'>
          <motion.h1
            initial={{ opacity: 0,y:50 }}
            whileInView={{ opacity: 1,y:0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className='bold-32 md:bold-66 md:text-center mb-4 '
          >
            Get The Best <br /> From Us &#128076;
          </motion.h1>
        </div> 

        <div className='flex flex-col gap-3'>
          <p className='text-left md:text-center regular-14 md:regular-16 w-full lg:max-w-[650px] my-3 text-black dark:text-gray-200'>
            We are committed to delivering exceptional services that cater to your unique business requirements. 
            Our team of professionals is dedicated to providing innovative solutions, ensuring your technology infrastructure 
            is robust, secure, and efficient. Experience unparalleled service quality and reliability with us.
          </p>

         
        </div>
      </div>
    </section>
  )
}

export default Intro
