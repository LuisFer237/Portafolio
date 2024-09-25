import { useState, useEffect } from 'react';
import './App.css';

import AOS from "aos";
import "aos/dist/aos.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faBars } from '@fortawesome/free-solid-svg-icons';
import Astronaut from './components/Astronaut.jsx';
import About from './components/About';
import Technologies from './components/Technologies';
import { motion } from "framer-motion";

import tailwindIcon from '/icons/tailwind.png';
import cssIcon from '/icons/css.png';
import figmaIcon from '/icons/figma.png';
import laravelIcon from '/icons/laravel.png';
import mysqlIcon from '/icons/mysql.png';
import phpIcon from '/icons/php.png';
import postgresqlIcon from '/icons/postgresql.png';
import livewireIcon from '/icons/livewire.png';
import htmlIcon from '/icons/html.png';
import gitIcon from '/icons/git.png';
import reactIcon from '/icons/react.png';

function App() {
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    AOS.init({});
  }, []);

  const frontEndIcons = [tailwindIcon, cssIcon, figmaIcon, livewireIcon, htmlIcon];
  const backEndIcons = [laravelIcon, mysqlIcon, phpIcon, postgresqlIcon];
  const toolIcons = [gitIcon];
  const learningIcons = [reactIcon];

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <div>
        {/* <Astronaut /> */}

        <nav className='top-0 left-0 flex flex-wrap justify-between items-center p-4 text-white'>
          <div>
            {/* Logo o título */}
          </div>

          <div className='md:hidden mb-2'>
            <button onClick={toggleMenu} className='buttonM'>
              <FontAwesomeIcon icon={faBars} className='p-1'/>
            </button>
          </div>

          <div className={`flex flex-wrap justify-around items-center gap-5 animate__animated animate__fadeIn text-xl ${showMenu ? 'block' : 'hidden'} md:flex`}>
            <a href="#sobre-mi" className='buttonM'>Sobre mi</a>
            <a href="#mi-trabajo" className='buttonM'>Mi trabajo</a>
            <a href="#contactame" className='buttonM'>Contactame</a>
          </div>
        </nav>

        <header className='z-50 -mt-14'>
          <About />
        </header>

        {/* Sección: Sobre mi */}
        <section id="sobre-mi" className='mb-10'>
          <div className='flex flex-col items-center'>
            {/* Descripcion */}
            <div className='w-full md:w-1/2 p-5'>
              <p className='text-white text-3xl font-semibold mb-5 text-center' data-aos="flip-right">Sobre mi</p>
              <p className='text-white text-lg font-light text-justify' data-aos="fade-up">
                Soy un desarrollador web apasionado por la tecnología y la programación. Me gusta aprender cosas nuevas y estar en constante evolución.
                Tengo experiencia en el desarrollo de aplicaciones web y móviles, así como en el diseño de interfaces de usuario.
              </p>
            </div>

            {/* Mis conocimientos */}
            <div className='p-10 z-50 w-full'>
              <p className='text-white text-3xl font-semibold mb-5 text-center' data-aos="flip-left">Mis conocimientos</p>

              <Technologies title="Front-End" icons={frontEndIcons} reverse={false} />
              <Technologies title="Back-End" icons={backEndIcons} reverse={true} />
              <Technologies title="Herramientas" icons={toolIcons} reverse={false} />
              <Technologies title="Aprendiendo" icons={learningIcons} reverse={true} />

            </div>
          </div>
        </section>

        {/* Sección: Mi trabajo */}
        <section id="mi-trabajo" className='px-4 md:px-16 mb-10'>
          {/* Contenido de la sección "Mi trabajo" */}
        </section>

        {/* Sección: Contactame */}
        <section id="contactame" className='px-4 md:px-16 mb-10'>
          
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

        </section>
      </div>
    </>
  );
}

export default App;