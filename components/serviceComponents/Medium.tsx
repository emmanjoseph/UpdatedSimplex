'use client'
import React, { useState } from 'react'
import dynamic from 'next/dynamic'
import Top from './Top'
import { Loader } from '@/components/Loader';

// const Communication = dynamic(()=> import('@/app/services/Communication'))
// const Security = dynamic(()=> import('@/app/services/Security'))
// const Electrical = dynamic(()=> import('@/app/services/Electrical'))

const Communication = dynamic(() => import('@/app/services/Communication'), {
  loading: () => <Loader />,
});
const Electrical = dynamic(() => import('@/app/services/Electrical'), {
  loading: () => <Loader />,
});
const Security = dynamic(() => import('@/app/services/Security'), {
  loading: () => <Loader />,
});


const Medium = () => {
    const [activeService, setActiveService] = useState('service1');

     const renderServicePage = () => {
    switch (activeService) {
      case 'service1':
        return <Communication />;
      case 'service2':
        return <Electrical />;
      case 'service3':
        return <Security />;
      default:
        return <Communication />;
    }
  }
  return (
    <div className='max-container padding-container'>

        <div className='w-full flexCenter'>
            <div className='flex gap-2'>
        <button className='px-3 py-2 rounded-full dark:bg-white dark:text-black regular-14 bg-black text-white' onClick={() => setActiveService('service1')}>Communication</button>
        <button className='px-3 py-2 rounded-full dark:bg-white dark:text-black regular-14 bg-black text-white' onClick={() => setActiveService('service2')}>Electrical</button>
        <button className='px-3 py-2 rounded-full dark:bg-white dark:text-black regular-14 bg-black text-white' onClick={() => setActiveService('service3')}>Security</button>
      </div>
        </div>
       
      <div className='my-4'>
        {renderServicePage()}
      </div>
    </div>
  )
}

export default Medium
