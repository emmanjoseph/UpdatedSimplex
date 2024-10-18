"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Carousel, Card } from "@/components/ui/AppleCardsCarousel";
import { motion } from "framer-motion";
import { FaAngleRight } from "react-icons/fa";


// Updated DummyContent to accept props for dynamic rendering
const DummyContent = ({ title, description,Img,link }:{title:string,description:string,Img:string,link:string}) => {
  return (
    <div className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4" id="services">
      <Image src={Img} width={500} height={100} alt="image"
      className="rounded-3xl w-full h-[250px] xl:h-[400px] object-cover"
      />
      <p className="text-neutral-600  text-16-regular xl:text-18-regular font-sans mt-6">
        <span className="font-bold text-neutral-700">{title}</span>{" "}
        {description}
      </p>  

      <div className="mt-7">
          <Link href={link}
      className="text-14-regular text-neutral-200 bg-black px-4 py-3 rounded-full "
      >
      View more info
      </Link>
      </div>
     
    </div>
  );
};

export function FeaturedServices() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} layout={true} />
  ));

  return (
    <div className="max-container padding-container">
      <div className="w-full h-full py-20">
        <h2 className="max-w-full pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
          What we offer
        </h2>
        <Carousel items={cards} />
      </div>
    </div>
  );
}


// Updated data with dynamic content for each card
const data = [
  {
    category: "Communication",
    title: "Internet Provision Services",
    src: "/Corporate.jpg",
    content: (
      <DummyContent
      Img="/Corporate.jpg"
        title="Reliable and High-Speed Internet"
        description=" Stable and fast internet connectivity is essential for business growth. We provide services according to consumption and affordability.Empower your business with scalable internet solutions designed to grow with your needs. Stay connected around the clock with our industry-leading 24/7 uptime guarantee."
        link="/services/security/installation-of-security-cameras"
      />
    ),
  },
  {
    category: "Security",
    title: "CCTV Camera Installation.",
    src: "/securityCamera.jpg",
    content: (
      <DummyContent
      Img="/securityCamera.jpg"
        title="Complete CCTV Security Solutions"
        description='Our security camera installation services provide comprehensive solutions for monitoring and recording events. We offer advanced camera systems with night vision, motion detection, and remote monitoring capabilities.'
        link="/services/security/installation-of-security-cameras"

      />
    ),
  },
  {
    category: "Electrical",
    title: "High Voltage Cabling Solutions",
    src: "https://images.unsplash.com/photo-1601462904263-f2fa0c851cb9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZWxlY3RyaWNpdHl8ZW58MHx8MHx8fDA%3D",
    content: (
      <DummyContent
      Img="https://images.unsplash.com/photo-1601462904263-f2fa0c851cb9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZWxlY3RyaWNpdHl8ZW58MHx8MHx8fDA%3D"
        title="High Voltage Expertise"
        description="Our high voltage cabling solutions ensure optimal performance and safety across industries. We follow international safety standards and provide end-to-end services, from planning and design to installation and testing"
        link="services/electrical/high-voltage-cabling-solutions"

      />
    ),
  },
  {
    category: "Security",
    title: "Installation of Alarm Systems",
    src: "https://images.unsplash.com/photo-1533052439013-45751c7b7dc2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFsYXJtfGVufDB8fDB8fHww",
    content: (
      <DummyContent
      Img="https://images.unsplash.com/photo-1533052439013-45751c7b7dc2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFsYXJtfGVufDB8fDB8fHww"
        title="Top-Notch Alarm Systems"
        description="We install advanced alarm systems that integrate with security cameras, motion detectors, and communication devices. Our solutions provide real-time alerts for intrusions, fire, and other emergencies, with mobile notifications and remote control options."
        link="services/security/installation-of-alarm-systems"

      />
    ),
  },
  {
    category: "Security",
    title: "Installation of Low Voltage Cables",
    src: "/lowVoltage.jpg",
    content: (
      <DummyContent
      Img="/lowVoltage.jpg"
        title="Low Voltage Wiring Services"
        description="We provide installation of low voltage cables to enhance visibility and security in various settings including industrial, commercial, and residential areas. Our services ensure the smooth transmission of signals for security cameras, alarms, and other systems. We also offer structured cabling solutions to streamline and future-proof your security network."
        link="/services/security/installation-of-low-voltage-cables"

      />
    ),
  },
  {
    category: "Electrical",
    title: "Power Backup Systems Installation",
    src: "/backup.jpg",
    content: (
      <DummyContent
        Img="/backup.jpg"
        title="Power Backup Systems"
        description="We provide installation of power backup systems that ensure uninterrupted power supply during outages. Whether for residential, commercial, or industrial applications, our solutions integrate renewable energy sources and advanced technologies for sustainable and reliable power backup."
        link="/services/electrical/power-backup-systems"
      />
    ),
},

];
