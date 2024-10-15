import { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Define the type for the slide object
interface Slide {
  image: string;
  text: string;
}

// Define the props type for the component
interface AutoSliderWithDotsProps {
  slides: Slide[];
}

const AutoSliderWithDots: React.FC<AutoSliderWithDotsProps> = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const slideCount = slides.length;

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideCount);
    }, 4000); // Change slide every 4 seconds
    return () => clearInterval(interval); // Cleanup on unmount
  }, [slideCount]);

  // Function to handle dot click
  const handleDotClick = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative w-full overflow-hidden"> {/* Ensure overflow-hidden here */}
      {/* Slider */}
      <motion.div
        className="flex" // Flex container to align slides horizontally
        initial={{ x: 0 }}
        animate={{ x: -currentSlide * 100 + "%" }} // Slide based on index
        transition={{ type: "tween", duration: 0.8 }}
        style={{ width: `${slideCount * 100}%` }} // Ensure the container is wide enough for all slides
      >
        {slides.map((slide, index) => (
          <motion.div
            key={index}
            className="relative min-w-full flex-shrink-0"
          >
            {/* Slide image */}
            <img
              src={slide.image}
              alt={`Slide ${index}`}
              width={100}
              height={100}
              className="w-[300px] xl:w-[800px] object-cover object-center h-[250px] xl:h-[400px] rounded-2xl"
            />
           
          </motion.div>
        ))}
      </motion.div>

      {/* Navigation Dots */}
      <div className="mt-5 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              currentSlide === index ? "bg-white" : "bg-gray-400"
            }`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default AutoSliderWithDots;
