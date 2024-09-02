import React from 'react';
import { motion } from 'framer-motion';
import internet from '@/public/internet.jpg';
import corporate from '@/public/Corporate.jpg';
import Image from 'next/image';
import { InternetfaqData, internetServices } from '../Constants';
import { AiOutlineUpload } from "react-icons/ai";
import { IoMdDownload } from "react-icons/io";
import { LuBadgeCheck } from "react-icons/lu";
import { MdWifiTethering } from "react-icons/md";
import { SiTicktick } from "react-icons/si";
import { MdContactSupport } from "react-icons/md";
import { IoWallet } from "react-icons/io5";
import Faq from '@/components/serviceComponents/Faq';

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
                
                className='px-3 py-2 bg-black text-white rounded-full regular-14  dark:bg-white dark:text-black dark:hover:text-white hover:text-white hover:bg-blue-500 dark:hover:bg-blue-500 duration-200 transition-all'>{card.price}</motion.button>

            </div>
          ))}
        </div>
      </div>

   {/* Corporate Package */}
   <div className='my-7 flex flex-col lg:flex-row gap-16 shadow-lg rounded-xl border dark:border-gray-200/20 relative'>
  {/* Left Column */}
  <div className='relative w-full lg:w-1/2 h-64 lg:h-auto overflow-hidden rounded-t-xl lg:rounded-l-xl lg:rounded-tr-none'>
    <Image
      src={corporate}
      alt='Corporate Package'
      className='object-cover'
      layout='fill'
    />
    <div className='absolute inset-0 bg-gradient-to-b from-black to-black/30 lg:bg-gradient-to-r'></div>
    <div className="absolute inset-0 z-10 p-4 lg:p-10 flex flex-col justify-center space-y-4 text-white">
      <h1 className='bold-20 lg:bold-40'>Corporate Package</h1>
      <p className='text-sm lg:text-[15px] font-[400] lg:w-7/12'>
        Empower your business with scalable internet solutions designed to grow with your needs. Stay connected around the clock with our industry-leading 24/7 uptime guarantee.
      </p>
    </div>
  </div>

  {/* Right Column */}
  <div className='flex flex-col px-4 py-6 lg:py-16 w-full lg:w-1/2'>

  <h1 className='bold-20 py-2'>Features</h1>
    <ul className='list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 lg:w-11/12'>
      <li className='regular-14'>Effortlessly integrate with cloud platforms for smooth, uninterrupted operations.</li>
      <li className='regular-14'>Experience lightning-fast internet speeds, tailored for high-demand tasks.</li>
      <li className='regular-14'>Access a dedicated support team ready to assist you anytime, anywhere.</li>
      <li className='regular-14'>Customize your internet plan to fit your business needs, ensuring maximum efficiency.</li>
      <li className='regular-14'>Protect your data with our advanced security features, including encrypted connections and real-time threat monitoring.</li>
      <li className='regular-14'>Connect with global clients and partners seamlessly, ensuring your business is always in touch.</li>
    </ul>

    <motion.button
      className='lg:w-5/12 mt-7 px-3 py-2 bg-black text-white rounded-full regular-14 dark:bg-white dark:text-black dark:hover:text-white hover:text-white hover:bg-blue-500 dark:hover:bg-blue-500 duration-200 transition-all'
    >
      Start Plan
    </motion.button>
  </div>
</div>

<div>
  <Faq faqs={InternetfaqData} />
</div>


    </motion.div>
  );
};

export default Communication;
