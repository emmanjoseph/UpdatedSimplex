'use client';
import { useParams } from 'next/navigation';
import { securityServices } from '@/app/Constants'; // Make sure the path is correct

const MoreInfo = () => {
  const { id } = useParams(); // Get the id from the URL params

  // Fetch the service using the string id
  const service = securityServices.find((service) => service.id === id);

  // Check if the service exists
  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <div className='max-container padding-container mt-5'>
      <h1 className='text-36-bold'>{service.name}</h1>
      <p className='mt-4'>{service.description}</p>
      <p className='mt-2'>{service.moreInfo}</p>
      <ul className='mt-4'>
        {service.highlights.map((highlight, index) => (
          <li key={index}>{highlight}</li>
        ))}
      </ul>
    </div>
  );
};

export default MoreInfo;
