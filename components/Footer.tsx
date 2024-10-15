import { FooterLinks, Locations } from '@/app/Constants'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <section
    className='max-container padding-container  text-neutral-800 dark:text-neutral-200 pt-20'
    >
      <div className='grid xl:grid-cols-4 py-24 gap-10 xl:gap-5'>
        <div className=''>
          <h1 className='text-36-bold'>Simplex</h1>
          <h1 className='text-36-bold'>Technologies</h1>
        </div>

        {/* links */}
        <div className='flex flex-col'>
          <h1 className='text-18-bold pb-3'>Quick links</h1>
          <ul className='flex flex-col gap-2'>
          {FooterLinks.map((link)=>{
            return <Link href={link.link}
            className='text-14-regular hover:font-medium hover:underline duration-150 transition-all'
            >{link.label}</Link>
          })}
          </ul>
         
        </div>

        {/* tell */}
        <div>
        <h1 className='text-18-bold pb-3'>Call us</h1>
        <ul className='flex flex-col gap-2 text-14-regular'>
          <li>0722966576</li>
          <li>0733966576</li>
        </ul>
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

export default Footer