import React from 'react'

const Top = () => {
  return (
    <div className=' w-full h-[50vh] dark:bg-black bg-white  dark:bg-grid-white/[0.1] bg-grid-black/[0.1] relative'>
       {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"/>
       <div className='max-container padding-container h-full flex items-center justify-center my-4'>
        <div className='flexCenter flex-col gap-4 my-14'>
        <h1 className='bold-32'>Our Services</h1>
        <p className='regular-14 lg:regular-18 w-full lg:w-3/4 text-center'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat sunt illum nulla delectus natus sint accusantium aspernatur voluptatibus dolores voluptatem.</p>
        </div>
    </div>
   
    </div>
  )
}

export default Top