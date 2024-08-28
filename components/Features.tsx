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
      title: "Quality Services",
      description:
        "Experience top-notch services designed to grow with your business, ensuring consistent quality at every stage.",
      // icon: <IconGrowth />,
    },
    {
      title: "Affordable Plans",
      description:
        "Choose from a range of cost-effective plans tailored to fit your budget without compromising on quality.",
      // icon: <IconShieldCheck />,
    },
    {
      title: "Customizable Solutions",
      description:
        "Tailor our services to fit your unique requirements, whether it's communication, electrical, or security needs.",
      // icon: <IconSettings />,
    },
    {
      title: "Reliable Electrical Solutions",
      description:
        "Delivering high-quality electrical services, ensuring safety and efficiency for both residential and commercial projects.",
      // icon: <IconElectrical />,
    },
    {
      title: "Global Accessibility",
      description:
        "Access your tools and data from anywhere, with a global infrastructure that ensures uninterrupted service.",
      // icon: <IconGlobe />,
    },
    {
      title: "In-Depth Analytics",
      description:
        "Leverage detailed analytics to gain actionable insights, helping you make informed decisions and drive growth.",
      // icon: <IconChartBar />,
    },
    {
      title: "Seamless Integration",
      description:
        "Our solutions integrate smoothly with your existing infrastructure, ensuring a hassle-free experience.",
      // icon: <IconPlug />,
    },
    {
      title: "Customer Support",
      description:
        "Our dedicated support team is available around the clock to assist you with any issues or questions.",
      // icon: <IconHelp />,
    },
  ];

  return (
    <div className="max-container padding-container py-20 lg:py-28">
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
