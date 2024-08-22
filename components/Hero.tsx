'use client'
import React from 'react';

const Hero = () => {
  return (

    <div className=" w-full h-[100vh] dark:bg-black bg-white  dark:bg-grid-white/[0.1] bg-grid-black/[0.1] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"/>
      <div className='w-full h-full max-container padding-container flex items-center justify-center  gap-4 py-36'>
       <div className='lg:w-1/2 flex flex-col gap-2'>
         <h1 className='bold-40 md:bold-66 my-4  '>Comprehensive<br />Solutions</h1>
         <p className='w-full regular-14 md:regular-16  xl:max-w-[700px] leading-snug tracking-normal text-black dark:text-gray-200'>
               We provide top-notch IT solutions tailored to meet your business needs. 
             From infrastructure management to your security, our expert team ensures 
             your technology operates at its best, driving your success forward.'
         </p>
         <button className="w-full lg:w-1/2 relative inline-flex h-12  overflow-hidden rounded-lg p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 mt-9">
           <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
           <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
             Explore More
           </span>
         </button>
       </div>

       <div className='w-1/2 h-full hidden lg:grid gap-2'>
        <div className='border rounded-lg '>
          pic
        </div>
        <div className='border rounded-lg '>
          pic
        </div>
       </div>
       </div>
    </div>
  );
}

export default Hero;
