'use client'
import React from 'react'
import { motion } from 'framer-motion'

const Intro = () => {
  return (
    <section className='max-container padding-container py-10 lg:py-20'>
      <div className='flex flex-col justify-center items-center'>
        <div className='flex items-center'>
          <motion.h1
            initial={{ opacity: 0,y:50 }}
            whileInView={{ opacity: 1,y:0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className='bold-32 md:bold-66 text-center mb-4 '
          >
            Get The <span className='bg-gradient-to-r from-sky-400 via-red-600 to-indigo-500 bg-clip-text text-transparent'>Best</span> <br /> From Us
          </motion.h1>
        </div> 

        <div className='flex flex-col gap-3'>
          <p className='text-left md:text-center regular-14 md:regular-16 xl:max-w-[650px] my-3 text-black dark:text-gray-200'>
            We are committed to delivering exceptional IT services that cater to your unique business requirements. 
            Our team of professionals is dedicated to providing innovative solutions, ensuring your technology infrastructure 
            is robust, secure, and efficient. Experience unparalleled service quality and reliability with us.
          </p>

         
        </div>
      </div>
    </section>
  )
}

export default Intro
