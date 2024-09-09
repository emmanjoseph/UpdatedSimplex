'use client'
import { motion } from 'framer-motion'
import React, { useState } from 'react'
import electrical from '@/public/electrical.jpg'
import { electricalFAQs, electricalServices } from '../Constants'
import { FaCheck, FaChevronRight } from 'react-icons/fa'
import { IoMdClose } from 'react-icons/io'
import Image, { StaticImageData } from 'next/image';
import { GiSmartphone } from "react-icons/gi";



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
import { FaCalendar, FaPhone, FaStar } from 'react-icons/fa6'
import { toast } from '@/components/ui/use-toast'
import Faq from '@/components/serviceComponents/Faq'

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
        className="bg-white dark:bg-[#1a1a1a] rounded-xl max-w-screen-lg w-full  relative flex flex-col md:flex-col lg:flex-row gap-3 animate-slideIn"
        tabIndex={-1}
      >

        {/* Image Area */}
        <div className="lg:w-2/5 relative shadow-xl min-h-[5em] rounded-t-xl lg:rounded-l-xl  overflow-hidden">
          <div className='absolute h-full w-full bg-gradient-to-b from-black to-black/30 lg:bg-gradient-to-r '></div>
          <Image 
            src={content.img} 
            alt='' 
            className='w-full h-[250px] lg:h-[500px] object-cover rounded-t-xl lg:rounded-l-xl'
          />
          <div className="absolute top-4 left-4 text-white z-10 flex items-center h-full p-2">
            <h1 className='bold-20 lg:hidden'>{content.name}</h1>
          </div>
        </div>

        {/* Description */}
        <div className='lg:w-3/5 px-4 lg:px-6 py-4  flex flex-col justify-center'>
        <div className='my-2'>
        <h2 id="modal-title" className="hidden lg:block mt-5 bold-18 lg:bold-20">{content.name}</h2>
        <p className="text-sm md:regular-14 dark:text-gray-200 mt-3 lg:w-[95%]">{content.moreInfo}</p>
        </div>
         

          {/* Highlights */}
          <div className="my-2">
            <h3 className="bold-16">Service Highlights</h3>
            <ul className="">
              {content.highlights.map((highlight, id) => (
                <li key={id} className='flex gap-2 items-center'>
                  <FaCheck size={10} className='text-blue-500'/><span className="text-sm lg:regular-14 font-[400] dark:text-gray-200">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* stars */}
          <div className='mt-2 gap-2'>
            <span className='bold-16 py-2'>Overall Rating</span>
            <div className='flex gap-1 text-yellow-400'>
              <FaStar size={14}/>
              <FaStar size={14}/>
              <FaStar size={14}/>
              <FaStar size={14}/>
              <FaStar size={14}/>
            </div>
          </div>

          {/* bottom */}
          <div className='lg:w-[96%] flex items-center gap-3 lg:flexEnd pt-1'>
            
          <button 
              className="w-full lg:w-2/6 px-4 py-3 bg-gray-700 text-white rounded-3xl hover:bg-blue-700 transition duration-300 flexCenter regular-14 gap-2 mt-4"
            >
              <p>Contact us</p>
              {/* <FaPhone size={15}/> */}
            </button>
          <button 
           onClick={() => toast({
            title:'Hello user',
            description:'System under maintenance use contacts instead'
          })}
              className="w-full px-4 py-3 bg-blue-600 text-white rounded-3xl hover:bg-blue-700 transition duration-300 flexCenter regular-14 gap-2 mt-4"
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
          className="absolute top-4 right-4 p-1 rounded-full bg-red-500 text-white duration-500 transition-all"
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
      <div className='py-10 lg:py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-5'>
        {electricalServices.map((card)=>{
        return <div 
        key={card.name} 
        className='shadow-lg hover:shadow-2xl duration-200 transition-all rounded-xl dark:shadow-none dark:border dark:border-gray-200/20 flex flex-col gap-2 h-full'>
        
        {/* Fixed height for image/content area */}
        <div className='w-full bg-gray-300/10 h-48 rounded-t-xl flex items-center justify-center'>
         <Image src={card.img} alt='image'
         className='w-full h-full object-cover rounded-t-xl'
         />
        </div>
      
        {/* Uniform text content */}
        <div className='w-full flex flex-col justify-between p-4'>
          <div>
            <h1 className='bold-16'>{card.name}</h1>
            <p className='text-xs lg:regular-14 py-1 line-clamp-3'>{card.description}</p>
          </div>
      
          
        </div>
        {/* Button */}
        <button 
            type="button"
            onClick={() => handleLearnMoreClick(card)}
            className='text-[14px] text-white bg-blue-500 absolute float-end m-5 p-3 hover:p-5 hover:text-[28px] hover:bg-black hover:text-white rounded-full duration-200 transition-all'
          > 
            <FaChevronRight/>
          </button>
      </div>
      
      })}
      </div>
      {modalContent && (
        <Modal isOpen={modalOpen} onClose={closeModal} content={modalContent} />
      )}
      
      <Faq faqs={electricalFAQs}/>
    </motion.div>
  )
}

export default Electrical
