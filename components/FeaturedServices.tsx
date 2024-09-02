import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { IoIosBatteryFull, IoMdWifi } from "react-icons/io";
import { MdCable, MdSolarPower } from "react-icons/md";
import { FaDiagramProject } from "react-icons/fa6";
import { RiAlarmWarningFill } from "react-icons/ri";
import { BiSolidCctv } from "react-icons/bi";
import Link from "next/link";
import Project from '@/public/project.jpg'
import TailwindButton from "./ui/TailwindButton";


export function BentoGridDemo() {
  return (
    <div className="max-container padding-container">
      <div className="my-6 flexCenter flex-col gap-1 text-center">
        <h1 className="bold-32 lg:bold-40 py-1">What we offer</h1>
        <p className="regular-14 md:regular-16 text-black dark:text-gray-200">
          Our wide range of services are designed to meet all your technological and design needs.
        </p>
      </div>
      <BentoGrid>
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            // header={item.header}
            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
            icon={item.icon}
            image={item.img}
          />
        ))}
      </BentoGrid>
      <div className="flexCenter my-7">
      <Link href='/services'>
      <TailwindButton text="Explore more" className="px-4 py-2"/>
      </Link>
      </div>
    </div>
  );
}

const items = [
  {
    title: "High Voltage Cabling",
    description: "Delivering reliable and safe high voltage cabling solutions for all your electrical needs.",
    icon: <MdCable />,
    img: "/highvoltage.jpg",  // Use the image path as a string
  },
  {
    title: "Customized Electrical Projects",
    description: "Tailored electrical solutions designed to meet your unique project requirements.",
    icon: <FaDiagramProject />,
    img: "/project.jpg",
  },
  {
    title: "Installation of Alarm Systems",
    description: "Secure your premises with our advanced alarm system installations.",
    icon: <RiAlarmWarningFill />,
    img: "/alarm.jpg",
  },
  {
    title: "Internet Provision",
    description: "Fast and reliable internet solutions for both residential and commercial setups.",
    icon: <IoMdWifi />,
    img: "/internet.jpg",
  },
  {
    title: "Solar Power Installation",
    description: "Harness the power of the sun with our efficient solar power systems.",
    icon: <MdSolarPower />,
    img: "/solar (2).jpg",
  },
  {
    title: "Power Backup Systems",
    description: "Ensure uninterrupted power supply with our robust backup systems.",
    icon: <IoIosBatteryFull />,
    img: "/backup.jpg",
  },
  {
    title: "CCTV Camera Installation",
    description: "Keep an eye on your property with our comprehensive CCTV installation services.",
    icon: <BiSolidCctv />,
    img: "/cctv2.jpg",
  },
];


export default BentoGridDemo;
