import React from 'react'
import { Locations } from '@/app/Constants'

import { AnimatedTooltip } from '../ui/AnimatedTooltip';
import { people } from '@/app/Constants';

import Link from 'next/link';


const Bottom = () => {
  return (
    <section
    className='max-container padding-container  text-neutral-800 dark:text-neutral-200 pt-20'
    >
      <div className='grid xl:grid-cols-4 py-24 gap-10 xl:gap-5'>
        <div className=''>
          <h1 className='text-36-bold'>Simplex</h1>
          <h1 className='text-36-bold'>Technologies</h1>
        </div>

        {/* tell */}
        <div>
        <h1 className='text-18-bold pb-3'>Quick Links</h1>
        <ul className='flex flex-col gap-2 text-14-regular'>
          <Link href='/' className='hover:font-medium hover:underline duration-150'>Back to homepage</Link>
          <li className='hover:font-medium hover:underline duration-150'>To top page</li>
        </ul>
        </div>

         {/* people */}
         <div>
          <h1 className='text-18-bold pb-3'>Our team</h1>
          <div className='flex flex-row items-center justify-start'>
            <AnimatedTooltip items={people} />            
          </div>
        </div>
        {/* locaton */}
        <div>
        <h1 className='text-18-bold pb-3'>Main Offices</h1>
        <ul className='flex flex-col gap-2'>
          {Locations.map((location)=>{
            return <span key={location.key} className='text-14-regular'>
              {location.label}
            </span>
          })}
        </ul>
        </div>
       
        
      </div>

      <div className='py-14 border-t border-neutral-800/30 dark:border-neutral-200/30 flex flex-col xl:flex-row items-center justify-between gap-9'>
        <p className='text-15-regular'><span className='text-[15px] leading-[18px] font-bold'>Email :</span> info@simplextechnologies.co.ke</p>

        <p className='text-14-regular text-center md:text-left'>Copyright © 2024 Simplex Technologies. All rights reserved</p>
      </div>
    </section>
  )
}

export default Bottom
