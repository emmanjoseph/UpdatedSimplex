import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/BentoGrid";
import Image from "next/image";
import Internet from '@/public/internet.jpg';
import CCTV from '@/public/cctv.jpg';
import Solar from '@/public/solar-cell.png';
import Electrical from '@/public/electrical.jpg';

export function FeaturedServices() {
  return (
    <div className='max-container padding-container flex flex-col gap-2 py-10 lg:py-20'>
      <div className="my-6 flexCenter flex-col gap-1 text-center">
        <h1 className="bold-32 lg:bold-40 py-1">Featured <span className="bg-gradient-to-r from-sky-400 via-red-600 to-indigo-500 bg-clip-text text-transparent">Services</span></h1>
        <p className="regular-14 md:regular-16 text-black dark:text-gray-200">
          Our wide range of services are designed to meet all your technological and design needs.
        </p>
      </div>
      <BentoGrid className="w-full md:auto-rows-[20rem]">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={(
              <div className="relative w-full h-full min-h-[12rem] rounded overflow-hidden shadow-md dark:shadow-none">
                <Image src={item.image} alt={item.alt} fill className="object-cover h-[10rem]" />
              </div>
            )}
            className={item.className}
          />
        ))}
      </BentoGrid>
    </div>
  );
}

const items = [
  {
    title: "Internet Provision",
    description: "High-speed and reliable internet services to keep you connected.",
    image: Internet,
    alt: "Internet Provision Service",
    className: "md:col-span-2",
  },
  {
    title: "Security",
    description: "Advanced security solutions to protect your assets.",
    image: CCTV,
    alt: "Security Service",
    className: "md:col-span-1",
  },
  {
    title: "Solar and backup systems",
    description: "Reliable and efficient power solutions for sustainable energy.",
    image: Electrical,
    alt: "Solar and Backup Systems",
    className: "md:col-span-1",
  },
  {
    title: "Electrical Services",
    description: "Professional electrical services for your residential and commercial needs.",
    image: Electrical,
    alt: "Electrical Services",
    className: "md:col-span-2",
  },
];
