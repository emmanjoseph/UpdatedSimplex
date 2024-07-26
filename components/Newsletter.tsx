'use client'
import React from "react";
import { BackgroundGradient } from "./ui/BackgroundGradinent";
import TailwindButton from "./ui/TailwindButton";
import { motion } from "framer-motion";
import Image from "next/image";
import SignUpImg from '@/public/signUp.jpg'

export function Newsletter() {
  return (
    <div className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-dot-white/[0.3] bg-dot-black/[0.3] relative flex items-center ">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <motion.div
       initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
      className="w-full max-container padding-container">
        <BackgroundGradient className="rounded-[22px] max-w-full p-4 sm:p-10 bg-white dark:bg-zinc-900 py-11">
        <div className='w-full flexCenter flex-col gap-2'>
          <Image 
            src={SignUpImg} 
            alt='Person signing up' 
            className='w-[200px] h-[200px] object-cover rounded-full'
          />
          <h1 className='bold-20 md:bold-32 py-2'>Ready to signup and join us?</h1>
          <p className='w-full mt-2 text-left md:text-center regular-14 md:regular-16'>
            Join our newsletter to stay updated with the latest news and special sales. Let’s your email address here!
          </p>          
          <TailwindButton
          text="sign up"
          />
        </div>
      </BackgroundGradient>
      </motion.div>
     
    </div>
  );
}
