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
              className="p-8 bg-stone-900 text-white rounded-lg flex flex-col md:flex-row justify-around items-start md:h-80 hover:bg-stone-800 transition-colors duration-300"
            >
              <div className="w-full md:w-1/2 mb-5 md:mb-0 me-0 md:me-3">
                <p className="text-2xl font-semibold text-cyan-500 mb-5">
                  {item.title}
                </p>
                <p className="text-white overflow-y-auto h-32">
                  {item.shortDes}
                </p>
                <motion.button
                  onClick={() => setSelectedId(item.id)}
                  className="underline underline-offset-2 font-semibold hover:text-gray-400 transition duration-300 mt-5 text-lg"
                >
                  Ver más
                </motion.button>
              </div>
              <div className="w-full md:w-1/2 flex items-center">
                <img
                  src={item.image}
                  alt=""
                  className="h-[16rem] rounded-lg object-cover w-full md:w-auto"
                />
              </div>
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
            className="fixed inset-0 flex items-center justify-center flex-wrap bg-black bg-opacity-50 z-50"
          >
            <motion.div
              layoutId={selectedId}
              className="bg-stone-900 p-8 rounded-md md:w-3/4 md:h-2/3 mx-2 my-5 text-white relative"
            >
              <motion.button
                onClick={() => setSelectedId(null)}
                className="absolute top-3 right-3 bg-gray-600 text-white rounded-full p-2 size-7 flex justify-center items-center
                      hover:bg-gray-700 transition duration-300 hover:text-gray-300"
              >
                <FontAwesomeIcon icon={faX} className="" />
              </motion.button>

              <div className="md:flex justify-between items-center h-full">
                <div className="flex flex-col gap-5 justify-start items-start md:pe-10 md:w-1/2 h-full">
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

                  <motion.h5 className="h-32 md:h-auto overflow-y-auto md:overflow-y-hidden">
                    {items.find((item) => item.id === selectedId).descripcion}
                  </motion.h5>

                  <a
                    href={items.find((item) => item.id === selectedId).link}
                    target="_blank"
                    className="hidden md:block text-white py-2 px-4 rounded-lg bg-blue-500 hover:bg-blue-600 transition duration-300 self-end"
                  >
                    <FontAwesomeIcon icon={faLocationArrow} className="pe-2" />{" "}
                    Visitar
                  </a>
                </div>
                <div className="mt-5 md:mt-0">
                  <motion.img
                    src={items.find((item) => item.id === selectedId).image}
                    alt=""
                    className="rounded-lg h-[23rem] w-full object-cover"
                  />
                  <div className="flex justify-center items-center mt-3">
                    <a
                      href={items.find((item) => item.id === selectedId).link}
                      target="_blank"
                      className="md:hidden block text-white py-2 px-4 rounded-lg bg-blue-500 hover:bg-blue-600 transition duration-300 self-end"
                    >
                      <FontAwesomeIcon
                        icon={faLocationArrow}
                        className="pe-2"
                      />{" "}
                      Visitar
                    </a>
                  </div>
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
