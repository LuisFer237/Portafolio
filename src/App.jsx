import { useState, useEffect } from "react";
import "./App.css";

import AOS from "aos";
import "aos/dist/aos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faBars } from "@fortawesome/free-solid-svg-icons";
import Astronaut from "./components/Astronaut.jsx";
import About from "./components/About";
import Technologies from "./components/Technologies";
import { motion } from "framer-motion";

import tailwindIcon from "/icons/tailwind.png";
import cssIcon from "/icons/css.png";
import figmaIcon from "/icons/figma.png";
import laravelIcon from "/icons/laravel.png";
import mysqlIcon from "/icons/mysql.png";
import phpIcon from "/icons/php.png";
import postgresqlIcon from "/icons/postgresql.png";
import livewireIcon from "/icons/livewire.png";
import htmlIcon from "/icons/html.png";
import gitIcon from "/icons/git.png";
import reactIcon from "/icons/react.png";
import CardProject from "./components/CardProject.jsx";

function App() {
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    AOS.init({});
  }, []);

  const frontEndIcons = [
    { src: tailwindIcon, name: "Tailwind CSS" },
    { src: cssIcon, name: "CSS" },
    { src: figmaIcon, name: "Figma" },
    { src: livewireIcon, name: "Livewire" },
    { src: htmlIcon, name: "HTML" },
  ];

  const backEndIcons = [
    { src: laravelIcon, name: "Laravel" },
    { src: mysqlIcon, name: "MySQL" },
    { src: phpIcon, name: "PHP" },
    { src: postgresqlIcon, name: "PostgreSQL" },
  ];
  const toolIcons = [{ src: gitIcon, name: "Git" }];

  const learningIcons = [{ src: reactIcon, name: "React" }];

  const items = [
    { id: 1, title: "Project 1", subtitle: "Subtitle 1" },
    { id: 2, title: "Project 2", subtitle: "Subtitle 2" },
    { id: 3, title: "Project 3", subtitle: "Subtitle 3" },
  ];

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  // <div class="relative h-full w-full bg-slate-950"><div class="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)]"></div></div>
  return (
    <>
      <div className="relative min-h-screen">
        <div className="absolute inset-0 -z-10 min-h-screen w-full items-center px-5 py-24 bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        {/* <div class="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div> */}
        <nav className="fixed top-0 left-0 flex flex-wrap justify-between items-center p-4 text-white w-full">
          <div>{/* Logo o título */}</div>

          <div className="md:hidden mb-2">
            <button onClick={toggleMenu} className="buttonM">
              <FontAwesomeIcon icon={faBars} className="p-1" />
            </button>
          </div>

          <div
            className={`flex flex-wrap justify-around items-center gap-5 animate__animated animate__fadeIn text-xl ${
              showMenu ? "block" : "hidden"
            } md:flex`}
          >
            <a
              href="#sobre-mi"
              className="hover:scale-105 transition duration-300 hover:text-gray-400"
            >
              Sobre mi
            </a>
            <a
              href="#mi-trabajo"
              className="hover:scale-105 transition duration-300 hover:text-gray-400"
            >
              Mi trabajo
            </a>
            <a
              href="#contactame"
              className="hover:scale-105 transition duration-300 hover:text-gray-400"
            >
              Contactame
            </a>
          </div>
        </nav>

        <header className="z-50 ">
          <About />
        </header>

        {/* Sección: Sobre mi */}
        <section id="sobre-mi" className="mt-10">
          <div className="flex flex-col items-center">
            {/* Descripcion */}
            <div className="w-full md:w-1/2 p-5">
              <p
                className="text-white text-3xl font-semibold mb-5 text-center"
                data-aos="flip-right"
              >
                Sobre mi
              </p>
              <p
                className="text-white text-lg font-light text-justify"
                data-aos="fade-up"
              >
                Soy un desarrollador web apasionado por la tecnología y la
                programación. Me gusta aprender cosas nuevas y estar en
                constante evolución. Tengo experiencia en el desarrollo de
                aplicaciones web y móviles, así como en el diseño de interfaces
                de usuario.
              </p>
            </div>

            {/* Mis conocimientos */}
            <div className="p-10 z-50 w-full">
              <p
                className="text-white text-3xl font-semibold mb-5 text-center"
                data-aos="flip-left"
              >
                Mis conocimientos
              </p>

              <Technologies
                title="Front-End"
                icons={frontEndIcons}
                reverse={false}
              />
              <Technologies
                title="Back-End"
                icons={backEndIcons}
                reverse={true}
              />
              <Technologies
                title="Herramientas"
                icons={toolIcons}
                reverse={false}
              />
              <Technologies
                title="Aprendiendo"
                icons={learningIcons}
                reverse={true}
              />
            </div>
          </div>
        </section>

        {/* Sección: Mi trabajo */}
        <section id="mi-trabajo" className="px-4 md:px-16 mx-auto">
          <p
            className="text-white text-3xl font-semibold mb-10 text-center"
            data-aos="flip-left"
          >
            Mis proyectos
          </p>

          <CardProject items={items} />
        </section>

        {/* Sección: Contactame */}
        {/* <section id="contactame" className='px-4 md:px-16'>
          
          <div className='flex flex-col items-center'>
            <div className='w-full md:w-1/2 p-5'>
              <p className='text-white text-3xl font-semibold mb-5 text-center' data-aos="flip-right">Contactame</p>
              <form className='flex flex-col gap-4'>
                <input 
                  type="text" 
                  placeholder="Nombre" 
                  className='p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500'
                />
                <input 
                  type="email" 
                  placeholder="Correo Electrónico" 
                  className='p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500'
                />
                <textarea 
                  placeholder="Mensaje" 
                  className='p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500'
                  rows="5"
                />
                <button 
                  type="submit" 
                  className='p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300'
                >
                  <FontAwesomeIcon icon={faPaperPlane} className='me-2' /> Enviar
                </button>
              </form>
            </div>
          </div>

        </section> */}
      </div>
    </>
  );
}

export default App;
