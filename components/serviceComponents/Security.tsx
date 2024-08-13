'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Image, { StaticImageData } from 'next/image'
import CCTV from '@/public/cctv.jpg'
import { securityServices } from '@/app/Constants'
import { FaArrowRight, FaCheck } from 'react-icons/fa'
import { IoMdClose } from 'react-icons/io'


interface SecurityService{
  name:string;
  description:string;
  img:StaticImageData;
  moreInfo:string;
  highlights:string
}

interface ModalProps{
  isOpen:boolean;
  onClose:()=> void;
  content:SecurityService
}

const Modal = ({isOpen,onClose,content}:ModalProps)=>{
if (!isOpen) return null;

return (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 duration-500 px-4">
  <div className="bg-white dark:bg-[#1a1a1a] p-6 lg:p-7 rounded-xl max-w-screen-md w-full relative flex flex-col gap-3">
  <h2 className="bold-16 py-2">{content.name}</h2>
    <div className="shadow-xl rounded-xl min-h-[12rem]">
      <div className="flex justify-center">
      </div>
    </div>
    <div>
    <p className="regular-14 md:text-[15px] font-[400] mt-2 text-gray-700 dark:text-gray-300">{content.moreInfo}</p>
    </div>
    <div className="">
      <h3 className="bold-16">Service Highlights</h3>
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
)
}

const Security = () => {

  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<SecurityService | null>(null);

  const handleLearnMoreClick = (item: SecurityService) => {
    setModalContent(item);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalContent(null);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className='flexCenter gap-3'>
        <div className='lg:w-1/2'>
          <h1 className='bold-20 md:bold-32 py-2'>Security</h1>
          <p className='regular-14 md:regular-16'>At Simplex Technologies, we specialize in providing comprehensive security solutions to meet the evolving needs of our clients. Explore our specialized security services below:</p>
        </div>

        <div className='hidden lg:block lg:w-1/2 p-2'>
          <Image
            src={CCTV} alt='internet'
            className='w-full h-[250px] object-cover rounded-xl shadow-xl'
          />
        </div>
      </div>

      <div className='my-10 lg:my-20 grid lg:grid-cols-4 gap-10'>
        {securityServices.map((item) => {
          return (
            <div
            key={item.name}
            className="bg-white shadow-lg dark:bg-slate-400/15 rounded-xl p-6 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl grid grid-rows-2 cursor-pointer"
          >
            <div className="my-4">
              <Image
                src={item.img}
                alt={item.name}
                className="w-[40px] h-[40px] object-cover rounded-lg"
              />
            </div>
            <div>
              <h1 className="bold-16 py-2">{item.name}</h1>
              <p className="regular-14">{item.description}</p>
            </div>
            <button
              className="w-full lg:w-1/2 my-4 flex items-center gap-1 hover:gap-5 text-indigo-500 duration-150 transition-all"
              onClick={()=> handleLearnMoreClick(item)}
            >
              <span className="regular-14">Learn more</span>
              <FaArrowRight size={18} />
            </button>
          </div>
          
          )
        })}
      </div>
      {modalContent && (
        <Modal isOpen={modalOpen} onClose={closeModal} content={modalContent} />
      )}
    </motion.div>
  )
}

export default Security
