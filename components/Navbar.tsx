'use client'
import { NAV_LINKS } from '@/app/Constants';
import Link from 'next/link';
import React, { useState } from 'react';
import { ThemeToggleButton } from './ThemeToggleButton';
import { GrClose, GrMenu } from 'react-icons/gr';
import { FaFacebook, FaWhatsapp } from "react-icons/fa";
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='w-full fixed top-0 left-0 z-40 bg-white/55 dark:bg-black/55 backdrop-blur-md'>
      <div className='max-container padding-container py-4 flexBetween'>
        <div className='flexCenter gap-24'>
          <h1 className='bold-20'>Simplex</h1>
          <div className='hidden lg:flexCenter gap-5'>
            {NAV_LINKS.map((link) => (
              <Link
                key={link.key}
                href={link.href}
                className='text-[14px] hover:text-blue-500 duration-150 transition-colors'
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className='flex gap-2 items-center regular-14'>
          <a href=""><FaWhatsapp size={20}/></a>
          <a href=""><FaFacebook size={20}/></a>
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
