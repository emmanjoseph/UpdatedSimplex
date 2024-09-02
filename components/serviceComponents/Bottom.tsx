import React from 'react'
import { Locations } from '@/app/Constants'
import { RiMapPin3Fill } from "react-icons/ri";
import { AnimatedTooltip } from '../ui/AnimatedTooltip';
import { people } from '@/app/Constants';
import TailwindButton from '../ui/TailwindButton';
import { FaChevronLeft } from 'react-icons/fa';
import Link from 'next/link';


const Bottom = () => {
  return (
    <div className='max-container padding-container'>
      <div className='my-10 md:my-20 pb-24 border-b grid lg:grid-cols-2 gap-5 lg:gap-0'>

        <div className='flex flex-col gap-4'>
        <div>
            <h1 className='bold-32 md:bold-40'>Simplex</h1>
            <h1 className='bold-32 md:bold-40'>Technologies</h1>
          </div>

          {Locations.map((location) => (
            <div key={location.key} className='flex gap-2 regular-14 items-center'>
              <p><RiMapPin3Fill/></p>
              <p>{location.label}</p>
            </div>
          ))}
        </div>
        <div className='flex flex-col lg:items-end gap-7 mt-5 lg:mt-0'>
        {/* <div className='flex flex-row items-center justify-start mt-5'>
          <AnimatedTooltip
          items={people}
          />
        </div> */}

        <div className='flex lg:flex-row flex-col gap-2'>
          <Link href="/"><TailwindButton
          className='px-3 py-2'
          text='back to homepage'
          icon=<FaChevronLeft/>
          /></Link>
        </div>
        </div>
       
        
      </div>
      <div className='flex flex-col md:flex-row items-center justify-between my-10 gap-3'>
        <p className='regular-14'>Email: info@simplextechnologies@co.ke</p>
        <p className='regular-14 text-center md:text-left'>Copyright © 2024 Simplex Technologies. All rights reserved</p>
      </div>
    </div>
  )
}

export default Bottom
