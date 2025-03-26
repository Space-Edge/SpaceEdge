import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import doorarea from '../interior images/doorarea.jpg'
import sittingarea from '../interior images/sittingarea.jpg'
import libraryarea from '../interior images/libraryarea.jpg'
import kitchen from '../interior images/kitchen.jpg'

const images = [
  { name: "Library Area", img: libraryarea },
  { name: "Sitting Area", img: sittingarea},
  { name: "Kitchen", img: kitchen },
  { name: "Foyer area", img: doorarea},
];

const ProjectShowcase = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="p-10 text-center">
      <h2 className="text-4xl font-bold mb-6"> Proudly Built</h2>
      {/* Image Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((item, index) => (
          <div key={index} className="cursor-pointer">
            <img
              src={item.img}
              alt={item.name}
              className="w-full h-40 object-cover rounded-lg shadow-md hover:scale-105 transition"
              onClick={() => setSelectedImage(item)}
            />
            <p className="mt-2 font-semibold">{item.name}</p>
          </div>
        ))}
      </div>

      {/* Enlarged Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              src={selectedImage.img}
              alt={selectedImage.name}
              className="w-3/4 md:w-1/2 lg:w-1/3 rounded-lg shadow-lg"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectShowcase;
