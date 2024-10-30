import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX, faLocationArrow } from "@fortawesome/free-solid-svg-icons";

const CardProject = ({ items }) => {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-5">
      {items.map((item) => (
        <div data-aos="zoom-in" className="">
          <div className="transition duration-300 hover:scale-[101%] hover:outline hover:outline-2 hover:outline-gray-400 rounded-md">
            <motion.div
              key={item.id}
              layoutId={item.id}
              className="p-7 bg-gray-800 text-white rounded-md flex justify-center items-center hover:bg-gray-900 transition-colors duration-300"
            >
              <motion.div className="w-1/2 flex flex-col h-full pb-5 px-5">
                <div className="flex-grow space-y-2">
                  <motion.h2 className="text-2xl font-semibold text-cyan-500">
                    {item.title}
                  </motion.h2>
                  <motion.h5>{item.shortDes}</motion.h5>
                </div>
                <motion.button
                  onClick={() => setSelectedId(item.id)}
                  className="underline underline-offset-2 font-semibold hover:text-gray-400 transition duration-300 self-end absolute bottom-0 mb-10 text-lg"
                >
                  Ver más
                </motion.button>
              </motion.div>
              <motion.div className="w-1/2">
                <img
                  className="rounded-lg h-72 w-full object-cover"
                  src={item.image}
                  alt=""
                />
              </motion.div>
            </motion.div>
          </div>
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
              className="bg-gray-800 p-8 rounded-md md:w-3/4 mx-3 text-white relative"
            >
              <motion.button
                onClick={() => setSelectedId(null)}
                className="absolute top-3 right-3 bg-gray-600 text-white rounded-full p-2 size-9 flex justify-center items-center
                      hover:bg-gray-700 transition duration-300 hover:text-gray-300"
              >
                <FontAwesomeIcon icon={faX} className="" />
              </motion.button>

              <div className="md:flex justify-between items-center">
                <div className="flex flex-col gap-3 justify-start items-start pe-10 w-1/2">
                  <motion.h2 className="text-2xl text-cyan-500">
                    {items.find((item) => item.id === selectedId).title}
                  </motion.h2>

                  {/* Logos */}
                  <div className="flex gap-3 ms-2 items-center">
                    {items
                      .find((item) => item.id === selectedId)
                      .icons.map((icon, index) => (
                        <div key={index} className="size-6">
                          {icon.svg}
                        </div>
                      ))}
                  </div>

                  <motion.h5>
                    {items.find((item) => item.id === selectedId).descripcion}
                  </motion.h5>

                  <a
                    href={items.find((item) => item.id === selectedId).link}
                    target="_blank"
                    className="text-white py-2 px-4 rounded-lg bg-blue-500 hover:bg-blue-600 transition duration-300 self-end"
                  >
                    <FontAwesomeIcon icon={faLocationArrow} className="pe-2" />{" "}
                    Visitar
                  </a>
                </div>
                <div>
                  <motion.img
                    src={items.find((item) => item.id === selectedId).image}
                    alt=""
                    className="rounded-lg h-72 w-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CardProject;
