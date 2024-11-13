import React, { useState } from "react";
import { motion } from "framer-motion";
import tailwindIcon from "../../public/icons/tailwind.png";
import cssIcon from "../../public/icons/css.png";
import figmaIcon from "../../public/icons/figma.png";
import laravelIcon from "../../public/icons/laravel.png";
import mysqlIcon from "../../public/icons/mysql.png";
import phpIcon from "../../public/icons/php.png";
import postgresqlIcon from "../../public/icons/postgresql.png";
import livewireIcon from "../../public/icons/livewire.png";
import htmlIcon from "../../public/icons/html.png";
import gitIcon from "../../public/icons/git.png";
import reactIcon from "../../public/icons/react.png";

const Technologies = () => {
  const tech = [
    { src: tailwindIcon, name: "Tailwind CSS" },
    { src: cssIcon, name: "CSS" },
    { src: figmaIcon, name: "Figma" },
    { src: livewireIcon, name: "Livewire" },
    { src: htmlIcon, name: "HTML" },
    { src: laravelIcon, name: "Laravel" },
    { src: mysqlIcon, name: "MySQL" },
    { src: phpIcon, name: "PHP" },
    { src: postgresqlIcon, name: "PostgreSQL" },
    { src: gitIcon, name: "Git" },
    { src: reactIcon, name: "React" },
  ];

  const [seeAll, setSeeAll] = useState(false);

  return (
    <div className="w-2/3 m-auto">
      {seeAll ? (
        <motion.div
          className="flex justify-center items-center text-white gap-8 flex-wrap"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {tech.map((item) => (
            <motion.div
              key={item.name}
              className="flex flex-col justify-center items-center"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={item.src}
                alt={item.name}
                className="h-16 w-auto object-cover mt-5 mb-3 hover:scale-125 hover:drop-shadow-xl transition duration-300"
              />
              <p>{item.name}</p>
            </motion.div>
          ))}
        </motion.div>
      ) : (
        <motion.div className="slider">
          <div className="slide-track">
            {tech.map((item) => (
              <motion.div key={item.name} className="slide">
                <div className="slide-content flex flex-col justify-center items-center">
                  <img
                    src={item.src}
                    alt={item.name}
                    className="h-20 w-auto object-cover mb-3"
                  />
                  <p>{item.name}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}

      <div className="flex justify-center items-center mt-7">
        <button
          onClick={() => setSeeAll(!seeAll)}
          className="text-white py-2 px-4 border border-white rounded-lg 
          bg-gray-300 bg-opacity-10 hover:bg-opacity-20 transition duration-300"
        >
          {seeAll ? "Ver menos" : "Ver todos"}
        </button>
      </div>
    </div>
  );
};

export default Technologies;
