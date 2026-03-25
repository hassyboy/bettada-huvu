import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MapPin } from 'lucide-react';

export default function Hero() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Highly realistic 3D toss effect using parabolic math approximations and Z-depth
  // Y goes UP dramatically, then starts falling back
  const tossY = useTransform(scrollYProgress, [0, 0.4, 0.8, 1], [0, -450, -200, 100]); 
  
  // Multiple rapid flips on the X and Y axes
  const tossRotateX = useTransform(scrollYProgress, [0, 1], [0, 1440]); // 4 full coin flips
  const tossRotateY = useTransform(scrollYProgress, [0, 1], [0, 360]);  // 1 full barrel roll
  
  // Scale up to simulate coming closer to the camera, then shrinking as it falls away
  const tossScale = useTransform(scrollYProgress, [0, 0.4, 1], [1, 2.5, 0.3]);
  const tossZ = useTransform(scrollYProgress, [0, 0.4, 1], [0, 300, -500]);
  
  // Dynamic drop shadow simulates height from the background layer
  const tossShadow = useTransform(
    scrollYProgress, 
    [0, 0.4, 1], 
    ["0px 15px 35px rgba(0,0,0,0.3)", "0px 150px 100px rgba(0,0,0,0.2)", "0px 5px 15px rgba(0,0,0,0.5)"]
  );
  
  // Background parallax
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <div ref={containerRef} className="relative h-[250vh] bg-stone-light">
      {/* Sticky container that stays fixed while scrolling through the 250vh */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col items-center justify-center perspective-[1200px]">
        
        {/* Parallax Background */}
        <motion.div 
          style={{ y: bgY, opacity: opacity }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-stone-light z-10" />
          <img 
            src="https://images.unsplash.com/photo-1549880181-56a44cf4a9a5?q=80&w=2070&auto=format&fit=crop" 
            alt="Mountain Landscape" 
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Content Layer */}
        <div className="relative z-20 flex flex-col items-center justify-center w-full h-full max-w-5xl px-4 text-center pt-24 pb-12">
          
          {/* Typography */}
          <motion.h1 
            style={{ opacity: opacity }}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter text-white drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)] mb-6"
          >
            Experience The Magic Of <span className="text-accent-sun inline-block">Nature</span>
          </motion.h1>

          <motion.p 
            style={{ opacity: opacity }}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-xl md:text-2xl text-stone-light/90 max-w-3xl font-medium drop-shadow-lg mb-12"
          >
            Bettada Hoovu offers premium, user-friendly tour packages across South India's pristine hill stations and weekend getaways.
          </motion.p>

          {/* Search/Quick Action Bar */}
          <motion.div 
            style={{ opacity: opacity }}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="bg-white/95 backdrop-blur-md p-3 rounded-full shadow-2xl flex items-center justify-between w-full max-w-3xl mx-auto overflow-hidden border-2 border-white/40 z-30 relative"
          >
            <div className="flex items-center px-4 py-2 flex-1 relative">
               <MapPin className="text-primary-green w-6 h-6 mr-4" />
               <input 
                 type="text" 
                 placeholder="Where do you want to go?" 
                 className="bg-transparent border-none focus:outline-none text-earth-dark text-lg w-full placeholder:text-gray-400 font-semibold"
               />
            </div>
            <button className="bg-primary-green hover:bg-earth-dark text-white px-10 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-md">
              Explore
            </button>
          </motion.div>

          <motion.div 
             style={{ opacity: opacity }}
             initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 1 }}
             className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce flex flex-col items-center text-white/90 z-20"
          >
             <span className="text-xs font-bold tracking-[0.2em] uppercase mb-3 drop-shadow-md">Scroll Down</span>
             <div className="w-7 h-12 border-2 border-white rounded-full flex justify-center p-1 shadow-lg bg-black/20">
                <div className="w-1.5 h-3 bg-white rounded-full animate-pulse" />
             </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
