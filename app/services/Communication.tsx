import React from 'react';
import { motion } from 'framer-motion';
import internet from '@/public/internet.jpg';
import Image from 'next/image';
import { internetServices } from '../Constants';
import { AiOutlineUpload } from "react-icons/ai";
import { IoMdDownload } from "react-icons/io";
import { LuBadgeCheck } from "react-icons/lu";
import { MdWifiTethering } from "react-icons/md";
import { SiTicktick } from "react-icons/si";
import { MdContactSupport } from "react-icons/md";
import { IoWallet } from "react-icons/io5";

const Communication = () => {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2, duration: 1 }}
      className='flex flex-col gap-3'
    >
      <div className='flex gap-4 items-center my-4'>
        <div className='flex flex-col lg:w-1/2'>
          <h1 className='bold-20'>Internet Provision</h1>
          <p className='regular-14 md:text-[15px]'>
            Stable and fast internet connectivity is essential for business growth. We provide services according to consumption and affordability.
          </p>
        </div>
        <div className='w-1/2 hidden lg:block'>
          <Image
            src={internet}
            alt='internet'
            className='h-[200px] object-cover'
          />
        </div>
      </div>

      {/* Main packages */}
      <div className='flexCenter flex-col gap-2 my-4'>
        <h1 className='bold-20 lg:bold-32'>Main Packages</h1>
        <div className='w-full grid md:grid-cols-2 lg:grid-cols-4 gap-3'>
          {internetServices.map((card) => (
            <div
            key={card.heading}
            className='shadow-lg rounded-xl dark:border border-gray-200/20 px-4 py-6 flexCenter flex-col gap-5'>
                <h1 className='bold-18 my-2'>{card.heading}</h1>

                <div className=' w-full flex flex-col gap-5'>
                    <p className='regular-14 text-gray-700 dark:text-gray-300 flex items-center gap-4'><AiOutlineUpload size={18}/> <span>{card.uploadSpeed}</span></p>
                <p className='regular-14 text-gray-700 dark:text-gray-300 flex items-center gap-4'><IoMdDownload size={18}/> <span>{card.speed}</span></p>
                <p className='regular-14 text-gray-700 dark:text-gray-300 flex items-center gap-4'><LuBadgeCheck size={18}/> <span>{card.type}</span></p>
                <p className='regular-14 text-gray-700 dark:text-gray-300 flex items-center gap-4'><MdWifiTethering size={18}/> <span>{card.dataLimit}</span></p>
                <p className='regular-14 text-gray-700 dark:text-gray-300 flex items-center gap-4'><SiTicktick size={18}/> <span>{card.additionalFeatures}</span></p>
                <p className='regular-14 text-gray-700 dark:text-gray-300 flex items-center gap-4'><MdContactSupport size={18}/> <span>{card.customerSupport}</span></p>
               
                </div>

                <motion.button
                
                className='px-3 py-2 bg-black text-white rounded-full regular-14 dark:bg-white dark:text-black'>{card.price}</motion.button>

            </div>
          ))}
        </div>
      </div>

    {/* Corporate Package */}
<div className='my-7 grid lg:grid-cols-3 gap-16 shadow-lg py-24 px-5 lg:px-10 rounded-xl border dark:border-gray-200/20'>
  {/* Left Column */}
  <div>
    <h1 className='bold-20 lg:bold-52 my-2'>Corporate Package</h1>
    <p className='regular-14 lg:text-[15px] w-full text-justify leading-tight'>
      Our Corporate Package is designed for businesses that need robust and scalable internet solutions. Consists of internet speeds of above 20 Mbps.
    </p>
  </div>

  {/* Middle Column */}
  <div>
    <ul className='list-disc list-inside flex flex-col gap-1'>
      <li className='regular-14 lg:text-[15px]'>Fast syncing with cloud services, ensuring data is backed up and accessible in real-time.
</li>
      <li className='regular-14 lg:text-[15px]'> Perfect for remote work, allowing for video conferencing, cloud storage, and simultaneous high-bandwidth activities.
</li>
      <li className='regular-14 lg:text-[15px]'>Priority support with 24/7 availability</li>
      <li className='regular-14 lg:text-[15px]'>Dedicated account manager</li>
      <li className='regular-14 lg:text-[15px]'>Customizable internet plans</li>
      <li className='regular-14 lg:text-[15px]'>Advanced security features</li>
    </ul>
  </div>

  {/* Right Column */}
  <div className='flexCenter flex-col gap-4'>
    {/* <Image src='/path/to/image.jpg' alt='Corporate Package' className='object-cover' /> */}
    <motion.button
      className='px-4 py-2 bg-blue-500 text-white rounded-full regular-14'
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      Learn More
    </motion.button>
  </div>
</div>

    </motion.div>
  );
};

export default Communication;
