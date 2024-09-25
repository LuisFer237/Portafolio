// "use client";
import { useState, useEffect } from 'react'
import './App.css'

import AOS from "aos";
import "aos/dist/aos.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Astronaut from './components/Astronaut.jsx';
// import Icons from './components/Icons';
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

  useEffect(() => {
    AOS.init({});
  }, []);

  const frontEndIcons = [tailwindIcon, cssIcon, figmaIcon, livewireIcon, htmlIcon];

  const backEndIcons = [laravelIcon, mysqlIcon, phpIcon, postgresqlIcon];

  const toolIcons = [gitIcon];

  const learningIcons = [reactIcon];

  return (
    <>
      <div>

        <Astronaut />


        <nav className='top-0 left-0 flex justify-between items-center p-4 text-white'>


          <div>
          </div>

          <div className='flex justify-around items-center gap-5 animate__animated animate__bounceInDown text-xl '>
            <a href="#sobre-mi" className='buttonM'>Sobre mi</a>
            <a href="#mi-trabajo" className='buttonM'>Mi trabajo</a>
            <a href="#contactame" className='buttonM'>Contactame</a>
          </div>
        </nav>
        
        <header className='z-50'>
          <About />
        </header>

        {/* Sección: Sobre mi */}
        <section id="sobre-mi" className=' mb-10'>
          <div className='flex  flex-col  items-center'>
            {/* Descripcion */}
            <div className='w-1/2 p-5'>
              <p className='text-white text-3xl font-semibold mb-5 text-center' data-aos="flip-right">Sobre mi</p>
              <p className='text-white text-lg font-light text-justify' data-aos="fade-up">
                Soy un desarrollador web apasionado por la tecnología y la programación. Me gusta aprender cosas nuevas y estar en constante evolución. 
                Tengo experiencia en el desarrollo de aplicaciones web y móviles, así como en el diseño de interfaces de usuario.
              </p>
            </div>

            {/* Mis conocimientos */}
            <div className=' p-10 z-50'>
              
                <p className='text-white text-3xl font-semibold mb-5 text-center' data-aos="flip-left">Mis conocimientos</p>

                <Technologies title="Front-End" icons={frontEndIcons}  />

                <Technologies title="Back-End" icons={backEndIcons}  />

                <Technologies title="Herramientas" icons={toolIcons}  />

                <Technologies title="Aprendiendo" icons={learningIcons}  />


                {/* <Icons /> */}
            </div>
          </div>

          {/* Lo que estoy aprendiendo */}
          <div>

            <p className='text-white text-3xl font-semibold mb-5 text-center' data-aos="flip-left">Mis conocimientos</p>

          </div>

        </section>

        {/* Sección: Mi trabajo */}
        <section id="mi-trabajo" className='px-16 mb-10'>
          {/* Contenido de la sección "Mi trabajo" */}
        </section>

        {/* Sección: Contactame */}
        <section id="contactame" className='px-16 mb-10'>
          {/* Contenido de la sección "Mis conocimientos" */}
        </section>
      </div>
    </>
  )
}

export default App
