import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import internet from '@/public/internet.jpg'
import { internetServices } from '@/app/Constants'
import { FiUploadCloud } from "react-icons/fi";
import { TfiDownload } from "react-icons/tfi";
import { TiTick } from "react-icons/ti";
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
        <div className='flex items-center gap-3'>
        <div className='lg:w-1/2'>
            <h1 className='bold-20 md:bold-32 py-2'>Internet Privision</h1>
            <p className='regular-14 md:regular-16'>Stable and fast internet connectivity is essential for business growth . We provide services according to consumption and ability pocket wise</p>
        </div>
        <div className='hidden lg:block lg:w-1/2 p-2'>
            <Image
            src={internet} alt='internet'
            className='w-full h-[250px] object-cover rounded-xl shadow-xl'
            />
        </div>
        </div>

        {/* wifi cards */}
        <div className='my-10 lg:my-20 flexCenter flex-col'>
            <h2 className='bold-18 lg:bold-20'>Our main packages</h2>
            <div className='w-full mt-4 grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-6'>
                {internetServices.map((card)=>{
                    return (
                        <div className='rounded-lg bg-white dark:bg-slate-400/15 shadow flexCenter flex-col p-4'
                        key={card.heading}
                        >
                            <h1 className='bold-18 p-5 border-b mb-3'>{card.heading}</h1>

                            <div className='w-full flex flex-col gap-5 justify-between mb-7'>
                            <span className='regular-14 md:text-[15px] font-[400] flex items-center gap-3 '><TfiDownload className='text-indigo-500'/>{card.speed}</span>
                            <span className='regular-14 md:text-[15px] font-[400] flex items-center gap-3 '><FiUploadCloud className='text-indigo-500'/>{card.uploadSpeed}</span>
                            <span className='regular-14 md:text-[15px] font-[400] flex items-center gap-3 '><LuClock12 className='text-indigo-500'/>{card.dataLimit}</span>
                            <span className='regular-14 md:text-[15px] font-[400] flex items-center gap-3 '><LuBadge className='text-indigo-500'/>{card.type}</span>
                            <span className='regular-14 md:text-[15px] font-[400] flex items-center gap-3 '><TiTick className='text-indigo-500'/>{card.additionalFeatures}</span>
                            <span className='regular-14 md:text-[15px] font-[400] flex items-center gap-3 '><MdOutlineSupportAgent className='text-indigo-500'/>{card.customerSupport}</span>
                            </div>

                            <button className='px-7 py-3 bg-black rounded-3xl text-white regular-14'>
                                {card.price}
                            </button>
                            
                        </div>
                    )
                })}
            </div>
            </div>    

            <div className='flex flex-col gap-4 md:gap-0 md:flex-row justify-between
             rounded-lg shadow-lg py-10 px-6 lg:px-8 bg-white dark:bg-slate-400/15'>
            <div className='w-full md:w-2/4 flex flex-col justify-center'>
            <h1 className='bold-18 lg:bold-40 py-3'>Corporate Package</h1>
            <p className='regular-16 py-2'>Consists of internet speeds higher than 20Mbps</p>
            <p className='text-[15px] font-[400] flex items-center gap-2'><TiTick/><span>Minimal delay in data transmission.</span></p>
            <p className='text-[15px] font-[400] flex items-center gap-2'><TiTick/><span>Has the ability to handle multiple high-bandwidth activities at once.</span></p>
            <p className='text-[15px] font-[400] flex items-center gap-2'><TiTick/><span>Reduces wait time for downloads, uploads, and data synchronization.</span></p>
            </div>
           
         
            <div className='w-full lg:w-2/4 flex flex-col gap-5 justify-between mb-7'>
                            <span className='regular-14 md:text-[15px] font-[400] flex items-center gap-3 '><TfiDownload className='text-indigo-500'/>Download speed upto 100 Mbps</span>
                            <span className='regular-14 md:text-[15px] font-[400] flex items-center gap-3 '><FiUploadCloud className='text-indigo-500'/>Upload speed upto 100 Mbps</span>
                            <span className='regular-14 md:text-[15px] font-[400] flex items-center gap-3 '><LuClock12 className='text-indigo-500'/>Unlimited data</span>
                            <span className='regular-14 md:text-[15px] font-[400] flex items-center gap-3 '><LuBadge className='text-indigo-500'/>Ultra Premium max</span>
                            <span className='regular-14 md:text-[15px] font-[400] flex items-center gap-3 '><TiTick className='text-indigo-500'/>Free router installation</span>
                            <span className='regular-14 md:text-[15px] font-[400] flex items-center gap-3 '><MdOutlineSupportAgent className='text-indigo-500'/>24/7 Phone and Email support</span>
                            </div>
            </div>  
    </motion.div>
  )
}

export default Communication