'use client'
import { NAV_LINKS } from '@/app/Constants';
import React, { useState } from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import { IoMdMenu } from 'react-icons/io';
import { AiOutlineClose } from 'react-icons/ai';
import { motion } from 'framer-motion';
import { ThemeToggleButton } from './ThemeToggleButton';
import Link from 'next/link';

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleClick = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <div className='flexBetween max-container padding-container relative py-5'>
      <div className='flexCenter gap-20'>
        <h1 className='bold-20'>Simplex</h1>
        <ul className='hidden md:flex gap-7'>
          {NAV_LINKS.map((link) => (
            <li key={link.key} className='regular-14'>
              <Link href={link.href} className=' hover:text-indigo-500 transition-all duration-200'>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className='hidden lg:flex gap-3'>
      <ThemeToggleButton/>
      <button className=" hidden md:flexCenter gap-1 px-4 py-2  border border-black bg-white text-black text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200 rounded-full">
        <AiOutlineUser />
        <span className='regular-14'>login</span>
</button>
      </div>
      
      
      <div className='md:hidden' onClick={handleClick}>
        <IoMdMenu className='text-2xl cursor-pointer' />
      </div>

      {/* mobile menu */}
      <motion.div
        initial={{ x: '200%' }}
        animate={{ x: openMenu ? '0%' : '100%' }}
        transition={{ duration: 0.5 }}
        className={`absolute top-0 left-0 w-full h-screen bg-white dark:bg-black/90 z-10 px-3 py-6 md:hidden`}
      >
        <div className='w-full h-full flex flex-col gap-10'>
          <div className='flexBetween'>
            <h1 className='bold-18'>Simplex</h1>

            <div className='flex items-center gap-2'>
               <ThemeToggleButton/>
               <AiOutlineClose size={25} onClick={handleClick} className='cursor-pointer' />
            </div>
           
          </div>
          <ul className='flex flex-col gap-7'>
            {NAV_LINKS.map((link) => (
              <li key={link.key} className='regular-16'>
                 <Link href={link.href} className=' hover:text-indigo-500 transition-all duration-200'>
                {link.label}
              </Link>
              </li>
            ))}
          </ul>
          
          <button className='flexCenter gap-1 bg-black dark:bg-white px-6 py-3 text-white dark:text-black rounded-full'>
            <AiOutlineUser />
            <span className='regular-14'>login</span>
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Navbar;
