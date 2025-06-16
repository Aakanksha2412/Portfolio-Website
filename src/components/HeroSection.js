
import profileimg from '../assets/imgprofile.jpg';
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
    // Main container with relative positioning to anchor the vertical text elements
    <section className="overflow-x-visible">
      
    <div className="relative w-screen min-h-screen flex items-center justify-center bg-black text-white overflow-hidden">
    <Particle />
      
      {/* Left Vertical Text */}
      {/* This element is positioned absolutely relative to the main container. */}
      {/* It's moved to the left, centered vertically, and rotated -90 degrees. */}
        <div 
        className="absolute left-0 top-1/2 -translate-y-1/2 -rotate-180 transform flex items-center justify-center"
        style={{ writingMode: 'vertical-rl' }}
        >
        <span className="text-gray-500 opacity-30 tracking-[0.3em] uppercase font-semibold text-8xl whitespace-nowrap">
            DISCOVER
        </span>
        </div>

      {/* Main Content Section */}
      {/* This is the central block of the layout. */}
       <div className="px-6 z-10">
        
      {/* Side tags */}
      
    {/*<div className="absolute top-1/2 right-4 -translate-y-1/2 hidden md:flex flex-col space-y-3 text-right text-sm text-gray-400 font-semibold">*/}
    <ResumeSection />
  
    

      {/* Scroll Text */}
      <div className="absolute bottom-6 left-6 transform -rotate-90 origin-bottom-left hidden md:block">
        <span className="text-sm font-semibold text-gray-400 uppercase tracking-widest">Scroll</span>
      </div>

      {/* Main Content */}
      <motion.div
        className="relative z-10 max-w-5xl w-full flex flex-col items-center justify-center gap-6"
        initial="hidden"
        animate="visible"
        variants={heroContentVariants}
      >
        <motion.h2
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg"
        >
          AAKANKSHA <span className="text-yellow-400">SONAWANE</span>
        </motion.h2>

        <motion.div
        className="relative w-60 h-60 md:w-80 md:h-80 flex items-center justify-center"
        variants={imageVariants}
        >
        <div className="absolute w-full h-full rounded-full border-4 border-dashed border-gray-600 animate-spin-slow"></div>
        <div className="absolute w-[90%] h-[90%] rounded-full border-4 border-dotted border-yellow-400 animate-spin-reverse-slow"></div>
        <img
        src={profileimg}
        alt="Aakanksha Sonawane"
        className="w-[90%] h-[90%] rounded-full object-cover border-4 border-gray-900 shadow-2xl"
        />
        </motion.div>

         <div className="w-full max-w-4xl flex flex-col gap-0 px-4">
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

      {/* Right Vertical Text */}
      {/* This element is positioned absolutely relative to the main container. */}
      {/* It's moved to the right, centered vertically, and rotated 90 degrees. */}
        <div 
        className="absolute right-0 top-1/2 -translate-y-1/2 rotate-0 transform flex items-center justify-center"
        style={{ writingMode: 'vertical-rl' }}
        >
        <span className="text-gray-500 opacity-30 tracking-[0.3em] uppercase font-semibold text-8xl whitespace-nowrap">
            EXPLORE
        </span>
        </div>


    </div>
    </section>
  );
};

export default HeroSection;
