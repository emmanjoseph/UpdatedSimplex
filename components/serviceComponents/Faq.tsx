'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FaqProps {
  faqs: { question: string; answer: string }[];
}

const Faq: React.FC<FaqProps> = ({ faqs }) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="py-8">
      {/* <h1 className="bold-20 py-2 text-gray-800 dark:text-gray-200">FAQ</h1> */}
      <div className="grid lg:grid-cols-2 gap-2">
        {faqs.map((faq, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.2 }}
            className="bg-white shadow-lg dark:bg-transparent p-4 rounded-md dark:border border-gray-200/20"
          >
            <div 
              className="text-[16px] font-[600] dark:text-gray-200 cursor-pointer flexBetween" 
              onClick={() => toggleExpand(index)}
            >
              <p>{faq.question}</p>
              <button>
                {expandedIndex === index ? <ChevronUp /> : <ChevronDown />}
              </button>
            </div>
            {expandedIndex === index && (
              <motion.p
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{duration:0.3}}
                className="regular-14 text-gray-700 dark:text-gray-400 mt-2 lg:w-11/12"
              >
                {faq.answer}
              </motion.p>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
