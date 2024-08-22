import { NAV_LINKS } from '@/app/Constants'
import Link from 'next/link'
import React from 'react'
import { ThemeToggleButton } from './ThemeToggleButton'

const Navbar = () => {
  return (
    <div className='w-full absolute top-0 left-0  z-10 bg-white dark:bg-black/20'>
        <div className='max-container padding-container py-5 flexBetween'>
            <div className='flexCenter gap-24'>
            <h1 className='bold-20 '>Simplex</h1>
            <div className='hidden lg:flexCenter gap-5'>
                {NAV_LINKS.map((link)=>{
                    return <Link key={link.key} href={link.href}
                    className='text-[14px]'
                    >
                        {link.label}
                    </Link>
                })}
            </div>
            </div>
           
          <ThemeToggleButton/>
           
        </div>
    </div>
  )
}

export default Navbar