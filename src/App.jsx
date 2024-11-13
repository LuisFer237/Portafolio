import { useState, useEffect } from "react";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import minecraftHeart from "../public/heart.png";

function App() {
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    AOS.init({});
  }, []);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <>
      <div className="relative min-h-screen">
        <div className="absolute inset-0 -z-10 min-h-screen w-full items-center px-5 py-24 bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        <nav className="fixed top-0 left-0 flex flex-wrap justify-between items-center p-4 text-white w-full z-50">
          <div className="flex gap-3 justify-center items-center">
            {/* Logo o título */}
            <img src={minecraftHeart} alt="" className="size-5" />
            <p className="text-2xl font-semibold">LFLC</p>
          </div>

          <div
            className={`flex-wrap justify-around items-center gap-5 animate__animated animate__fadeIn text-xl md:flex hidden`}
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
              Proyectos
            </a>
            {/* <a
              href="#contactame"
              className="hover:scale-105 transition duration-300 hover:text-gray-400"
            >
              Contactame
            </a> */}
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
                className="text-white text-lg font-light text-justify h-40"
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
            <div className="p-10 z-50 w-full mb-10 mt-5 md:mt-0">
              <p
                className="text-white text-3xl font-semibold mb-10 text-center"
                data-aos="flip-left"
              >
                Mis conocimientos
              </p>
              
              <Technologies />
            </div>
          </div>
        </section>

        {/* Sección: Mi trabajo */}
        <section id="mi-trabajo" className="px-4 md:px-16 mx-auto pt-10 pb-5">
          <p
            className="text-white text-3xl font-semibold mb-10 mt-5 text-center"
            data-aos="flip-left"
          >
            Mis proyectos
          </p>

          <Projects />
        </section>
      </div>
    </>
  );
}

export default App;
