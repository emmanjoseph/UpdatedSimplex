import UserImg from '@/public/user.jpg';
import Moses from '@/public/moses.jpg'
import CCTV from '@/public/securityCamera.jpg'
import LowVoltageCable from '@/public/lowVoltage.jpg'
import AlarmSysytem from '@/public/alarm.jpg'
import TwoWayGate from '@/public/doorBell.jpg'
import DoorBells from '@/public/doorBell.jpg'
import Motion from '@/public/doorBell.jpg'
import Fence from '@/public/electricfence.jpg'
import highVoltageCablingImg from '@/public/highvoltage.jpg'
import homeWiringImg from '@/public/homeCabling.jpg'
import commercialWiringImg from '@/public/commercialBuilding.jpg'
import customizedProjectsImg from '@/public/project.jpg'
import learningInstitutionsImg from '@/public/learningInsitution.jpg'
import corporateResearchImg from '@/public/learningInsitution.jpg'
import powerBackupImg from '@/public/backup.jpg'
import solarPowerImg from '@/public/solar.jpg'


export const NAV_LINKS = [
    { href: '/', key: 'home', label: 'Home' },
    { href: '/services', key: 'services', label: 'Services' },
    { href: '/about', key: 'about', label: 'About' },
    // { href: '/', key: 'contact_us', label: 'Contact Us' },
  ];

  export const Locations=[
    {key:'home',label:'ViewPark Towers 17th WingC Door No. 1'},
    {key:'home',label:'Utalii House 1st Floor North Wing Door No. 3'},
  ]

  export const FooterLinks =[
    {key:'Quicklinks',title:'QuickLinks',
      links:[
        {
          link:'/services',
          label:'Services'
        },
        {
          link:'/about',
          label:'About us'
        },
      ]
    },
    {key:'Tel',title:'Tel :',
      links:[
        {
          link:'',
          label:'+254 722 966 576'
        },
        {
          link:'',
          label:'+254 733 966 576'
        },
        {
          link:'',
          label:'+254 777 966 576'
        },
      ]
    },
  ]
 export const testimonials = [
  {
    quote:
      "This service exceeded all expectations. The team was professional, prompt, and the results were outstanding. I would highly recommend them to anyone looking for quality work and great customer service.",
    name: "Jessica Carter",
    title: "Project Manager, Tech Innovators Inc.",
  },
  {
    quote:
      "Our experience was nothing short of excellent. From the initial consultation to the final delivery, everything was handled with great care and expertise. We couldn't be happier with the outcome.",
    name: "Michael Thompson",
    title: "CEO, Green Energy Solutions",
  },
  {
    quote:
      "I was impressed with the attention to detail and the level of communication throughout the entire process. They delivered on time and within budget, which is rare these days. Highly recommend!",
    name: "Emily Rodriguez",
    title: "Director of Operations, Urban Design Studio",
  },
  {
    quote:
      "Exceptional service from start to finish. The team was knowledgeable, responsive, and the quality of work was top-notch. We will definitely be using their services again in the future.",
    name: "David Lee",
    title: "Founder, Creative Ventures",
  },
  {
    quote:
      "Working with them was a pleasure. They understood our needs perfectly and executed the project flawlessly. The final product exceeded our expectations, and the whole team was fantastic to work with.",
    name: "Sophia Martinez",
    title: "Marketing Lead, Bright Future Inc.",
  },
];

  export const internetServices = [
    {
      heading: 'Customized Package',
      speed: 'Download Speed: 3 Mbps',
      uploadSpeed: 'Upload Speed: 1 Mbps',
      price: 'KES 2,500/month',
      dataLimit: 'Unlimited Data',
      type: 'Basic Internet',
      customerSupport: 'Email and Phone Support',
      additionalFeatures: 'Free Router Installation',
      limitations: 'Best for light browsing and emails'
    },
    {
      heading: 'Bronze Package',
      speed: 'Download Speed: 5 Mbps',
      uploadSpeed: 'Upload Speed: 3 Mbps',
      price: 'KES 3,000/month',
      dataLimit: 'Unlimited Data',
      type: 'Standard Internet',
      customerSupport: '24/7 Phone Support',
      additionalFeatures: 'Free Router Installation',
      limitations: 'Ideal for streaming in SD and light online gaming'
    },
    {
      heading: 'Silver Package',
      speed: 'Download Speed: 10 Mbps',
      uploadSpeed: 'Upload Speed: 10 Mbps',
      price: 'KES 5,000/month',
      dataLimit: 'Unlimited Data',
      type: 'Premium Internet',
      customerSupport: '24/7 Phone Support',
      additionalFeatures: 'Free Router Installation',
      limitations: 'Perfect for HD streaming and moderate online gaming'
    },
    {
      heading: 'Gold Package',
      speed: 'Download Speed: 20 Mbps',
      uploadSpeed: 'Upload Speed: 20 Mbps',
      price: 'KES 10,000/month',
      dataLimit: 'Unlimited Data',
      type: 'Ultra-Premium Internet',
      customerSupport: '24/7 Phone Support',
      additionalFeatures: 'Free Router Installation',
      limitations: 'Excellent for 4K streaming, heavy online gaming, and smart home devices'
    }
  ];

  export const securityServices = [
    {
      name: "Installation of Low Voltage Cables",
      description: "Enhances visibility and security.",
      img: LowVoltageCable,
      moreInfo: 'We provide installation of low voltage cables to enhance visibility and security in various settings including industrial, commercial, and residential areas. Our services ensure safety and efficiency through proper installation, maintenance, and repair.',
      highlights: [
        "Industrial, commercial, and residential solutions",
        "Ensuring safety and efficiency",
        "Installation, maintenance, and repair"
      ]
    },
    {
      name: "Installation of Security Cameras",
      description: "Helps in monitoring and recording events for future clarification.",
      img: CCTV,
      moreInfo: 'Our security camera installation services help in monitoring and recording events for future clarification. We offer solutions for industrial, commercial, and residential needs, ensuring safety and efficiency.',
      highlights: [
        "Industrial, commercial, and residential solutions",
        "Ensuring safety and efficiency",
        "Installation, maintenance, and repair"
      ]
    },
    {
      name: "Installation of Alarm Systems",
      description: "Provides alert mechanisms to enhance safety and security.",
      img: AlarmSysytem,
      moreInfo: 'We install alarm systems that provide alert mechanisms to enhance safety and security in various environments. Our services cover industrial, commercial, and residential areas, ensuring safety and efficiency.',
      highlights: [
        "Industrial, commercial, and residential solutions",
        "Ensuring safety and efficiency",
        "Installation, maintenance, and repair"
      ]
    },
    {
      name: "Installation of Two-Way Gate Communication Systems",
      description: "Facilitates secure communication for gated entries.",
      img: TwoWayGate,
      moreInfo: 'Our two-way gate communication systems facilitate secure communication for gated entries, enhancing security for industrial, commercial, and residential properties. We ensure safety and efficiency through proper installation and maintenance.',
      highlights: [
        "Industrial, commercial, and residential solutions",
        "Ensuring safety and efficiency",
        "Installation, maintenance, and repair"
      ]
    },
    {
      name: "Installation of Doorbells",
      description: "Integrates with communication systems for secure access.",
      img: DoorBells,
      moreInfo: 'We provide installation of doorbells that integrate with communication systems for secure access. Our services cater to industrial, commercial, and residential needs, ensuring safety and efficiency.',
      highlights: [
        "Industrial, commercial, and residential solutions",
        "Ensuring safety and efficiency",
        "Installation, maintenance, and repair"
      ]
    },
    {
      name: "Installation of Motion Detectors",
      description: "Detects movement to prevent unauthorized access.",
      img: Motion,
      moreInfo: 'Our motion detectors detect movement to prevent unauthorized access, providing enhanced security for industrial, commercial, and residential areas. We ensure safety and efficiency through proper installation, maintenance, and repair.',
      highlights: [
        "Industrial, commercial, and residential solutions",
        "Ensuring safety and efficiency",
        "Installation, maintenance, and repair"
      ]
    },
    {
      name: "Installation of Electrical Fences",
      description: "Provides a robust perimeter security solution.",
      img: Fence,
      moreInfo: 'We install electrical fences that provide a robust perimeter security solution for various settings including industrial, commercial, and residential properties. Our services ensure safety and efficiency through proper installation, maintenance, and repair.',
      highlights: [
        "Industrial, commercial, and residential solutions",
        "Ensuring safety and efficiency",
        "Installation, maintenance, and repair"
      ]
    }
  ];
  export const electricalServices = [
    {
      name: "High Voltage Cabling Solutions",
      description: "Providing high voltage cabling solutions for various needs.",
      img: highVoltageCablingImg,
      moreInfo: "We offer high voltage cabling solutions for industrial, commercial, and residential projects, ensuring safety and efficiency. Our services include installation, maintenance, and repair of high voltage systems.",
      highlights: [
        "Industrial, commercial, and residential solutions",
        "Ensuring safety and efficiency",
        "Installation, maintenance, and repair"
      ]
    },
    {
      name: "Basic Home Wiring",
      description: "Wiring solutions for residential properties.",
      img: homeWiringImg,
      moreInfo: "Our home wiring services cover new installations, upgrades, and repairs. We use high-quality materials and follow the latest safety standards to ensure reliable and long-lasting electrical systems in your home.",
      highlights: [
        "New installations, upgrades, and repairs",
        "High-quality materials",
        "Latest safety standards"
      ]
    },
    {
      name: "Commercial Building Wiring",
      description: "Comprehensive wiring solutions for commercial buildings.",
      img:commercialWiringImg,
      moreInfo: "We provide comprehensive wiring solutions for commercial buildings, including offices, retail spaces, and warehouses. Our team ensures minimal disruption to your operations during installation and maintenance.",
      highlights: [
        "Offices, retail spaces, and warehouses",
        "Minimal disruption to operations",
        "Installation and maintenance"
      ]
    },
    {
      name: "Customized Electrical Projects",
      description: "Tailored electrical solutions for specific requirements.",
      img:customizedProjectsImg,
      moreInfo: "Our customized electrical projects cater to unique requirements, including specialized equipment installations, energy-efficient solutions, and smart home integrations. We work closely with clients to deliver tailored solutions.",
      highlights: [
        "Specialized equipment installations",
        "Energy-efficient solutions",
        "Smart home integrations"
      ]
    },
    {
      name: "Electrical Projects for Learning Institutions",
      description: "Specialized electrical projects for schools and universities.",
      img: learningInstitutionsImg,
      moreInfo: "We specialize in electrical projects for learning institutions, providing safe and efficient electrical systems for classrooms, laboratories, and administrative buildings. Our services include installation, maintenance, and upgrades.",
      highlights: [
        "Classrooms, laboratories, and administrative buildings",
        "Safe and efficient electrical systems",
        "Installation, maintenance, and upgrades"
      ]
    },
    {
      name: "Electrical Projects for Corporate Research",
      description: "Electrical solutions for corporate research facilities.",
      img: learningInstitutionsImg,
      moreInfo: "Our electrical solutions for corporate research facilities include specialized power systems, data center wiring, and laboratory electrical installations. We ensure the highest standards of safety and reliability.",
      highlights: [
        "Specialized power systems",
        "Data center wiring",
        "Laboratory electrical installations"
      ]
    },
    {
      name: "Power Backup Systems",
      description: "Reliable power backup solutions.",
      img: powerBackupImg,
      moreInfo: "We provide reliable power backup solutions to ensure uninterrupted power supply during outages. Our services include the installation of generators, UPS systems, and battery backups for homes and businesses.",
      highlights: [
        "Generators, UPS systems, and battery backups",
        "Uninterrupted power supply",
        "Homes and businesses"
      ]
    },
    {
      name: "Solar Power Installation",
      description: "Sustainable and efficient solar power solutions.",
      img: solarPowerImg,
      moreInfo: "Our solar power installation services offer sustainable and cost-effective energy solutions for residential and commercial properties. We handle everything from system design to installation and maintenance.",
      highlights: [
        "System design to installation and maintenance",
        "Sustainable and cost-effective energy solutions",
        "Residential and commercial properties"
      ]
    }
  ];


  export const people = [
    {
      id: 1,
      name: "Moses Muia",
      designation: "Manager",
      image: Moses.src,
    },
    {
      id: 2,
      name: "Moses Waithaka",
      designation: "Technical Support",
      image: UserImg.src,
    },
   
    {
      id: 3,
      name: "Lawrence Kinyua",
      designation: "Technical Support",
      image: UserImg.src,
    },
    {
      id: 4,
      name: "Mary Wanjiru",
      designation: "Technical Support",
      image: UserImg.src,
    },
  ];

  export const InternetfaqData = [
  { question: 'What internet speed do I need?', answer: 'The internet speed you need depends on your usage. For basic browsing, 20 Mbps is sufficient. For HD streaming, online gaming, and multiple users, 50 Mbps or more is recommended. For Ultra-HD/4K streaming, large file downloads, or business needs, consider speeds of 100 Mbps to 200 Mbps.' },
  { question: 'Can I upgrade my internet speed if needed?', answer: 'Yes, you can upgrade your internet speed at any time to better suit your needs. We offer flexible plans that can be adjusted as your usage increases.' },
  { question: 'How many devices can I connect with my internet plan?', answer: 'A 20 Mbps connection can handle up to 3-4 devices simultaneously for basic tasks like browsing and streaming. Higher speeds like 100-200 Mbps can support 10 or more devices, including HD streaming, online gaming, and smart home devices.' },
  { question: 'What activities require higher internet speeds?', answer: 'Activities like Ultra-HD/4K streaming, online gaming, video conferencing, large file downloads/uploads, and running multiple IoT devices or smart home systems require higher internet speeds (100 Mbps or more).' },
  { question: 'What affects my internet speed?', answer: 'Several factors can affect your internet speed, including the number of connected devices, the quality of your Wi-Fi router, network congestion, and the type of activities being performed. For the best performance, we recommend using a wired connection for bandwidth-intensive activities.' },
  { question: 'What is the difference between download and upload speeds?', answer: 'Download speed determines how quickly data is transferred from the internet to your devices (e.g., streaming videos, downloading files). Upload speed refers to how fast you can send data from your devices to the internet (e.g., uploading files, video conferencing). Both are important for a balanced internet experience.' },
  { question: 'Is there a data cap on my internet plan?', answer: 'Our internet plans are designed to cater to different usage needs, and some plans may include data caps. Please check the specifics of your selected package or contact us to ensure you have the best plan for your usage.' },
  { question: 'How can I optimize my internet connection for better performance?', answer: 'To optimize your internet connection, ensure your router is placed centrally, away from obstructions. Use a wired connection for activities requiring high bandwidth, and limit the number of devices connected simultaneously. Regularly update your router\'s firmware and consider upgrading to a higher speed plan if necessary.' },
];

  export const securityFAQs = [
  {
    question: "What types of security services do you offer?",
    answer: "We offer a wide range of security services, including the installation of security cameras, alarm systems, motion detectors, electrical fences, and two-way gate communication systems, among others. Our services are designed to meet both residential and commercial needs."
  },
  {
    question: "How do I choose the right security system for my needs?",
    answer: "The right security system depends on your specific requirements. For home security, you might consider cameras and motion detectors. For businesses, a more comprehensive system with alarms, electrical fences, and gate communication systems may be more appropriate. We offer consultations to help you make the best choice."
  },
  {
    question: "Can I monitor my security system remotely?",
    answer: "Yes, our security systems can be integrated with smartphone apps, allowing you to monitor your property remotely in real-time. This includes viewing live camera feeds, receiving alerts, and controlling system settings from anywhere."
  },
  {
    question: "Do you offer maintenance and support for installed systems?",
    answer: "Absolutely. We provide ongoing maintenance and support for all our installed systems. This includes regular check-ups, troubleshooting, and technical support to ensure your security systems remain fully operational."
  },
  {
    question: "How quickly can my security system be installed?",
    answer: "Installation times vary depending on the complexity of the system and the size of the property. However, we aim to complete most installations within a few days of your order confirmation."
  },
  {
    question: "Are your security systems customizable?",
    answer: "Yes, all our security solutions are fully customizable. We can tailor the system to fit your specific needs, whether it's for a small home, large estate, or commercial building."
  },
  {
    question: "What happens if there’s a power outage?",
    answer: "Our security systems come with backup power options, ensuring that your security remains active even during power outages. This includes battery backups for alarms and security cameras."
  }
];

