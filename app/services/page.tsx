import React from 'react'
import Image from 'next/image';
import internet from '@/public/router.jpg';
import { InternetfaqData, internetServices } from '../Constants';
import { AiOutlineUpload } from 'react-icons/ai';
import { IoMdDownload } from 'react-icons/io';
import { LuBadgeCheck } from 'react-icons/lu';
import { MdContactSupport, MdWifiTethering } from 'react-icons/md';
import { SiTicktick } from 'react-icons/si';
import { TiTick } from 'react-icons/ti';
import Faq from '@/components/serviceComponents/Faq';


const Services = () => {
  return (
    <div>
        {/* <Medium/> */}
        <section className='max-container padding-container mt-5'>
        <h1 className='text-36-bold'>Internet Provision</h1>
        
        <div className="lg:flex gap-4 items-center my-4 bg-gradient-to-r from-purple-500 to-purple-900 rounded-2xl relative overflow-hidden p-2 lg:p-8">
  <div className="flex flex-col lg:w-1/2 z-10 p-10">
    <p className="text-18-bold text-white">
      Stable and fast internet connectivity is essential for business growth. We provide services according to consumption and affordability.
    </p>
  </div>
  <div className="relative w-full lg:w-1/2">
    <Image
      src={internet}
      alt="internet"
      width={500}
      height={500}
      className="absolute -right-5 lg:-right-10 lg:-top-16 grayscale filter object-contain rounded-2xl z-0"
    />
  </div>
</div>

{/* main packages */}
<div className='flex flex-col gap-4 items-center mt-6 xl:mt-10'>
<h1 className='text-18-bold lg:text-24-bold text-neutral-800 dark:text-neutral-200'>Main Packages</h1>
<div className='w-full grid md:grid-cols-2 xl:grid-cols-4 gap-5'>
  {internetServices.map((card)=>{
    return   <div
    key={card.heading}
    className='shadow-lg rounded-xl dark:border border-gray-200/20 px-4 py-6 flexCenter flex-col gap-5'>
        <h1 className='text-18-bold my-2'>{card.heading}</h1>

        <div className=' w-full flex flex-col gap-5'>
            <p className='text-14-regular text-neutral-800 dark:text-neutral-200 flex items-center gap-4'><AiOutlineUpload size={18}/> <span>{card.uploadSpeed}</span></p>
        <p className='text-14-regular text-neutral-800 dark:text-neutral-200 flex items-center gap-4'><IoMdDownload size={18}/> <span>{card.speed}</span></p>
        <p className='text-14-regular text-neutral-800 dark:text-neutral-200 flex items-center gap-4'><LuBadgeCheck size={18}/> <span>{card.type}</span></p>
        <p className='text-14-regular text-neutral-800 dark:text-neutral-200 flex items-center gap-4'><MdWifiTethering size={18}/> <span>{card.dataLimit}</span></p>
        <p className='text-14-regular text-neutral-800 dark:text-neutral-200 flex items-center gap-4'><SiTicktick size={18}/> <span>{card.additionalFeatures}</span></p>
        <p className='text-14-regular text-neutral-800 dark:text-neutral-200 flex items-center gap-4'><MdContactSupport size={18}/> <span>{card.customerSupport}</span></p>
       
        </div>
       <button
        className='text-14-medium text-white bg-neutral-950 dark:text-black dark:bg-neutral-200 px-3 py-3 rounded-full'
        >{card.price}</button>
    </div>
  })}
</div>
</div>
{/* corporate package */}
<div className='bg-gradient-to-r from-rose-700 to-pink-600 text-white my-10 shadow-2xl rounded-2xl lg:flex relative overflow-hidden'>
  <div className='p-6 lg:p-10 lg:w-7/12'>
  <h1 className='bold-20 lg:bold-40'>Corporate Package</h1>
  <p className="text-[16px] font-semibold leading-[18px] py-3">
  Empower your business with scalable internet solutions designed to grow with your needs. Stay connected around the clock with our industry-leading 24/7 uptime guarantee.
  </p>

  <div className='flex flex-col py-2'>
  <ul className='space-y-2 py-2'>
    <li className='text-14-regular lg:text-15-regular flex items-center gap-1'><TiTick />Effortlessly integrate with cloud platforms for smooth, uninterrupted operations.</li>
    <li className='text-14-regular lg:text-15-regular flex items-center gap-1'><TiTick />Experience lightning-fast internet speeds, tailored for high-demand tasks.</li>
    <li className='text-14-regular lg:text-15-regular flex items-center gap-1'><TiTick />Access a dedicated support team ready to assist you anytime, anywhere.</li>
    <li className='text-14-regular lg:text-15-regular flex items-center gap-1'><TiTick />Customize your internet plan to fit your business needs, ensuring maximum efficiency.</li>
    <li className='text-14-regular lg:text-15-regular flex items-center gap-1'><TiTick />Protect your data with our advanced security features, including encrypted connections and real-time threat monitoring.</li>
    <li className='text-14-regular lg:text-15-regular flex items-center gap-1'><TiTick />Connect with global clients and partners seamlessly, ensuring your business is always in touch.</li>
  </ul>

</div>

<button
className='lg:w-[400px] text-15-regular text-white bg-black px-7 py-3 rounded-full shadow-2xl'
>Start plan</button>
  </div>
  <div className='lg:w-4/12'>
  <Image
      src='/Corporate.jpg'
      alt="internet"
      width={500}
      height={500}
      className="absolute -right-5 lg:-right-10 lg:top-20 grayscale filter object-contain rounded-2xl z-0"
    />
  </div>
 
</div>
<Faq faqs={InternetfaqData} />
  </section>
      
    </div>
  )
}

export default Services