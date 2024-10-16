'use client'
import { NAV_LINKS } from '@/app/Constants';
import Link from 'next/link';
import React, { useState } from 'react';
import { ThemeToggleButton } from './ThemeToggleButton';
// import { GrClose, GrMenu } from 'react-icons/gr';
import { motion, AnimatePresence } from 'framer-motion';
import { GrClose, GrMenu } from 'react-icons/gr';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='w-full absolute top-0 left-0 z-40 bg-white/55 dark:bg-black/55 backdrop-blur-md'>
      <div className='max-container padding-container py-4 flexBetween'>

          <h1 className='text-18-bold'>Simplex</h1>
          <div className='hidden lg:flexCenter gap-5'>
            {NAV_LINKS.map((link) => (
              <Link
                key={link.key}
                href={link.href}
                className='text-14-medium p-1 hover:bg-gray-300/30 rounded-lg  duration-150 transition-colors'
              >
                {link.label}
              </Link>
            ))}
          </div>
       

        <div className='flex gap-2 items-center regular-14'>
          {/* <a href="" className='text-[14px] p-1 hover:bg-gray-300/30 rounded-lg'>Facebook</a> */}
          {/* <a href="" className='text-[14px] p-1 hover:bg-gray-300/30 rounded-lg'>Whatsapp</a> */}
        <ThemeToggleButton />
   <button className='lg:hidden' onClick={toggleMenu}>
  {isMenuOpen ? <GrClose size={20} /> : <GrMenu size={20} />}
</button>
        </div>
        
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className='absolute top-0 left-0 dark:bg-black/65 dark:text-white backdrop-blur-lg w-full h-screen z-50 p-5 text-black bg-white/65'
            initial={{ opacity: 0, x: '-100%' }}
            animate={{ opacity: 1, x: '0%' }}
            exit={{ opacity: 0, x: '-100%' }}
            transition={{ duration: 0.3 }}
          >
            <button className='float-right' onClick={toggleMenu}>
              <GrClose size={25} />
            </button>
            <div className='flex flex-col gap-2 py-10'>
              {NAV_LINKS.map((link) => (
                <Link
                onClick={toggleMenu}
                  key={link.key}
                  href={link.href}
                  className='text-[14px] hover:text-blue-500 duration-150 transition-colors'
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
