'use client'
import TailwindButton from '@/components/ui/TailwindButton'
import React from 'react'

const page = () => {
  return (
    <div
    className='w-full md:h-[80vh] flex items-center justify-center p-2 md:p-0'
    >
        <div className='w-full flexCenter flex-col gap-2 md:w-3/12 border border-white/20 p-5 rounded-lg'>
        <div className='w-full flexStart flex-col my-3 pb-3 border-b border-white/20'>
        <h1 className='bold-32'>Sign Up</h1>
        <p>Create free account</p>
        </div>
           
            <div className='w-full flex flex-col gap-3'>
                <div className='flex flex-col gap-1 w-full'>
                <label className='regular-16'>Email address</label>
                <input type="email" name="" id=""
                className='w-full px-2 py-3 shadow-lg dark:bg-white/20 outline-none rounded-lg regular-14'
                />
                </div>
                <div className='flex flex-col gap-1 w-full'>
                <label className='regular-16'>Password</label>
                <input type="email" name="" id=""
                className='w-full px-2 py-3 shadow-lg dark:bg-white/20 outline-none rounded-lg regular-14'
                />
                </div>
                <TailwindButton
                text='Signup'
                className='rounded-lg py-3 flexCenter'
                />
                
            </div>
        </div>
    </div>
  )
}

export default page