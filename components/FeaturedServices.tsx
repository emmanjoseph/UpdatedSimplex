import React from 'react'

const FeaturedServices = () => {
  return (
    <div className='max-container padding-container'>
      <div className="my-6 flexCenter flex-col gap-1 text-center">
       <h1 className="bold-32 lg:bold-40 py-1">Featured <span className="bg-gradient-to-r from-sky-400 via-red-600 to-indigo-500 bg-clip-text text-transparent">Services</span></h1>
       <p className="regular-14 md:regular-16 text-black dark:text-gray-200">
          Our wide range of services are designed to meet all your technological and design needs.       </p>
     </div>

     {/* internet provision */}
     <div className='py-10 flex flex-col lg:flex-row gap-10'>
      <div className='lg:w-1/2'>
      <h1 className='bold-20 lg:bold-32 bg-gradient-to-r from-sky-400 via-red-600 to-indigo-500 bg-clip-text text-transparent'>Internet Provision</h1>
      <h2 className='regular-18 my-3'>High-speed and reliable internet services to keep you connected</h2>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum quis quam beatae libero ducimus quaerat quasi dolore quo eum! Velit, voluptatibus nesciunt. Neque, architecto ut.</p>
      </div>
      <div className='lg:w-1/2'>
        picture
      </div>
      
     </div>

     <div className='py-10 flex flex-col lg:flex-row gap-10'>
     <div className='lg:w-1/2'>
        picture
      </div>
      <div className='lg:w-1/2'>
      <h1 className='bold-20 lg:bold-32 bg-gradient-to-r from-sky-400 via-red-600 to-indigo-500 bg-clip-text text-transparent'>Security</h1>
      <h2 className='regular-18 my-3'>High-speed and reliable internet services to keep you connected</h2>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum quis quam beatae libero ducimus quaerat quasi dolore quo eum! Velit, voluptatibus nesciunt. Neque, architecto ut.</p>
      </div>
      
      
     </div>

     <div className='py-10 flex flex-col lg:flex-row gap-10'>
      <div className='lg:w-1/2'>
      <h1 className='bold-20 lg:bold-32 bg-gradient-to-r from-sky-400 via-red-600 to-indigo-500 bg-clip-text text-transparent'>Electrical Services</h1>
      <h2 className='regular-18 my-3'>High-speed and reliable internet services to keep you connected</h2>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum quis quam beatae libero ducimus quaerat quasi dolore quo eum! Velit, voluptatibus nesciunt. Neque, architecto ut.</p>
      </div>
      <div className='lg:w-1/2'>
        picture
      </div>
      
     </div>

     
    </div>
  )
}

export default FeaturedServices

