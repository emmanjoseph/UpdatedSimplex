'use client'
import React, { useState } from 'react'
import TailwindButton from '../ui/TailwindButton';
import Communication from './Communication';
import Security from './Security';
import Electrical from './Electrical';

const Medium = () => {
    const [selectedItem,setSelectedItem] = useState(1);
    const category = [
        {id:1,title:'Communication'},
        {id:2,title:'Security'},
        {id:3,title:'Electrical'},
    ]
  return (
    <div
    className='max-container padding-container mt-6'
    >
        <div className='flex items-center justify-between'>
            <h1 className='hidden lg:block bold-18'>Category</h1>
            <div className='flex justify-between gap-2 lg:gap-6'>
                {category.map((category)=>{
                    return <TailwindButton
                    text={category.title}
                    className='text-sm px-3 py-2'
                    onClick={()=>setSelectedItem(category.id)}
                    />
                })}
            </div>
        </div>
        <div className='my-6'>
            {selectedItem === 1 && <Communication/>}
            {selectedItem === 2 && <Security/>}
            {selectedItem === 3 && <Electrical/>}
        </div>
    </div>
  )
}

export default Medium