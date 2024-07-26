'use client'
import React from 'react'
import { motion } from 'framer-motion'

const Intro = () => {
  return (
    <section className='max-container padding-container py-10 lg:py-20'>
      <div className='flex flex-col md:flex-row justify-center'>
        <div className='w-full lg:w-1/2 flex items-center'>
          <motion.h1
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className='bold-32 md:bold-64'
          >
            Get<br />The Best<br /> From Us
          </motion.h1>
        </div> 

        <div className='w-full lg:w-1/2 flex flex-col gap-3'>
          <div className='w-full flexEnd'>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className='w-3 bg-slate-300 h-[50px] lg:h-[100px]'
            />
          </div>

          <p className='text-justify md:text-left regular-14 md:regular-16 xl:max-w-[650px] my-3 '>
            We are committed to delivering exceptional IT services that cater to your unique business requirements. 
            Our team of professionals is dedicated to providing innovative solutions, ensuring your technology infrastructure 
            is robust, secure, and efficient. Experience unparalleled service quality and reliability with us.
          </p>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className='w-3 bg-slate-300 h-[50px] lg:h-[100px]'
          />
        </div>
      </div>
    </section>
  )
}

export default Intro
