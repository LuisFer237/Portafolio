import React from 'react';

const Technologies = ({ title, icons, reverse }) => {
    return (
        <div className='flex flex-col items-center gap-10 mt-10'>
            <div className={`flex flex-col items-center gap-10 md:flex-row ${reverse ? 'md:flex-row-reverse' : ''} w-full justify-center`} data-aos={reverse ? 'fade-up-right' : 'fade-up-left'}>

                <div className='text-2xl font-bold text-white text-center md:text-left'>
                    <p>{title}</p>
                </div>

                <div className='border border-gray-400 w-full md:w-auto md:h-14'></div>

                <div className='flex flex-wrap justify-center items-center gap-5'>
                    {icons.map((icon, index) => (
                        <div key={index} className='flex flex-col items-center'>
                            <img src={icon.src} alt={icon.name} className='h-16 w-auto object-cover mt-5 mb-3 hover:scale-125 hover:drop-shadow-xl transition duration-300' />
                            <p className='text-white text-sm mt-2'>{icon.name}</p>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}

export default Technologies;