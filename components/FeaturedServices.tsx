import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/BentoGrid";
import Image from "next/image";
import Internet from '@/public/internet.jpg'
import CCTV from '@/public/cctv.jpg'

export function FeaturedServices() {
  return (
    <div className='max-container padding-container flex flex-col gap-2'>
      <div className="my-10 flexCenter flex-col gap-1">
        <h1 className="bold-32">Featured Services</h1>
        <p>Our wide range of services are designed to meet all your technological and design needs.</p>
      </div>
      <BentoGrid className="w-full md:auto-rows-[20rem]">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            className={item.className}
          />
        ))}
      </BentoGrid>
    </div>
  );
}

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[8rem] rounded-xl dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)] border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black items-center justify-center">
    <Image
    src={CCTV}
alt="cctv"
    />
  </div>
);

const items = [
  {
    title: "Internet Provision",
    description: "High-speed and reliable internet services to keep you connected.",
    header: <Skeleton />,
    className: "md:col-span-2",
  },
  {
    title: "Security",
    description: "Advanced security solutions to protect your assets and information.",
    header: <Skeleton />,
    className: "md:col-span-1",
  },
  {
    title: "Solar and backup systems",
    description: "Creative and functional design services to make your vision a reality.",
    header: <Skeleton />,
    className: "md:col-span-1",
  },
  {
    title: "Electrical Services",
    description: "Professional electrical services for your residential and commercial needs.",
    header: <Skeleton />,
    className: "md:col-span-2",
  },
];
