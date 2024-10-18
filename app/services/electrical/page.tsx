'use client';
import React from 'react';
import Image from 'next/image';
import { electricalFAQs, electricalServices } from '@/app/Constants'; // Ensure the path is correct
import Link from 'next/link';
import { Card,CardFooter, CardHeader } from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { FaChevronRight } from 'react-icons/fa';
import Faq from '@/components/serviceComponents/Faq';

const Electrical = () => {
  const reducestring = (words: string, length: number) => {
    if (words.length > length) {
      return words.substring(0, length) + '...'; // Truncate string
    }
    return words;
  };

  return (
    <section className='max-container padding-container mt-5'>
      <h1 className='text-36-bold'>Electrical</h1>
      <div className="lg:flex gap-4 items-center my-4 bg-gradient-to-r from-emerald-600 to-lime-500 rounded-2xl relative overflow-hidden p-2 lg:p-8">
        <div className="flex flex-col lg:w-1/2 z-10 p-10">
          <p className="text-18-bold text-white">
          Our expertise spans a wide range of electrical projects, from basic home wiring to complex commercial building wiring.
          </p>
        </div>
        <div className="relative w-full lg:w-1/2">
          <Image
            src='/electrical.jpg' // Ensure this path is correct
            alt="Electrical Camera"
            width={500}
            height={500}
            className="absolute -right-5 lg:-right-10 lg:-top-16 grayscale filter object-contain rounded-2xl z-0"
          />
        </div>
      </div>

      {/* Cards */}
      <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-4 items-center mt-6 xl:mt-10 '>
        {electricalServices.map((card) => (
          <Card className="shad-card" key={card.name}>
            <Image 
              src={card.img} 
              alt={card.name}
              width={500} 
              height={300}
              className='w-full h-[170px] object-cover rounded-lg'
            />
            <CardHeader className='p-3'>
              <h2 className='text-[16px] font-medium leading-[18px]'>{reducestring(card.name,30)}</h2>
            </CardHeader>
            <CardFooter>
              <Dialog>
                <DialogTrigger className='text-14-medium hover:text-blue-500 flexCenter gap-2 hover:gap-3 duration-100 transition-all'><span>Explore service</span><FaChevronRight/></DialogTrigger>
                <DialogContent className='shad-dialog-content'>
                  <DialogHeader className='flex flex-row items-center gap-5'>
                    <Image src={card.img} alt={card.name} className='w-[60px] h-[60px] object-cover rounded-lg'/>
                    <DialogTitle className='text-18-bold lg:text-24-bold text-left'>{card.name}</DialogTitle>
                  </DialogHeader>
                  <DialogDescription className='text-16-regular'>
                    {card.description}
                  </DialogDescription>
                  <DialogFooter className='flex flex-row items-center gap-2 lg:gap-0 '>
                  
                  <button disabled className='text-14-medium bg-neutral-800 text-white dark:bg-white dark:text-neutral-900 p-2 rounded-lg'>
                    book appointment
                  </button>
                  <Link href={`/services/electrical/${card.id}`}>
                    <button className='text-14-medium bg-blue-500 p-2 rounded-lg text-white'>More info</button>
                  </Link>
                  </DialogFooter>
                 
                </DialogContent>
              </Dialog>
            </CardFooter>
          </Card>
        ))}
      </div>

      <Faq faqs={electricalFAQs}/>
    </section>
  );
};

export default Electrical;
