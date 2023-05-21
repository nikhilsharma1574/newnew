import React from 'react'
import Navbar from '@/components/Navbar'
import Image from 'next/image'
import dps from '../../public/svgs/dps.svg'
import SRM from '../../public/svgs/SRM.svg'
import Footer from '@/components/Footer'
const About = () => {
return (
    <div>
        <Navbar/>
        <div className=' m-6 p-6'>
            <div className='flex'>

            <div className='flex-1 flex-col h-full w-full'>
            <p className='text-6xl font-bold'>
                About me
            </p>

            <div className='p-4 pt-20'>
                <p className='mt-5'>Hi, my name is Nikhil Sharma. I completed my schooling from Delhi Public School, Bhilai in 2020 and I am currently pursuing a B.Tech course in Computer Science and Technology with a specialization in Big Data Analytics from SRM University, Chennai.</p>
                <p className='mt-5'>Apart from my academic pursuits, I am passionate about coding and have a strong foundation in programming languages such as C++, Java, React, Next.js, and Android development. I have worked on various projects related to these languages, which has allowed me to hone my skills and gain valuable experience.In addition to my technical skills, I am also actively involved in extracurricular activities.</p>
                <p>I have organized several Hackathons, participated in Projects Day, and conducted various technical events in my college. These activities have helped me to develop my leadership and communication skills, as well as my ability to work well in a team.</p>
                <p className='mt-5'>I believe that technology has the power to transform society and make the world a better place. With my skills and passion, I am eager to contribute to this transformation and make a positive impact on the world.</p>
            </div>
            </div>
            <div className='flex flex-1 pl-6 justify-center items-center'>
                <ol className="relative border-l border-gray-200 dark:border-gray-700">                  
                    <li className="mb-10 ml-4">
                        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">May 2020</time>
                        <div className='flex items-center'>
                        <Image alt="Test" className='m-2' src={dps} width={30}/>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Delhi Public School , Bhilai</h3>
                        </div>
                        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Completed className 12th ,All India Senior School Certificate Examination (CBSE) in course PCM With 94%.</p>
                    </li>
                    <li className="mb-10 ml-4">
                        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">June 2024</time>
                        <div className='flex items-center'>
                        <Image alt="Test" className='m-2' src={SRM} width={30}/>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">SRM University , Chennai</h3>
                        </div>
                        <p className="text-base font-normal text-gray-500 dark:text-gray-400">Currently in SRM University Ramapuram campus ,3rd year 6th semester persuing Computer Science and Engineering Specalized in Big Data Analytics , with current CGPA of 9.5.</p>
                    </li>
                </ol>
            </div>
            </div>
        {/* <div>
            Hello
        </div> */}
        </div>
        <Footer/>
    </div>
)
}

export default About