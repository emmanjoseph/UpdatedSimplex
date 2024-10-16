'use client'
import React from 'react';
import Image from 'next/image';
import { securityServices } from '@/app/Constants'; // Ensure the path is correct
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"


const Security = () => {
  // console.log(securityServices);

  return (
    <section className='max-container padding-container mt-5'>
      <h1 className='text-36-bold'>Security</h1>
      <div className="lg:flex gap-4 items-center my-4 bg-gradient-to-r from-red-400 to-red-900 rounded-2xl relative overflow-hidden p-2 lg:p-8">
        <div className="flex flex-col lg:w-1/2 z-10 p-10">
          <p className="text-18-bold text-white">
            We specialize in providing comprehensive security solutions to meet the evolving needs of our clients. Explore our specialized security services below.
          </p>
        </div>
        <div className="relative w-full lg:w-1/2">
          <Image
            src='/securityCamera.jpg' // Ensure this path is correct
            alt="Security Camera"
            width={500}
            height={500}
            className="absolute -right-5 lg:-right-10 lg:-top-16 grayscale filter object-contain rounded-2xl z-0"
          />
        </div>
      </div>

      {/* Cards */}
      <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-4 items-center mt-6 xl:mt-10 '>
        {securityServices.map((card) => (
          <Card className="card" key={card.name}>
            <CardHeader>
            <h2 className='text-18-bold'>{card.name}</h2>
            </CardHeader>
            <CardContent>
            <CardDescription>
            <p className='text-14-regular'>{card.description}</p>
            </CardDescription>
            </CardContent>
            <CardFooter>
            <Dialog>
  <DialogTrigger>Open</DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Are you absolutely sure?</DialogTitle>
      <DialogDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </DialogDescription>
    </DialogHeader>
    <Link href={`/services/security/${card.id}`}>
              <button>more</button>
            </Link>
  </DialogContent>
</Dialog>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Security;
