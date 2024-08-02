import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import CCTV from '@/public/electrical.jpg'
import { electricalServices } from '@/app/Constants'


const Electrical = () => {
  return (
    <motion.div
    initial={{opacity:0,y:50}}
    animate={{opacity:1,y:0}}
    transition={{duration:0.5,delay:0.2}}
    >
      <div className='flexCenter gap-3'>
        <div className='lg:w-1/2'>
          <h1 className='bold-20 md:bold-32 py-2'>Electrical</h1>
          <p className='regular-14 md:regular-16'>At Simplex Technologies, we deal with high voltage cabling solutions. Our expertise spans a wide range of electrical projects, from basic home wiring to complex commercial building wiring. We also undertake customized electrical projects that cater to diverse needs, including learning institutions and corporate research projects.</p>
        </div>

        <div className='hidden lg:block lg:w-1/2 p-2'>
          <Image
            src={CCTV} alt='internet'
            className='w-full h-[250px] object-cover rounded-xl shadow-xl'
          />
        </div>
      </div>

      <div className='my-10 lg:my-20 grid lg:grid-cols-4 gap-10'>
        {electricalServices.map((item)=>{
          return (
            <div 
            key={item.name}
            className='bg-white shadow-lg dark:bg-slate-400/15 rounded-xl p-6 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl'
          >
            <div className='my-12'>
              <Image
                src={item.img}
                alt={item.name}
                className='w-[40px] h-[40px] object-cover rounded-lg'
              />
            </div>
            <div>
              <h1 className='bold-16 py-2'>{item.name}</h1>
              <p className='regular-14'>{item.description}</p>
            </div>
          </div>
          
          )
        })}
      </div>
    </motion.div>
  )
}

export default Electrical