import UserImg from '@/public/user.jpg';
import CCTV from '@/public/cctv-camera.png'
import LowVoltageCable from '@/public/cable.png'
import AlarmSysytem from '@/public/alarm.png'
import TwoWayGate from '@/public/gate.png'
import DoorBells from '@/public/doorbell.png'
import Motion from '@/public/motion-detector.png'
import Fence from '@/public/electric-fence.png'
import highVoltageCablingImg from '@/public/wires.png'
import homeWiringImg from '@/public/home.png'
import commercialWiringImg from '@/public/home.png'
import customizedProjectsImg from '@/public/clipboard.png'
import learningInstitutionsImg from '@/public/home.png'
import corporateResearchImg from '@/public/home.png'
import powerBackupImg from '@/public/electric-generator.png'
import solarPowerImg from '@/public/solar-cell.png'


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
          link:'',
          label:'Contact us'
        },
        {
          link:'',
          label:'Signup'
        },
        {
          link:'',
          label:'About us'
        },
      ]
    },
    {key:'Services',title:'Services',
      links:[
        {
          link:'/services/Communication',
          label:'Communication'
        },
        {
          link:'',
          label:'Security'
        },
        {
          link:'',
          label:'Electrical'
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
        "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
      name: "Charles Dickens",
      title: "A Tale of Two Cities",
    },
    {
      quote:
        "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
      name: "William Shakespeare",
      title: "Hamlet",
    },
    {
      quote: "All that we see or seem is but a dream within a dream.",
      name: "Edgar Allan Poe",
      title: "A Dream Within a Dream",
    },
    {
      quote:
        "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
      name: "Jane Austen",
      title: "Pride and Prejudice",
    },
    {
      quote:
        "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
      name: "Herman Melville",
      title: "Moby-Dick",
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
      img: commercialWiringImg,
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
      img: customizedProjectsImg,
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
      img: corporateResearchImg,
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
      name: "Solar Power Installations",
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
      image: UserImg.src,
    },
    {
      id: 2,
      name: "Moses Waithaka",
      designation: "Technical Support",
      image: UserImg.src,
    },
    {
      id: 3,
      name: "Jane Smith",
      designation: "Data Scientist",
      image: UserImg.src,
    },
    {
      id: 4,
      name: "Lawrence Kinyua",
      designation: "Technical Support",
      image: UserImg.src,
    },
    {
      id: 5,
      name: "Mary Wanjiru",
      designation: "Technical Support",
      image: UserImg.src,
    },
  ];