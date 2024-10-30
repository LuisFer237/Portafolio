import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

const CardProject = ({ items }) => {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-5">
      {items.map((item) => (
        <div data-aos="zoom-in">
          <motion.div
            key={item.id}
            layoutId={item.id}
            className="p-7 bg-gray-800 text-white rounded-md flex justify-between items-center"
          >
            <motion.div className="w-1/2 flex flex-col">
              <motion.h5>{item.subtitle}</motion.h5>
              <motion.h2>{item.title}</motion.h2>

              <motion.button
                onClick={() => setSelectedId(item.id)}
                className="underline underline-offset-2 font-semibold hover:text-gray-400 transition duration-300"
              >
                Ver más
              </motion.button>
            </motion.div>
            <motion.div className="w-1/2">
              <img
                className="rounded-lg"
                src="https://i0.wp.com/stretchingmexico.com/wp-content/uploads/2024/07/placeholder-1.png?fit=1200%2C800&ssl=1"
                alt=""
              />
            </motion.div>
          </motion.div>
        </div>
      ))}

      <AnimatePresence>
        {selectedId && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 "
          >
            <motion.div
              layoutId={selectedId}
              className="bg-gray-800 p-8 rounded-md w-1/2 text-white relative"
            >
              <motion.button
                onClick={() => setSelectedId(null)}
                className="absolute top-3 right-3 bg-gray-600 text-white rounded-full p-2 size-9 flex justify-center items-center
                        hover:bg-gray-700 transition duration-300 hover:text-gray-300"
              >
                <FontAwesomeIcon icon={faX} className="" />
              </motion.button>
              <motion.h5>
                {items.find((item) => item.id === selectedId).subtitle}
              </motion.h5>
              <motion.h2>
                {items.find((item) => item.id === selectedId).title}
              </motion.h2>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CardProject;
