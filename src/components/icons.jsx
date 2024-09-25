import React from 'react';
import cssIcon from '/icons/css.png';
import figmaIcon from '/icons/figma.png';
import htmlIcon from '/icons/html.png';
import laravelIcon from '/icons/laravel.png';
import mysqlIcon from '/icons/mysql.png';
import phpIcon from '/icons/php.png';
import postgresqlIcon from '/icons/postgresql.png';
import tailwindIcon from '/icons/tailwind.png';
import gitIcon from '/icons/git.png';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const icons = [
    { src: cssIcon, alt: 'css-logo', name: 'CSS' },
    { src: figmaIcon, alt: 'figma-logo', name: 'Figma' },
    { src: htmlIcon, alt: 'html-logo', name: 'HTML' },
    { src: laravelIcon, alt: 'laravel-logo', name: 'Laravel' },
    { src: mysqlIcon, alt: 'mysql-logo', name: 'MySQL' },
    { src: phpIcon, alt: 'php-logo', name: 'PHP' },
    { src: postgresqlIcon, alt: 'postgresql-logo', name: 'PostgreSQL' },
    { src: tailwindIcon, alt: 'tailwind-logo', name: 'TailwindCSS' },
    { src: gitIcon, alt: 'git-logo', name: 'Git' },
];

const Icons = () => {

    useEffect(() => {
        AOS.init({});
    }, []);

    return (
        <div className='flex justify-around items-center flex-wrap gap-10' >
            {icons.map((icon, index) => (

                <>
                    <div data-aos="zoom-in">
                        <img
                            key={index}
                            src={icon.src}
                            data-tooltip-target={icon.alt}
                            className='h-16 w-auto object-cover mt-5 mb-3 hover:scale-125 hover:shadow-lg transition duration-300'
                            alt={icon.alt} />
                        <div id={icon.alt} role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                            {icon.name}
                        </div>
                    </div>
                </>
            ))}
        </div>
    );
};

export default Icons;