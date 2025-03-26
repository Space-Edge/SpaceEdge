import React from "react";
import { motion } from "framer-motion";
import doorarea from '../interior images/doorarea.jpg'
import sittingarea from '../interior images/sittingarea.jpg'
import libraryarea from '../interior images/libraryarea.jpg'
import kitchen from '../interior images/kitchen.jpg'
import frontdoor from '../interior images/frontdoor.jpg'
import kitchen2 from '../interior images/kitchen2.jpg'
import sitarea from '../interior images/sitarea.jpg'
import sitarea2 from '../interior images/sitarea2.jpg'




const ImageGallery = () => {
  const images = [
    doorarea,
    kitchen,
    libraryarea,
    sittingarea,
    frontdoor,
    kitchen2,
    sitarea,
    sitarea2,
  ];

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-100">
      <motion.div 
        className="w-3/4 h-96 overflow-x-scroll flex space-x-4 p-4 bg-white shadow-lg rounded-lg scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        {images.map((src, index) => (
          <motion.img 
            key={index} 
            src={src} 
            alt={`Random ${index}`} 
            className="rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300" 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default ImageGallery;
