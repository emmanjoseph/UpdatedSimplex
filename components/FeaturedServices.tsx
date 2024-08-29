import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { IoIosBatteryFull, IoMdWifi } from "react-icons/io";
import { MdCable, MdSolarPower } from "react-icons/md";
import { FaDiagramProject } from "react-icons/fa6";
import { RiAlarmWarningFill } from "react-icons/ri";
import { BiSolidCctv } from "react-icons/bi";
import Link from "next/link";
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
            header={item.header}
            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
            icon={item.icon}
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

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[9rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);

const items = [
  {
    title: "High Voltage Cabling",
    description: "Delivering reliable and safe high voltage cabling solutions for all your electrical needs.",
    header: <Skeleton />,
    icon: <MdCable />
  },
  {
    title: "Customized Electrical Projects",
    description: "Tailored electrical solutions designed to meet your unique project requirements.",
    header: <Skeleton />,
    icon: < FaDiagramProject/>
  },
  {
    title: "Installation of Alarm Systems",
    description: "Secure your premises with our advanced alarm system installations.",
    header: <Skeleton />,
    icon: <RiAlarmWarningFill />
  },
  {
    title: "Internet Provision",
    description: "Fast and reliable internet solutions for both residential and commercial setups.",
    header: <Skeleton />,
    icon: <IoMdWifi />
  },
  {
    title: "Solar Power Installation",
    description: "Harness the power of the sun with our efficient solar power systems.",
    header: <Skeleton />,
    icon: <MdSolarPower />
  },
  {
    title: "Power Backup Systems",
    description: "Ensure uninterrupted power supply with our robust backup systems.",
    header: <Skeleton />,
    icon: <IoIosBatteryFull />
  },
  {
    title: "CCTV Camera Installation",
    description: "Keep an eye on your property with our comprehensive CCTV installation services.",
    header: <Skeleton />,
    icon: <BiSolidCctv />
  },
];

export default BentoGridDemo;