export const electricalFAQs = [
  {
    question: "What types of electrical services do you offer?",
    answer: "We offer a comprehensive range of electrical services, including high voltage cabling solutions, basic home wiring, commercial building wiring, customized electrical projects for learning institutions and corporate research, and more."
  },
  {
    question: "How can I determine which electrical service is right for my needs?",
    answer: "The right service depends on your specific requirements. For residential needs, basic home wiring might suffice, while commercial projects may require more complex solutions like high voltage cabling. We provide consultations to assess your needs and recommend the best service."
  },
  {
    question: "Do you handle both residential and commercial electrical projects?",
    answer: "Yes, we handle both residential and commercial electrical projects. Our expertise spans from basic home wiring to large-scale commercial installations and specialized projects for institutions and research facilities."
  },
  {
    question: "How long does it take to complete an electrical project?",
    answer: "The duration of an electrical project depends on its complexity and scope. Simple residential wiring can often be completed within a day or two, while larger commercial or customized projects may take several weeks. We provide estimated timelines during the consultation phase."
  },
  {
    question: "Are your electrical services customizable?",
    answer: "Yes, our services are fully customizable. Whether you need a specific solution for your home or a tailored electrical system for a commercial building or institution, we can design and implement a solution that meets your unique needs."
  },
  {
    question: "What safety measures do you take during electrical installations?",
    answer: "Safety is a top priority. We adhere to all relevant safety codes and standards, use high-quality materials, and ensure that all installations are performed by certified professionals. We also conduct thorough inspections and tests to ensure everything is safe and functional."
  },
  {
    question: "Do you provide maintenance and support for electrical systems?",
    answer: "Yes, we offer ongoing maintenance and support for all our electrical systems. This includes routine check-ups, troubleshooting, and repairs to ensure that your electrical systems continue to operate efficiently and safely."
  },
  {
    question: "What should I do if I experience an electrical issue after installation?",
    answer: "If you experience any issues after installation, please contact us immediately. We provide prompt support and will address any problems to ensure your electrical system is functioning correctly."
  }
];

