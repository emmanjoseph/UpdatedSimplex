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

const Modal = ({ isOpen, onClose, content }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 duration-500 px-4">
      <div className="bg-white dark:bg-[#1a1a1a] p-6 lg:p-7 rounded-xl max-w-screen-md w-full relative flex flex-col gap-3">
      <h2 className="mt-5 bold-18 lg:bold-20 py-2">{content.name}</h2>
        <div className="shadow-xl rounded-xl min-h-[15em]">
          <Image src={Electrical} alt='image' className='h-[15rem] object-cover rounded-xl'/>
        </div>
        <div>
        <p className="regular-14 md:text-[15px] font-[400] mt-2">{content.moreInfo}</p>
        </div>
        <div className="">
          <h3 className="bold-18 lg:bold-20">Service Highlights</h3>
          <ul className="">
           {content.highlights.map((highlight,id)=>{
            return <li key={id} className='flex gap-2 items-center'>
              <FaCheck size={10}/><span className="bold-14 regular-14 md:text-[15px] font-[400]">{highlight} </span>
            </li>
           })}
          </ul>
        </div>
        
          <button onClick={onClose}
          className=" absolute top-4 right-4 p-1 rounded-full hover:bg-black/25 dark:hover:bg-white/15 duration-500 transition-all">
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
      <div className='py-10 grid md:grid-cols-2 lg:grid-cols-4 gap-3'>
        {electricalServices.map((card)=>{
        return <div key={card.name} className='shadow-lg rounded-lg p-2 flexCenter flex-col gap-2'>
          <div className='w-full bg-gray-300/10 min-h-[20vh] rounded-lg'>
            {/* <h1 className='bold-16'>{card.name}</h1> */}
          </div>

          {/* rest of the content */}
          <div className='w-full'>
            <h1 className='bold-16'>{card.name}</h1>
            <p className='regular-14 py-1'>{card.description}</p>

            <button type="button"
             onClick={() => handleLearnMoreClick(card)}
            className='regular-14 my-1 flexCenter gap-1 hover:gap-2 '
            ><p>Explore</p> <FaChevronRight/></button>
          </div>
          
          
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
