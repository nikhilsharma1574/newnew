import React from 'react'
import Image from 'next/image'
const Coming_soon = ({internship_title , image_link,desc}) => {
return (
    <div>
        <div role="status" className="flex space-y-8 h-full md:space-y-0 md:flex md:items-center scale-100 hover:scale-110 transition-transform hover:cursor-pointer">
                <div className="flex-1/2 items-center justify-center w-full h-48 bg-gray-300 rounded sm:w-96 dark:bg-gray-800">
                    <Image alt="Test" src={image_link} className="p-6 object-contain h-full"/>
                </div>
                <div className='flex-1/2 w-full h-full'>
                    <h1 className='font-bold text-2xl text-center mt-2 uppercase'>
                        {internship_title}
                    </h1>
                    <p className='p-3 text-[14px] text-gray-300 line-clamp-4'>
                    {desc}
                    </p>
                </div>
                <span className="sr-only">Loading...</span>
            </div>
    </div>
)
}

export default Coming_soon