'use client'
import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import Image, { StaticImageData } from 'next/image'
import cctv from '@/public/cctv.jpg'
import { securityServices } from '../Constants'
import { FaCalendar, FaCheck, FaChevronRight, FaPhone } from 'react-icons/fa6'
import { IoMdClose } from 'react-icons/io'
import { toast } from '@/components/ui/use-toast'
import { GiSmartphone } from 'react-icons/gi'



interface SecurityServices {
  name: string;
  description: string;
  img: StaticImageData;
  moreInfo: string;
  highlights: string[];
}

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  content: SecurityServices;
}

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
        className="bg-white dark:bg-[#1a1a1a] rounded-xl max-w-screen-lg w-full lg:h-3/5 relative flex flex-col md:flex-col lg:flex-row gap-3 animate-slideIn"
        tabIndex={-1}
      >

        {/* Image Area */}
        <div className="lg:w-2/5 relative shadow-xl min-h-[5em] rounded-t-xl lg:rounded-l-xl overflow-hidden">
          <div className='absolute h-full w-full bg-gradient-to-b from-black to-black/30 lg:bg-gradient-to-r rounded-t-xl lg:rounded-l-xl'></div>
          <Image 
            src={content.img} 
            alt='' 
            className='w-full h-[300px] lg:h-full object-cover rounded-t-xl lg:rounded-l-xl'
          />
          <div className="absolute top-4 left-4 text-white z-10 flex items-center h-full p-2">
            <h1 className='bold-20 lg:hidden'>{content.name}</h1>
          </div>
        </div>

        {/* Description */}
        <div className='lg:w-3/5 p-4 lg:p-6 flex flex-col justify-center'>
          <h2 id="modal-title" className="hidden lg:block mt-5 bold-18 lg:bold-32 py-2">{content.name}</h2>
          <p className="regular-14 dark:text-gray-200 my-2 w-full">{content.moreInfo}</p>

          {/* Highlights */}
          <div className="">
            <h3 className="bold-16 py-2">Service Highlights</h3>
            <ul className="">
              {content.highlights.map((highlight, id) => (
                <li key={id} className='flex gap-2 items-center'>
                  <FaCheck size={10}/><span className="regular-14 font-[400] dark:text-gray-200">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Footer or additional actions */}
          <div className='py-5  border-b dark:border-gray-200'>
            <h1 className='bold-16'>Contact us</h1>
            <ul className='flex gap-2 lg:gap-5 text-sm text-black/90 dark:text-gray-200 '>
              <li className='flex items-center gap-1'><GiSmartphone/>0722966576</li>
              <li className='flex items-center gap-1'><GiSmartphone/>0733966576</li>
              <li className='flex items-center gap-1'><GiSmartphone/>0777966576</li>
            </ul>

           
          </div>
          <div className='flex items-center gap-3 lg:flexEnd pt-5 border-t'>
            
          <button 
              onClick={() => toast({
                title:'Hello user',
                description:'System under maintenance use contacts instaed'
              })}
              className="w-full lg:w-2/6 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 flexCenter regular-14 gap-2 mt-4"
            >
              <p>Schedule a date</p>
              <FaCalendar size={15}/>
            </button>

            <button 
            onClick={onClose}
          aria-label="Close modal"
          className='block lg:hidden  px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition duration-300 flexCenter regular-14 gap-2 mt-4'
            >
              close
            </button>
          </div>
          
           
        
        </div>

        {/* Close Button */}
        <button 
          onClick={onClose}
          aria-label="Close modal"
          className="hidden lg:block absolute top-4 right-4 p-1 rounded-full hover:bg-black/25 dark:hover:bg-white/15 duration-500 transition-all"
        >
          <IoMdClose size={20}/>
        </button>
      </div>
    </div>
  );
};

const Security = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<SecurityServices | null>(null);

  const handleLearnMoreClick = (item: SecurityServices) => {
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
        <h1 className='bold-20 my-2'>Security Services</h1>
         <p className="regular-14 lg:text-[15px]">
          We specialize in providing comprehensive security solutions to meet the evolving needs of our clients. Explore our specialized security services below
          </p>
      </div>

      <div className='w-1/2 hidden lg:block'>
          <Image
            src={cctv}
            alt='cctv'
            className='h-[200px] object-cover'
          />
        </div>
      </div>

      {/* service cards */}
      <div className='py-10 lg:py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-5'>
      {securityServices.map((card)=>{
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
    </motion.div>
  )
}

export default Security
