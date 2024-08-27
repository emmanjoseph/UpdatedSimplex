'use client'
import { motion } from 'framer-motion'
import React, { useState } from 'react'
import electrical from '@/public/electrical.jpg'
import { electricalServices } from '../Constants'
import { FaCheck, FaChevronRight } from 'react-icons/fa'
import { IoMdClose } from 'react-icons/io'
import Image, { StaticImageData } from 'next/image';




interface ElectricalService {
  name: string;
  description: string;
  img: StaticImageData;
  moreInfo: string;
  highlights: string[];
}

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  content: ElectricalService;
}

import { useEffect } from 'react';
import { FaCalendar, FaPhone } from 'react-icons/fa6'
import { toast } from '@/components/ui/use-toast'

const Modal = ({ isOpen, onClose, content }: ModalProps) => {
  
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 duration-500 px-4"
      role="dialog"
      aria-labelledby="modal-title"
      aria-modal="true"
    >
      <div 
        className="bg-white dark:bg-[#1a1a1a]  rounded-xl max-w-screen-md w-full relative flex flex-col gap-3 animate-slideIn"
        tabIndex={-1}
      >

        {/* Image Area */}
        <div className="shadow-xl min-h-[5em] rounded-t-xl">
         <Image src={content.img} alt=''
         className='w-full h-[300px] object-cover rounded-t-xl'
         />
        </div>
       

        {/* Description */}
        <div className='p-6'>
        <h2 id="modal-title" className="mt-5 bold-18 lg:bold-20 py-2">{content.name}</h2>
          <p className="regular-14 md:text-[15px] font-[400]">{content.moreInfo}</p>

          {/* Highlights */}
        <div className="">
          <h3 className="bold-18">Service Highlights</h3>
          <ul className="">
            {content.highlights.map((highlight, id) => (
              <li key={id} className='flex gap-2 items-center'>
                <FaCheck size={10}/><span className="bold-14 regular-14 font-[400]">{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

          {/* Footer or additional actions */}
        <div className="my-3 w-full flex justify-between flex-col lg:flex-row  gap-3">
          <div>
            <h2 className='bold-18'>Contact us</h2>
            <ul className='flex gap-4 mt-2'>
              <li
              className='flex regular-14 gap-1 items-center'
              ><FaPhone/><p>0722966576</p></li>
              <li
              className='flex regular-14 gap-1 items-center'
              ><FaPhone/><p>0733966576</p></li>
              <li
              className='flex regular-14 gap-1 items-center'
              ><FaPhone/><p>0777966576</p></li>
            </ul>
          </div>
          <button 
            onClick={() => toast({
              title:'Hello user',
              description:'System under maintenance use contacts instaed'
            })}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 flexCenter regular-14 gap-2"
            // disabled
          >
            <p>Schedule a date</p>
            <FaCalendar size={15}/>
          </button>
        </div>
        </div>

        

        

        {/* Close Button */}
        <button 
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 p-1 rounded-full hover:bg-black/25 dark:hover:bg-white/15 duration-500 transition-all"
        >
          <IoMdClose size={20}/>
        </button>
      </div>
    </div>
  );
};



const Electrical = () => {

  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<ElectricalService | null>(null);

  const handleLearnMoreClick = (item: ElectricalService) => {
    setModalContent(item);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalContent(null);
  };


  return (
     <motion.div
    initial={{y:50,opacity:0}}
    animate={{y:0,opacity:1}}
    transition={{delay:0.2,duration:1}}
    >
      <div className='flex gap-4 items-center my-8'>
        <div className='lg:w-1/2 flex flex-col'>
        <h1 className='bold-20 my-2'>Electrical Services</h1>
         <p className="regular-14 lg:text-[15px]">
            At Simplex Technologies, we deal with high voltage cabling solutions. Our expertise spans a wide range of electrical projects, from basic home wiring to complex commercial building wiring. We also undertake customized electrical projects that cater to diverse needs, including learning institutions and corporate research projects.
          </p>
      </div>

      <div className='w-1/2 hidden lg:block'>
          <Image
            src={electrical}
            alt='electrical'
            className='h-[200px] object-cover'
          />
        </div>
      </div>

      {/* service cards */}
      <div className='py-10 grid md:grid-cols-2 lg:grid-cols-4 gap-5'>
        {electricalServices.map((card)=>{
        return <div 
        key={card.name} 
        className='shadow-lg rounded-xl dark:shadow-none dark:border dark:border-gray-200/20 flex flex-col gap-2 h-full'>
        
        {/* Fixed height for image/content area */}
        <div className='w-full bg-gray-300/10 h-48 rounded-t-xl flex items-center justify-center'>
         <Image src={card.img} alt='image'
         className='w-full h-full object-cover rounded-t-xl'
         />
        </div>
      
        {/* Uniform text content */}
        <div className='w-full flex flex-col justify-between p-5'>
          <div>
            <h1 className='bold-16'>{card.name}</h1>
            <p className='regular-14 py-1 line-clamp-3'>{card.description}</p>
          </div>
      
          
        </div>
        {/* Button */}
        <button 
            type="button"
            onClick={() => handleLearnMoreClick(card)}
            className='text-[20px] flex items-center gap-1 hover:gap-2  text-blue-500 absolute float-right m-5 hover:p-5 hover:text-[28px] hover:bg-black hover:text-white rounded-full duration-200 transition-all'
          > 
            <FaChevronRight/>
          </button>
      </div>
      
      })}
      </div>
      {modalContent && (
        <Modal isOpen={modalOpen} onClose={closeModal} content={modalContent} />
      )}
      
    </motion.div>
  )
}

export default Electrical
