'use client'
import React, { useState } from 'react'
import dynamic from 'next/dynamic'
import { motion, AnimatePresence } from 'framer-motion'
import TailwindButton from '../ui/TailwindButton'

// Dynamic import of components for better performance
const Communication = dynamic(() => import('./Communication'))
const Security = dynamic(() => import('./Security'))
const Electrical = dynamic(() => import('./Electrical'))

const Medium = () => {
    const [selectedItem, setSelectedItem] = useState(1);
    const category = [
        {id: 1, title: 'Communication'},
        {id: 2, title: 'Security'},
        {id: 3, title: 'Electrical'},
    ]

    return (
        <div className='max-container padding-container mt-6'>
            <div className='flex items-center justify-between'>
                <h1 className='hidden lg:block bold-18'>Category</h1>
                <div className='flex justify-between gap-2 lg:gap-6'>
                    {category.map((category) => (
                        <TailwindButton
                            key={category.id}
                            text={category.title}
                            className={`text-sm px-3 py-2 ${selectedItem === category.id ? 'bg-blue-500 text-white border-none' : 'bg-none text-black'}`}
                            onClick={() => setSelectedItem(category.id)}
                        />
                    ))}
                </div>
            </div>
            <div className='my-6'>
                <AnimatePresence mode='wait'>
                    {selectedItem === 1 && (
                        <motion.div
                            key="communication"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 50 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Communication />
                        </motion.div>
                    )}
                    {selectedItem === 2 && (
                        <motion.div
                            key="security"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 50 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Security />
                        </motion.div>
                    )}
                    {selectedItem === 3 && (
                        <motion.div
                            key="electrical"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 50 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Electrical />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    )
}

export default Medium
