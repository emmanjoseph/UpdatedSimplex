import React from 'react'
import Image from 'next/image'
import { WobbleCard } from './ui/WobbleCard'

const CustomProjects = () => {
  return (
    <div
    className='max-container padding-container'
    >
         <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
        className=""
      >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
           We also do custom projects
          </h2>
          <p className="mt-4 text-left  text-base/6 text-neutral-200 text-16-regular">
          We specialize in delivering tailor-made solutions that address unique challenges.
          </p>
        </div>
        <Image
          src="/project.jpg"
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-4 lg:-right-[20%] lg:top-10 grayscale filter -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 min-h-[300px]">
        <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          Delivering quality  no worries 
        </h2>
        <p className="mt-4 max-w-[26rem] text-left text-16-regular text-neutral-200">
        Trust us to bring your vision to life with innovative, reliable, and scalable project implementations.
        </p>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        <div className="max-w-sm">
          <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
           Start with us
          </h2>
          <p className="mt-4 max-w-[26rem] text-left text-16-regular text-neutral-200">
          Whether you're looking for advanced technology integrations, specialized wiring, or scalable security systems, we design and execute solutions that go beyond the standard offerings.
          </p>
        </div>
        <Image
          src="/camera.jpg"
          width={500}
          height={700}
          alt="linear demo image"
          className="absolute -right-10 md:-right-[40%] md:-top-7 lg:top-12 lg:-right-[10%] -bottom-10 object-contain rounded-2xl grayscale"
        />
      </WobbleCard>
    </div>

    </div>

  )
}

export default CustomProjects