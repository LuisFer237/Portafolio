import React from 'react';

const Technologies = ({ title, icons }) => {
    return (
        <div>
            <div className='flex justify-between items-center gap-10 mt-10'>

                <div className='flex justify-around items-center gap-5'>
                    {icons.map((icon, index) => (
                        <img key={index} src={icon} alt="" className='h-16 w-auto object-cover mt-5 mb-3 hover:scale-125 hover:shadow-lg transition duration-300' />
                    ))}
                </div>

                <div className='border h-14 border-gray-400'></div>


                <div className='text-2xl font-bold text-white '>
                    <p>{title}</p>
                </div>
            </div>
        </div>
    );
}

export default Technologies;