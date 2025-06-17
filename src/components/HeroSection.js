import profileimg from '../assets/about.jpg';
import { motion } from 'framer-motion';
import AboutHighlight from './AboutHighlight';
import Particle from './Particle';
import ScrollingTechBanner from './ScrollingTechBanner';
import ResumeSection from './ResumeSection';

const HeroSection = () => {
  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      rotateY: [0, 5, -5, 0],
      transition: { duration: 1, ease: 'easeOut', delay: 0.5 },
    },
  };

  const heroContentVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section className="overflow-x-hidden"> {/* Changed overflow-x-visible to hidden */}
      <div className="relative w-screen min-h-screen flex items-center justify-center bg-black text-white overflow-hidden">
        <Particle />

        {/* Left Vertical Text - Hidden on mobile */}
        <div
          className="absolute left-0 top-1/2 -translate-y-1/2 -rotate-180 transform hidden md:flex items-center justify-center" // Hide on screens smaller than md
          style={{ writingMode: 'vertical-rl' }}
        >
          <span className="text-gray-500 opacity-30 tracking-[0.3em] uppercase font-semibold text-6xl lg:text-8xl whitespace-nowrap">
            DISCOVER
          </span>
        </div>

        {/* Main Content Section */}
        <div className="px-4 sm:px-6 z-10 w-full"> {/* Added w-full for better mobile control */}
          <ResumeSection />

          {/* Scroll Text */}
          <div className="absolute bottom-6 left-6 transform -rotate-90 origin-bottom-left hidden md:block">
            <span className="text-sm font-semibold text-gray-400 uppercase tracking-widest">Scroll</span>
          </div>

          {/* Main Content */}
          <motion.div
            className="relative z-10 max-w-5xl w-full flex flex-col items-center justify-center gap-6 mx-auto" // Added mx-auto to center content
            initial="hidden"
            animate="visible"
            variants={heroContentVariants}
          >
            <motion.h2
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg text-center" // Added text-center
            >
              AAKANKSHA <span className="text-yellow-400">SONAWANE</span>
            </motion.h2>

            <motion.div
              className="relative w-48 h-48 sm:w-60 sm:h-60 md:w-80 md:h-80 flex items-center justify-center" // Responsive width and height
              variants={imageVariants}
            >
              <div className="absolute w-full h-full rounded-full border-2 md:border-4 border-dashed border-gray-600 animate-spin-slow"></div>
              <div className="absolute w-[90%] h-[90%] rounded-full border-2 md:border-4 border-dotted border-yellow-400 animate-spin-reverse-slow"></div>
              <img
                src={profileimg}
                alt="Aakanksha Sonawane"
                className="w-[90%] h-[90%] rounded-full object-cover border-2 md:border-4 border-gray-900 shadow-2xl"
              />
            </motion.div>

            <div className="w-full max-w-4xl flex flex-col gap-0 px-2 sm:px-4">
              <AboutHighlight />
              <style>
                {`
                  @keyframes scroll {
                      0% { transform: translateX(0); }
                      100% { transform: translateX(-100%); }
                  }
                `}
              </style>
              <ScrollingTechBanner />
            </div>
          </motion.div>
        </div>

        {/* Right Vertical Text - Hidden on mobile */}
        <div
          className="absolute right-0 top-1/2 -translate-y-1/2 rotate-0 transform hidden md:flex items-center justify-center" // Hide on screens smaller than md
          style={{ writingMode: 'vertical-rl' }}
        >
          <span className="text-gray-500 opacity-30 tracking-[0.3em] uppercase font-semibold text-6xl lg:text-8xl whitespace-nowrap">
            EXPLORE
          </span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;