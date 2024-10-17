'use client';
import { useParams } from 'next/navigation';
import { electricalServices } from '@/app/Constants';
import { TiTick } from 'react-icons/ti';
import Link from 'next/link';
import { FaBook, FaHome, FaWhatsapp } from 'react-icons/fa';
import { MdOutlinePhoneEnabled } from 'react-icons/md';
import Image from 'next/image';

const MoreInfo = () => {
  const { id } = useParams(); // Get the id from the URL params

  // Fetch the service using the string id
  const service = electricalServices.find((service) => service.id === id);

  // Check if the service exists
  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <div className='max-container padding-container mt-5'>
      <h1 className='text-36-bold'>{service.name}</h1>

      <div className='flex gap-4 items-center mt-3'>
      <div className='w-1/2 hidden lg:block'>
        <Image src={service.img} alt='serviceImg'
        className='h-[400px] rounded-lg shadow-lg object-cover grayscale'
        />
        </div>


        <div className="w-full lg:w-1/2 lg:border-l lg:px-5 dark:border-neutral-200/20 border-neutral-800/20">
        <h1 className='mt-4 text-18-bold lg:text-24-bold'>{service.description}</h1>
        <p className='mt-4 text-15-regular'>{service.moreInfo}</p>
        <div className='mt-5'>
        <h1 className='text-18-bold'>Service highlights</h1>
      <ul className=''>
        {service.highlights.map((highlight, index) => (
          <li key={index} className='text-15-regular py-2 flex items-center gap-2'>
            <TiTick className='text-blue-500'/>
            <p>{highlight}</p>
            </li>
        ))}
      </ul>
      </div>

      <div className='mt-5'>
        <h1 className='text-18-bold'>Contact us</h1>
       <ul className='mt-2 flex flex-col lg:flex-row gap-5'>
        <li className='flex items-center gap-1'><FaWhatsapp className='text-green-500'/><MdOutlinePhoneEnabled className='text-blue-500' size={15}/><p className='text-14-medium'>0722966576</p></li>
        <li className='flex items-center gap-1'><MdOutlinePhoneEnabled className='text-blue-500' size={15}/><p className='text-14-medium'>0733966576</p></li>
        <li className='flex items-center gap-1'><MdOutlinePhoneEnabled className='text-blue-500' size={15}/><p className='text-14-medium'>0777966576</p></li>
       </ul>

      </div>

      <div className='mt-9 flex flex-col gap-2 border-t dark:border-neutral-200/20 border-neutral-800/20 pt-5'>
        <Link href=''>
        <button disabled className='text-14-medium flex items-center gap-1'><FaBook className='text-yellow-500'/><p>book an appointment</p></button>
        </Link>
        <Link href='/services/electrical'>
        <button className='text-14-medium hover:underline transition-all flex items-center gap-1 '><FaHome size={15} className='text-red-500'/><p>back to main page</p></button>
        </Link>
      </div>
        </div>
      </div>
      

    
     
     
      
    </div>
  );
};

export default MoreInfo;
