'use client'
import TailwindButton from '@/components/ui/TailwindButton'
import { useToast } from '@/components/ui/use-toast'
import Link from 'next/link';
import React, { useState } from 'react'
import { FcGoogle } from "react-icons/fc";

const Page = () => {
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState({ user: false, password: false })
  const { toast } = useToast()

  const handleSignUp = () => {
    let validationErrors = { user: !user, password: !password }
    setErrors(validationErrors)

    if (!user || !password) {
      toast({
        title: 'Error',
        description: 'Please fill in all fields',
      })
    } else {
      toast({
        title: `Hello ${user}`,
        description: 'User account created successfully',
      })
    }
  }

  return (
    <div className='max-container padding-container my-24 lg:my-36 flex items-center justify-center p-6 md:p-0'>
      <div className='w-full flexCenter flex-col gap-4 md:w-4/12 dark:border shadow-xl dark:border-white/20 p-3 lg:p-10 rounded-xl'>
        <div className='w-full flexCenter gap-3 flex-col my-3 pb-3 border-b border-black/50 dark:border-white/20'>
          <h1 className='bold-20'>Sign Up</h1>
          <p className='regualar-14'>Create a free account</p>
        </div>

        <div className='w-full flex flex-col gap-3'>
          <div className='flex flex-col gap-1 w-full'>
            <label className='regular-14'>Email address</label>
            <input
              type='email'
              placeholder='example@gmail.com'
              className={`w-full px-4 py-2 lg:py-3 border ${
                errors.user ? 'border-red-500' : 'border-black/50 dark:border-white/20'
              } dark:bg-white/20 outline-none rounded-lg text-base text-gray-900 dark:text-gray-100`}
              onChange={(e) => {
                setUser(e.target.value)
                setErrors((prev) => ({ ...prev, user: false }))
              }}
            />
            {errors.user && <p className='text-red-500 text-sm'>Email is required</p>}
          </div>
          <div className='flex flex-col gap-1 w-full'>
            <label className='regular-14'>Password</label>
            <input
              type='password'
              placeholder='enter your password'
              className={`w-full px-4 py-2 lg:py-3 border ${
                errors.password ? 'border-red-500' : 'border-black/50 dark:border-white/20'
              } dark:bg-white/20 outline-none rounded-lg text-base text-gray-900 dark:text-gray-100`}
              onChange={(e) => {
                setPassword(e.target.value)
                setErrors((prev) => ({ ...prev, password: false }))
              }}
            />
            {errors.password && <p className='text-red-500 text-sm'>Password is required</p>}
          </div>
          <TailwindButton
            text='Signup'
            className='rounded-lg py-2 lg:py-3 flexCenter mt-2'
            onClick={handleSignUp}
          />
          <div className='flexCenter gap-3 my-1'>
            <div className='h-[1px] w-1/4 bg-black/50 dark:bg-white/20'/>
            <p className='text-base regular-14 text-gray-900 dark:text-gray-100'>Or With</p>
            <div className='h-[1px] w-1/4 bg-black/50 dark:bg-white/20'/>
          </div>
          <TailwindButton
            text='Continue with Google'
            className='rounded-lg py-2 lg:py-3 flexCenter gap-2'
            icon=<FcGoogle size={20}/>
          />
          <span className='my-2 regular-14 flexCenter gap-1'>
          <p >already have an account?</p> <Link href='/login' className='text-blue-500 medium-14'>login</Link>
          </span>
          
        </div>
      </div>
    </div>
  )
}

export default Page
