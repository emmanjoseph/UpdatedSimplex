'use client'
import React, { useState, Suspense } from 'react'
import dynamic from 'next/dynamic'
import { motion, AnimatePresence } from 'framer-motion'
import TailwindButton from '../ui/TailwindButton'

// Dynamic import of components for better performance
const Communication = dynamic(() => import('./Communication'), { suspense: true })
const Security = dynamic(() => import('./Security'), { suspense: true })
const Electrical = dynamic(() => import('./Electrical'), { suspense: true })

const Medium = () => {
    const [selectedItem, setSelectedItem] = useState(1);
    const category = [
        { id: 1, title: 'Communication', component: Communication },
        { id: 2, title: 'Security', component: Security },
        { id: 3, title: 'Electrical', component: Electrical },
    ]

    const SelectedComponent = category.find(cat => cat.id === selectedItem)?.component;

    return (
        <div className='max-container padding-container mt-6'>
            <div className='flex items-center justify-center z-20'>
                <div className='flex justify-between gap-2'>
                    {category.map((category) => (
                        
                        <button
                            key={category.id}
                            className={`text-sm px-3 py-2 ${selectedItem === category.id ? 'bg-blue-500 text-white border-none transition-colors duration-all' : 'bg-none text-black'} rounded-full shadow-md dark:text-gray-200 dark:shadow-white/10`}
                            onClick={() => setSelectedItem(category.id)}
                            aria-pressed={selectedItem === category.id}
                        > {category.title}</button>
                    ))}
                </div>
            </div>
            <div className='my-6'>
                <AnimatePresence mode='wait'>
                    <motion.div
                        key={selectedItem}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 50 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Suspense fallback={<div>Loading...</div>}>
                            {SelectedComponent && <SelectedComponent />}
                        </Suspense>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    )
}

export default Medium
