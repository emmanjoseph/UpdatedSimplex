'use client'
import React from 'react';
import { FlipWords } from './ui/FlipWords';
import { AnimatedTooltip } from './ui/AnimatedTooltip';
import { people } from '@/app/Constants';
import Commercial from '@/public/commercialBuilding.jpg'
import Internet from '@/public/router.jpg'
import Fence from '@/public/electricfence.jpg'
import Image from 'next/image';
import { GlowingStarsBackgroundCard, GlowingStarsDescription, GlowingStarsTitle } from './ui/glowing-stars';
import { FaArrowRight } from 'react-icons/fa6';
import Link from 'next/link';
import { motion } from 'framer-motion';


const Hero = () => {
  return (

    <div className="w-full dark:bg-black bg-white  dark:bg-grid-white/[0.1] bg-grid-black/[0.1] relative">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"/>
      <div className='w-full h-[90vh] lg:h-full max-container padding-container flex items-center justify-center  gap-4 py-28'>
       <div className='lg:w-1/2 flex flex-col'>
       <div className='flex flex-row items-center justify-start my-4'>
            <AnimatedTooltip items={people} />            
          </div>
         <h1 className='bold-40 md:bold-66 leading-tight'>Comprehensive<br />
         <FlipWords words={['Communication','Electrical','Security']}/> <br />
         Solutions</h1>
         <p className='w-full my-4 regular-14 md:regular-16  xl:max-w-[680px] leading-snug tracking-normal text-black dark:text-gray-200'>
               We provide top-notch solutions tailored to meet your business needs. 
             From infrastructure management to your security, our expert team ensures 
             your technology operates at its best, driving your success forward.'
         </p>

         <div className="mt-9 flex flex-col lg:flex-row">
          <Link href='./FeaturedServices.tsx'>
          <button className="relative inline-flex h-12  overflow-hidden rounded-lg p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 ">
           <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
           <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
             <p>Explore more</p> 
           </span>
         </button>
          </Link> 
         </div>       
       </div>

       <motion.div
       initial={{opacity:0,y:50}}
       animate={{opacity:1,y:0}}
       transition={{duration:2,delay:0.2}}
       className='w-1/2  hidden lg:grid grid-rows-2 gap-3 z-10'>
        <div className='grid grid-cols-3 gap-3 h-1/2'>
          <Image src={Fence} alt='hero1' className='rounded-lg h-[350px] object-cover'/>
          <Image src={Commercial} alt='hero1' className='rounded-lg object-cover h-[350px] col-span-2'/>
        </div>
        <div className='rounded-lg grid grid-cols-2 gap-3 h-1/2'>
          <div>
            <Image src={Internet} alt='internet' className='rounded-lg h-full object-cover'/>
          </div>
          <div>
          <motion.div 
          initial={{opacity:0,y:50}}
          animate={{opacity:1,y:0}}
          transition={{duration:2,delay:0.4}}
          className="flex items-center justify-center antialiased">
      <GlowingStarsBackgroundCard>
        <GlowingStarsTitle>View more about us</GlowingStarsTitle>
        <div className="flex justify-between items-end">
          <GlowingStarsDescription>
            Explore more about us
          </GlowingStarsDescription>
          <div className="h-8 w-8 rounded-full bg-[hsla(0,0%,100%,.1)] flex items-center justify-center">
            <Link href='/about' className='cursor-pointer'> <FaArrowRight size={20}/></Link>
          </div>
        </div>
      </GlowingStarsBackgroundCard>
    </motion.div>

          </div>
        </div>
       </motion.div>
       </div>
    </div>
  );
}

export default Hero;
