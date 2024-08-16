'use client'

import React from 'react'
import { motion } from 'framer-motion'
import TailwindButton from './ui/TailwindButton'
import { FaChevronRight } from "react-icons/fa6";
import Image from 'next/image';
import internetImg from '@/public/internet.jpg'


const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
}

const FeaturedServices = () => {
  return (
    <div className='max-container padding-container py-14 flex flex-col items-center border-b'>
      <div className="my-6 flexCenter flex-col gap-1 text-center">
       <h1 className="bold-32 lg:bold-40 py-1">Featured <span className="bg-gradient-to-r from-sky-400 via-red-600 to-indigo-500 bg-clip-text text-transparent">Services</span></h1>
       <p className="regular-14 md:regular-16 text-black dark:text-gray-200">
          Our wide range of services are designed to meet all your technological and design needs.
       </p>
     </div>

     {/* internet provision */}
     <div className='py-24 flex items-center flex-col lg:flex-row gap-10 w-full'>
      <div className='lg:w-1/2'>
      <h1 className='bold-20 bg-gradient-to-r from-sky-400 via-red-600 to-indigo-500 bg-clip-text text-transparent'>Internet Provision</h1>
      <h2 className='bold-32 max-w-xl my-3'>High-speed and reliable internet services to keep you connected</h2>
      <p className='regular-14 lg:regular-16 max-w-xl text-black dark:text-gray-300'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum quis quam beatae libero ducimus quaerat quasi dolore quo eum! Velit, voluptatibus nesciunt. Neque, architecto ut.</p>

      <TailwindButton
        icon={<FaChevronRight size={20}/>}
        text='Explore'
        className='mt-10 px-5 py-2 regular-16 hover:gap-4 duration-700 transition-all'
      />
      </div>

      <motion.div
        className='lg:w-1/2'
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        transition={{ duration: 0.5,delay:0.2 }}
      >
        <Image
          src={internetImg} alt='internetImg'
          className='w-full h-[400px] object-cover'
        />
      </motion.div>
     </div>

     <div className='py-24 flex items-center flex-col lg:flex-row gap-10 w-full'>
     <motion.div
        className='lg:w-1/2'
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        transition={{ duration: 0.5,delay:0.2 }}
      >
        <Image
          src={internetImg} alt='internetImg'
          className='w-full h-[400px] rounded-xl object-cover'
        />
      </motion.div>
      <div className='lg:w-1/2'>
      <h1 className='bold-20 bg-gradient-to-r from-sky-400 via-red-600 to-indigo-500 bg-clip-text text-transparent'>Security</h1>
      <h2 className='bold-32 max-w-xl my-3'>High-speed and reliable internet services to keep you connected</h2>
      <p className='regular-14 lg:regular-16 max-w-xl text-black dark:text-gray-300'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum quis quam beatae libero ducimus quaerat quasi dolore quo eum! Velit, voluptatibus nesciunt. Neque, architecto ut.</p>

      <TailwindButton
        icon={<FaChevronRight size={20}/>}
        text='Explore'
        className='mt-10 px-5 py-2 regular-16 hover:gap-4 duration-700 transition-all'
      />
      </div>
     </div>

     <div className='py-24 flex items-center flex-col lg:flex-row gap-10 w-full'>
      <div className='lg:w-1/2'>
      <h1 className='bold-20 bg-gradient-to-r from-sky-400 via-red-600 to-indigo-500 bg-clip-text text-transparent'>Electrical Services</h1>
      <h2 className='bold-32 max-w-xl my-3'>High-speed and reliable internet services to keep you connected</h2>
      <p className='regular-14 lg:regular-16 max-w-xl text-black dark:text-gray-300'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum quis quam beatae libero ducimus quaerat quasi dolore quo eum! Velit, voluptatibus nesciunt. Neque, architecto ut.</p>

      <TailwindButton
        icon={<FaChevronRight size={20}/>}
        text='Explore'
        className='mt-10 px-5 py-2 regular-16 hover:gap-4 duration-700 transition-all'
      />
      </div>
      <motion.div
        className='lg:w-1/2'
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        transition={{ duration: 0.5,delay:0.2 }}
      >
        <Image
          src={internetImg} alt='internetImg'
          className='w-full h-[400px] rounded-xl object-cover'
        />
      </motion.div>
     </div>

     <div className='py-24 pb-36 flex items-center flex-col lg:flex-row gap-10 w-full'>
     <motion.div
        className='lg:w-1/2'
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        transition={{ duration: 0.5,delay:0.2 }}
      >
        <Image
          src={internetImg} alt='internetImg'
          className='w-full h-[400px] rounded-xl object-cover'
        />
      </motion.div>
      <div className='lg:w-1/2'>
      <h1 className='bold-20 bg-gradient-to-r from-sky-400 via-red-600 to-indigo-500 bg-clip-text text-transparent'>Backup systems and solar power</h1>
      <h2 className='bold-32 max-w-xl my-3'>High-speed and reliable internet services to keep you connected</h2>
      <p className='regular-14 lg:regular-16 max-w-xl text-black dark:text-gray-300'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum quis quam beatae libero ducimus quaerat quasi dolore quo eum! Velit, voluptatibus nesciunt. Neque, architecto ut.</p>

      <TailwindButton
        icon={<FaChevronRight size={20}/>}
        text='Explore'
        className='mt-10 px-5 py-2 regular-16 hover:gap-4 duration-700 transition-all'
      />
      </div>
     </div>

     <div>
      <TailwindButton
        icon={<FaChevronRight size={20}/>}
        text='View more'
        className='px-5 py-2 regular-16 hover:gap-4 duration-700 transition-all'
      />
     </div>
    </div>
  )
}

export default FeaturedServices
