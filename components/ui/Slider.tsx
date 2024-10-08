import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';

interface SliderProps {
  slides: string[]; // Array of images or content
}

const Slider: React.FC<SliderProps> = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Slide every 5 seconds

    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    const nextIndex = (currentIndex + 1) % slides.length;
    setCurrentIndex(nextIndex);
    controls.start({
      x: `-${nextIndex * 100}vw`, // Shift by 100vw for each slide
      transition: { duration: 1.5, ease: "easeInOut" }, // Smooth transition
    });
  };

  return (
    <div className="overflow-hidden relative w-full">
      <motion.div
        className="flex h-[400px]"
        animate={controls}
        initial={false}
        style={{ width: `${slides.length * 100}vw` }} // Total width to accommodate all slides
      >
        {slides.map((slide, index) => (
          <motion.div
            key={index}
            className="flex-shrink-0 rounded-2xl"
            style={{ width: `100vw` }} // Each slide takes full viewport width
          >
            <img src={slide} alt={`Slide ${index + 1}`} className="w-full h-[400px] object-cover rounded-2xl" />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Slider;
