'use client'
import React from 'react';
import { FooterLinks, Locations } from '@/app/Constants';
import { RiMapPin3Fill } from "react-icons/ri";
import { AnimatedTooltip } from './ui/AnimatedTooltip';
import UserImg from '@/public/user.jpg';

const people = [
  {
    id: 1,
    name: "Moses Muia",
    designation: "Manager",
    image: UserImg.src,
  },
  {
    id: 2,
    name: "Moses Waithaka",
    designation: "Technical Support",
    image: UserImg.src,
  },
  {
    id: 3,
    name: "Jane Smith",
    designation: "Data Scientist",
    image: UserImg.src,
  },
  {
    id: 4,
    name: "Lawrence Kinyua",
    designation: "Technical Support",
    image: UserImg.src,
  },
  {
    id: 5,
    name: "Mary Wanjiru",
    designation: "Technical Support",
    image: UserImg.src,
  },
];


const Footer = () => {
  return (
    <div className='max-container padding-container mt-8 py-10 lg:py-20'>
      <div className='max-w-full grid md:grid-cols-2 gap-10 pb-28 border-b border-gray-300'>
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
          <div className='flex flex-row items-center justify-start mt-5'>
            <AnimatedTooltip items={people} />            
          </div>
        </div>
        <div className='grid md:grid-cols-3 gap-8'>
          {FooterLinks.map((column) => (
            <div key={column.key} className='flex flex-col gap-2'>
              <h1 className='bold-18 md:bold-20'>{column.title}</h1>
              <ul className='list-none'>
                {column.links.map((link, index) => (
                  <li key={index}>
                    <a href={link.link} className='text-primary regular-14 hover:underline'>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className='flex flex-col md:flex-row items-center justify-between mt-10 gap-3'>
        <p className='regular-14'>Email: info@simplextechnologies@co.ke</p>
        <p className='regular-14 text-center md:text-left'>Copyright © 2024 Simplex Technologies. All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
