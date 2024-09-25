import React from 'react';

const Technologies = ({ title, icons }) => {
    return (
        <div>
            <div className='flex flex-col md:flex-row justify-between items-center gap-10 mt-10'>

                <div className='flex flex-wrap justify-around items-center gap-5'>
                    {icons.map((icon, index) => (
                        <img key={index} src={icon} alt="" className='h-16 w-auto object-cover mt-5 mb-3 hover:scale-125 hover:drop-shadow-xl transition duration-300' />
                    ))}
                </div>

                <div className='hidden md:block border h-14 border-gray-400'></div>

                <div className='text-2xl font-bold text-white text-center md:text-left'>
                    <p>{title}</p>
                </div>
            </div>
        </div>
    );
}

export default Technologies;