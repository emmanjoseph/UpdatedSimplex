import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import internet from '@/public/internet.jpg'
import { internetServices } from '@/app/Constants'
import { FiUploadCloud } from "react-icons/fi";
import { TfiDownload } from "react-icons/tfi";
import { LuClock12 } from "react-icons/lu";
import { LuBadge } from "react-icons/lu";
import { MdOutlineSupportAgent } from "react-icons/md";
const Communication = () => {
  return (
    <motion.div
    initial={{opacity:0,y:50}}
    animate={{opacity:1,y:0}}
    transition={{duration:0.5,delay:0.2}}
    >
        <div className='flex items-center gap-3 shadow-lg dark:shadow-white/15 rounded-lg'>
        <div className='lg:w-1/2 p-4'>
            <h1 className='bold-20 md:bold-32 py-2'>Internet Privision Services.</h1>
            <p className='regular-14 md:regular-16'>Stable and fast internet connectivity is essential for business growth . We provide services according to consumption and ability pocket wise</p>
        </div>
        <div className='hidden lg:block lg:w-1/2 p-2'>
            <Image
            src={internet} alt='internet'
            className='w-full h-[200px] object-cover rounded-lg'
            />
        </div>
        </div>

        {/* wifi cards */}
        <div className='my-10 lg:my-20 flexCenter flex-col'>
            <h2 className='bold-18 lg:bold-20'>Our main packages</h2>
            <div className='w-full mt-4 grid md:grid-cols-4 gap-6'>
                {internetServices.map((card)=>{
                    return (
                        <div className='rounded-lg bg-white dark:bg-slate-400/15 shadow flexCenter flex-col p-5'>
                            <h1 className='bold-18 p-5 border-b mb-3'>{card.heading}</h1>

                            <div className='w-full flex flex-col gap-5 justify-between mb-7'>
                            <span className='regular-14 md:text-[15px] font-[400] flex items-center gap-3 '><TfiDownload/>{card.speed}</span>
                            <span className='regular-14 md:text-[15px] font-[400] flex items-center gap-3 '><FiUploadCloud/>{card.uploadSpeed}</span>
                            <span className='regular-14 md:text-[15px] font-[400] flex items-center gap-3 '><LuClock12/>{card.dataLimit}</span>
                            <span className='regular-14 md:text-[15px] font-[400] flex items-center gap-3 '><LuBadge/>{card.type}</span>
                            <span className='regular-14 md:text-[15px] font-[400] flex items-center gap-3 '><FiUploadCloud/>{card.additionalFeatures}</span>
                            <span className='regular-14 md:text-[15px] font-[400] flex items-center gap-3 '><MdOutlineSupportAgent/>{card.customerSupport}</span>
                            </div>

                            <button className='px-7 py-3 bg-black rounded-2xl text-white'>
                                {card.price}
                            </button>
                            
                        </div>
                    )
                })}
            </div>
            </div>      
    </motion.div>
  )
}

export default Communication