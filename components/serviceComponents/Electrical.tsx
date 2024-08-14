import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';
import { electricalServices } from '@/app/Constants';
import { FaArrowRight,FaCheck } from 'react-icons/fa';
import { IoMdClose } from "react-icons/io";
import Electric from '@/public/electrical.jpg'


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
          <Image src={Electric} alt='image' className='h-[15rem] object-cover rounded-xl'/>
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
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="flexCenter gap-3">
        <div className="lg:w-1/2">
          <h1 className="bold-20 md:bold-32 py-2">Electrical</h1>
          <p className="regular-14 md:regular-16">
            At Simplex Technologies, we deal with high voltage cabling solutions. Our expertise spans a wide range of electrical projects, from basic home wiring to complex commercial building wiring. We also undertake customized electrical projects that cater to diverse needs, including learning institutions and corporate research projects.
          </p>
        </div>

        <div className="hidden lg:block lg:w-1/2 p-2">
          <Image
            src={Electric}
            alt="internet"
            className="w-full h-[250px] object-cover rounded-xl shadow-xl"
          />
        </div>
      </div>

      <div className="my-10 lg:my-20 grid lg:grid-cols-4 gap-10">
        {electricalServices.map((item) => (
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
              className="w-full lg:w-1/2 my-4 flex items-center gap-1 hover:gap-5  duration-150 transition-all"
              onClick={() => handleLearnMoreClick(item)}
            >
              <span className="regular-14 bg-gradient-to-r from-sky-400 via-red-600 to-indigo-500 bg-clip-text text-transparent">Learn more</span>
              <FaArrowRight size={15} />
            </button>
          </div>
        ))}
      </div>

      {modalContent && (
        <Modal isOpen={modalOpen} onClose={closeModal} content={modalContent} />
      )}
    </motion.div>
  );
};

export default Electrical;
