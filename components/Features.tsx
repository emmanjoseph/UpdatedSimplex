import { cn } from "@/lib/utils";
// import {
//   IconGrowth,
//   IconShieldCheck,
//   IconSettings,
//   IconUsers,
//   IconGlobe,
//   IconChartBar,
//   IconPlug,
//   IconHelp,
// } from "@tabler/icons-react";

export function FeaturesSectionDemo() {
  const features = [
    {
      title: "Quality Services ",
      description:
        "Our platform grows with you. From startups to enterprises, we scale effortlessly to meet your needs.",
      // icon: <IconGrowth />,
    },
    {
      title: "Affordable Plans",
      description:
        "Enterprise-grade security protocols to keep your data safe and sound, 24/7.",
      // icon: <IconShieldCheck />,
    },
    {
      title: "Customizable Workflows",
      description:
        "Tailor the platform to match your team's workflow, with customizable settings and automation.",
      // icon: <IconSettings />,
    },
    {
      title: "Real-Time Collaboration",
      description:
        "Work together seamlessly with real-time collaboration tools that make remote teamwork a breeze.",
      // icon: <IconUsers />,
    },
    {
      title: "Global Accessibility",
      description:
        "Access your data and tools from anywhere in the world, with multilingual support and cloud infrastructure.",
      // icon: <IconGlobe />,
    },
    {
      title: "In-Depth Analytics",
      description:
        "Gain insights with comprehensive analytics that help you track performance and optimize operations.",
      // icon: <IconChartBar />,
    },
    {
      title: "Flexible Integration",
      description:
        "Easily connect with the tools you already use, thanks to our wide range of integrations.",
      // icon: <IconPlug />,
    },
    {
      title: "Customer Support",
      description:
        "Our support team is available around the clock, providing help whenever and wherever you need it.",
      // icon: <IconHelp />,
    },
  ];

  return (
    <div className="max-container padding-container py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <Feature key={feature.title} {...feature} index={index} />
        ))}
      </div>
    </div>
  );
}

const Feature = ({
  title,
  description,
  // icon,
  index,
}: {
  title: string;
  description: string;
  // icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {/* {icon} */}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
